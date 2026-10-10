import { useEffect } from 'react'
import { ScrollTrigger } from './lib/gsap'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'
import { Profile } from './sections/Profile'
import { Activity } from './sections/Activity'
import { Gallery } from './sections/Gallery'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    const ready = document.fonts?.ready
    if (ready) void ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-accent focus:bg-paper focus:px-4 focus:py-3 focus:font-mono focus:text-meta focus:text-text uppercase tracking-[0.18em]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Work />
        <Profile />
        <Activity />
        <Gallery />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
