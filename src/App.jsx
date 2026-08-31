import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Diferenciais from './sections/Diferenciais'
import Servicos from './sections/Servicos'
import Seguranca from './sections/Seguranca'
import Cobertura from './sections/Cobertura'
import ProvaSocial from './sections/ProvaSocial'
import CTAFinal from './sections/CTAFinal'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'JB Transportes',
  areaServed: 'Nordeste do Brasil',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'João Pessoa',
    addressRegion: 'PB',
    addressCountry: 'BR',
  },
  telephone: '+55 83 99147-2953',
}

export default function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Seguranca />
        <Cobertura />
        <ProvaSocial />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
