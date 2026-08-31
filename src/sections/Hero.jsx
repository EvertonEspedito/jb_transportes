import WhatsAppButton from '../components/WhatsAppButton'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cobalt-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 40%, rgba(255,157,61,0.35) 41%, rgba(255,157,61,0.35) 42%, transparent 43%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-wide text-route-400">
            Fretes e mudanças · João Pessoa e Nordeste desde 2017
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
            Sua mudança em boas mãos
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Transporte residencial, comercial e de cargas com segurança, documentação
            em dia e cobertura em toda a região Nordeste.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton>Solicitar Cotação</WhatsAppButton>
            <a
              href="#seguranca"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-white/60"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-sm rounded-lg border border-white/15 bg-white/5 lg:ml-auto">
            <div className="flex h-full flex-col justify-between p-8">
              <span className="text-xs tracking-wide text-white/50">
                Espaço reservado para foto real da frota ou equipe
              </span>
              <div className="dashed-route w-2/3" />
              <div>
                <p className="font-display text-2xl font-bold">Rotas regulares</p>
                <p className="mt-1 text-sm text-white/60">João Pessoa · Petrolina · Recife</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
