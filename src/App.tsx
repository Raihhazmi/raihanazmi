import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Work } from './sections/Work'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-3 focus:font-mono focus:text-meta focus:text-text uppercase tracking-[0.18em]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
