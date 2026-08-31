import { MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { rotas } from '../data/content'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Cobertura() {
  return (
    <section id="cobertura" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Cobertura"
              title="Rotas regulares pelo Nordeste"
              description="Atuação consolidada em João Pessoa-PB com rotas frequentes para outras capitais e cidades da região."
            />
            <ul className="mt-8 space-y-3">
              {rotas.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm text-ink/75">
                  <MapPin className="h-4 w-4 text-route-500" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton message="Olá! Gostaria de saber sobre rotas de frete/mudança.">
                Consultar Minha Rota
              </WhatsAppButton>
            </div>
          </div>

          <div className="aspect-square rounded-lg border border-ink/10 bg-[#f5f7fc]">
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-ink/40">
              Espaço reservado para mapa de rotas de cobertura
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
