import Hero from './components/Hero'
// import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About />   ✅ THIS WAS MISSING */}
      <Portfolio />
      <Services />
      <ContactForm />
    </>
  )
}