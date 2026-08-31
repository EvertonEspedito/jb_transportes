import { Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function ProvaSocial() {
  return (
    <section id="depoimentos" className="bg-[#f5f7fc]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          eyebrow="Clientes"
          title="Espaço reservado para depoimentos reais"
          description="Em breve, avaliações e fotos de clientes atendidos pela JB Transportes serão adicionadas aqui."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-dashed border-ink/20 bg-white p-7">
              <Quote className="h-6 w-6 text-route-400" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-ink/40">
                Espaço reservado para depoimento real de cliente, a ser inserido pela JB Transportes.
              </p>
              <p className="mt-4 text-xs font-medium text-ink/30">— Nome do cliente</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
