import { useEffect, useState } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="rounded-md bg-cobalt-900 p-1.5">
            <Truck className="h-5 w-5 text-route-400" strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-cobalt-950">
            JB <span className="text-route-500">Transportes</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-cobalt-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton>Solicitar Cotação</WhatsAppButton>
        </div>

        <button
          className="rounded-md p-2 text-cobalt-950 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Navegação móvel">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-ink">
                {l.label}
              </a>
            ))}
            <WhatsAppButton className="mt-2 justify-center">Solicitar Cotação</WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  )
}
