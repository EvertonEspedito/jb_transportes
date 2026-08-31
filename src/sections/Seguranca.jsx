import { ShieldCheck, FileText, FileCheck2, Radar } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { seguranca } from '../data/content'

const icons = [ShieldCheck, FileText, FileCheck2, Radar]

export default function Seguranca() {
  return (
    <section id="seguranca" className="bg-cobalt-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          eyebrow="Confiança"
          title="Carga protegida do início ao fim"
          light
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {seguranca.map((s, i) => {
            const Icon = icons[i]
            return (
              <div key={s.t} className="bg-cobalt-950 p-7">
                <Icon className="h-6 w-6 text-route-400" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
