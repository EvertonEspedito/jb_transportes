import { CalendarCheck, MapPinned, PackageCheck } from 'lucide-react'
import { diferenciais } from '../data/content'

const icons = [CalendarCheck, MapPinned, PackageCheck]

export default function Diferenciais() {
  return (
    <section className="border-b border-ink/8 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {diferenciais.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.t} className="flex items-start gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-route-500" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-cobalt-950">{item.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.d}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
