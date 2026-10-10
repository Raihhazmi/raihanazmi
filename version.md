# Version Log — raihanazmi.dev

Log pengerjaan & riwayat versi portfolio.
File ini ditambahkan sebagai catatan rilis; isi proyek sendiri tidak berubah karenanya.

---

## v1.0.0 — 2026-10-06 — PRODUCTION RELEASE

### Ringkasan

| | |
|---|---|
| Site | `raihanazmi.dev` — portfolio satu halaman |
| Stack | Vite 8 · React 19 · TypeScript 6 · Tailwind CSS 4 · GSAP 3 |
| Arsitektur | Tanpa backend, tanpa router, tanpa state library, tanpa CMS |
| Entrypoint | `src/main.tsx` → `<StrictMode>` → `App` |
| Repo | https://github.com/Raihhazmi/raihanazmi (`main`) |
| Production | https://raihanazmi.vercel.app |
| Custom domain | `raihanazmi.dev` — **menunggu konfigurasi DNS** |

### Struktur halaman final

```
skip-link → Header → <main>
  Hero · About · Experience (termasuk Recognition) · Education ·
  Skills · Work · Contact
→ Footer
```

Anchor nav: `#work` · `#about` · `#contact` (semua resolve).

---

### Tahapan pengerjaan

**Stage 1–2 — Fondasi**
Proyek Vite + React + TS, token desain di blok `@theme` (`src/index.css`), komponen layout dasar (`Container`, `Section`), pipeline lint/typecheck/build.

**Stage 3 — Header, navigasi, Hero**
Identitas, nav anchor, skip link, landmark (`header`/`main`), H1 tunggal, CTA ≥ 52px. Diverifikasi di 320/390/768/1440/1920.

**Stage 3.5 — Arsitektur konten**
`src/lib/content.ts` jadi satu-satunya sumber data (site, person, about, experience, education, projects, recognition, skills, socials). `Hero` diubah membaca dari sini; tidak ada fakta yang di-hardcode di JSX.

**Master Step 4 — Seluruh section + QA**
- Section baru: `About`, `Experience` (+ Recognition), `Education`, `Skills`, `Work`, `Contact`, `Footer`
- `Reveal` dapat prop `when: 'load' | 'scroll'` — mode scroll = tween *paused* + `IntersectionObserver` sekali jalan (bukan ScrollTrigger: tanpa plugin, tanpa pertumbuhan bundle), tetap StrictMode-safe lewat `gsap.context()` + `ctx.revert()`
- `src/lib/nav.ts` — label & anchor nav dipakai bersama Header/Footer
- `scroll-behavior: smooth` di `html`, dipaksa `auto` oleh blok reduced-motion
- SEO: `robots`, canonical, OG title/description/type/site_name/url, twitter card, **tanpa `og:image` palsu**
- Favicon: monogram **RA** (menggantikan ikon sisa Vite/Netlify berwarna ungu)
- Dihapus: `public/icons.svg`, `src/assets/hero.png`, folder `src/assets/` (tidak direferensikan)
- `AGENTS.md` diperbarui (struktur, motion, aset, deploy)

**Final Step — Git, GitHub, Vercel, Domain, Verifikasi**

---

### Validation gate

| Gate | Hasil |
|---|---|
| `npm run lint` | PASS |
| `npx tsc -b` | PASS |
| `npm run build` | PASS — 35 modul · JS 307.06 kB (gzip 100.47) · CSS 14.32 kB → 16.36 kB · `index.html` 1.88 kB |
| Audit token kontras (20 pasang × 2 skema) | PASS — 0 gagal |
| Audit runtime lokal (7 kasus) | PASS — lihat tabel di bawah |

**Audit runtime lokal** (Chrome headless, waktu nyata, viewport lewat iframe same-origin karena Chrome memaksa min width ±504px):

| case | vw | overflow | elemen overflow | stuck reveal | error | kontras | H1 | sections |
|---|---|---|---|---|---|---|---|---|
| n320 | 320 | 0 | 0 | 0 | 0 | 139/0 gagal | 1 | 6 |
| m390 | 390 | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |
| t768 | 768 | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |
| d1024 | 1024 | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |
| d1440 | 1440 | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |
| w1920 | 1920 | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |
| rm1440 | 1440 (reduced) | 0 | 0 | 0 | 0 | 139/0 | 1 | 6 |

- `rm1440`: `matchMedia(reduced)=true`, GSAP tidak menulis inline style, `scroll-behavior` terukur `auto` (override `!important` bekerja).
- Kasus normal: `scroll-behavior` terukur `smooth` sebelum di-override harness.
- Contrast: 139 elemen ber-text diukur runtime, 0 gagal (WCAG AA).

---

### Git

```
Repository : https://github.com/Raihhazmi/raihanazmi
Branch     : main (tracking origin/main)
Commit     : e98fecb chore: prepare portfolio for production
Push       : OK — remote main = e98fecb
Working tree: bersih
```

- `git init` + `git branch -M main` dilakukan di sesi ini (sebelumnya bukan repo).
- 32 file di-commit; `node_modules/`, `dist/`, `.env`, `.env.*`, `.vercel` masuk `.gitignore`.
- **Repo lama `Raihhazmi/raihan-portofolio` TIDAK disentuh.** Repo itu ternyata berisi proyek berbeda (Supabase admin portal, 10+ commit, ada `.env.keys`) — riwayatnya dipertahankan utuh.

### Vercel

```
Project     : raihanazmi (raihhazmis-projects)
Deployment  : dpl_6Byrrv2iBggTSYHqigqVGL2sJ4bC
Production  : https://raihanazmi.vercel.app   (alias, READY)
Inspect     : https://vercel.com/raihhazmis-projects/raihanazmi/6Byrrv2iBggTSYHqigqVGL2sJ4bC
Build       : npm install → tsc -b && vite build   (iad1, 2 core / 8 GB)
Config      : framework vite · build `npm run build` · output `dist` · install `npm install`
Env vars    : tidak ada (selain `VERCEL_OIDC_TOKEN` di `.env.local`, sudah di-gitignore)
```

- GitHub repo `Raihhazmi/raihanazmi` otomatis terhubung saat project dibuat.
- Project lama `raihan-portofolio` **tidak** dipakai untuk deploy ini.

### Domain

```
Target        : raihanazmi.dev
Status        : PENDING — DNS belum terkonfigurasi, domain belum aktif
Project       : raihanazmi (sudah dipindahkan dari raihan-portofolio)
HTTPS         : aktif untuk *.vercel.app; domain sendiri menunggu DNS
```

Record persis dari `vercel domains verify raihanazmi.dev` — **jangan ditebak, isi di registrar**:

```
Opsi a (A record) — direkomendasikan:
    A    @    216.198.79.1
    A    @    64.29.17.1

Opsi b (ganti nameserver registrar ke):
    ns1.vercel-dns.com
    ns2.vercel-dns.com
```

> Catatan: `vercel domains inspect` masih menampilkan record lama `A raihanazmi.dev 76.76.21.21`. Nilai di atas berasal dari `vercel domains verify`, yaitu perintah yang benar-benar memvalidasi.
> Setelah DNS diubah: `vercel domains verify raihanazmi.dev`.

### Verifikasi production

| Item | Status |
|---|---|
| HTTP `https://raihanazmi.vercel.app/` | **PASS** — 200, `text/html`, 1884 byte |
| HTTP → HTTPS | **PASS** — `http://` → 308 → 200 |
| HSTS | **PASS** — `max-age=63072000; includeSubDomains; preload` |
| HTML head | **PASS** — title (67 char), description, `robots: index, follow`, canonical `https://raihanazmi.dev/`, `og:title/type/url`, `lang="en"`, viewport |
| CSS (`/assets/index-D7ddyvCC.css`) | **PASS** — 200, `text/css`, 16360 B |
| JS (`/assets/index-Daa300SK.js`) | **PASS** — 200, `application/javascript`, 307062 B |
| Favicon (`/favicon.svg`) | **PASS** — 200, `image/svg+xml`, 430 B |
| Nav / anchor / link eksternal | **PASS** — 4/4 anchor resolve; GitHub & LinkedIn `target="_blank" rel="noopener noreferrer"`; email `mailto:` |
| Console (error / unhandledrejection / resource 404) | — (audit runtime, lihat catatan) |
| Responsive 320–1920 | — (audit runtime, lihat catatan) |
| Security | **PASS** — tidak ada private IP, localhost, AWS key, Bearer token, GitHub PAT, URL Supabase, atau credential di bundle produksi |
| Visual manual | **NOT VERIFIED** — lingkungan tidak bisa membaca screenshot/render |

### Catatan

1. **Visual manual: NOT VERIFIED.** Model tidak bisa membaca gambar; `--dump-dom` exit 13; CDP WebSocket deadlock. Semua bukti bersifat programatis (`getBoundingClientRect`, `getComputedStyle`, kontras).
2. **Mode terang tidak bisa di-render** di headless Chrome mesin ini (terkunci `prefers-color-scheme: dark`; flag `--force-prefers-color-scheme=light` tidak didukung). Palet terang diverifikasi analitis: audit token 20 pasang × 2 skema = 0 gagal.
3. **Konten berbahasa Indonesia** (`lang="id"`) pada 3 ringkasan proyek, agar screen reader ganti mesin pelafalan.
4. **Nama employer/situs kerja** (`PT Kalimantan Prima Persada (KPP)`, `Site INDE`, `Kalimantan Timur`) ada di bundle karena memang metadata pengalaman yang ditulis sendiri pada `content.ts` — bukan kredensial, IP, hostname, endpoint, atau arsitektur internal. Kalau dianggap terlalu spesifik, tinggal edit satu baris di `src/lib/content.ts` lalu redeploy.
5. Tidak ada test runner (memang tidak pernah ada); gate-nya lint + tsc + build.

---

## Riwayat versi

| Versi | Tanggal | Isi |
|---|---|---|
| 1.0.0 | 2026-10-06 | Rilis production pertama: seluruh section, SEO, favicon RA, Git + GitHub + Vercel deploy |
| — | 2026-10-05/06 | Stage 3.5 arsitektur konten · Stage 3 Header/Hero · Stage 1–2 fondasi (sebelum versi ber-tag) |
