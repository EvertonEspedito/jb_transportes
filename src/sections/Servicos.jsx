import { Home, Building2, Truck, Package, Bike, Car } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { servicos } from '../data/content'

const icons = [Home, Building2, Truck, Package, Bike, Car]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-[#f5f7fc]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Serviços de frete e mudança"
          description="Soluções completas para transporte de casas, empresas e cargas em geral."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <ServiceCard key={s.nome} icon={icons[i]} nome={s.nome} descricao={s.descricao} />
          ))}
        </div>
      </div>
    </section>
  )
}
