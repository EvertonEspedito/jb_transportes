import { Truck, Phone, MapPin } from 'lucide-react'
import { whatsapp, contato } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-cobalt-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-route-400" strokeWidth={2} aria-hidden="true" />
              <span className="font-display text-lg font-bold">JB Transportes</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Fretes e mudanças com segurança em João Pessoa e no Nordeste, desde 2017.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Navegação</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/55">
              <li><a href="#servicos" className="hover:text-route-400">Serviços</a></li>
              <li><a href="#seguranca" className="hover:text-route-400">Segurança</a></li>
              <li><a href="#cobertura" className="hover:text-route-400">Cobertura</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/55">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {whatsapp.displayNumber}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {contato.regiao}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Documentação</h3>
            <p className="mt-3 text-sm text-white/55">CT-e e MDF-e emitidos em todas as operações de transporte.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} JB Transportes. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
