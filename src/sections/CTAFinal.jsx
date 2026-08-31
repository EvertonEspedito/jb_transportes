import WhatsAppButton from '../components/WhatsAppButton'

export default function CTAFinal() {
  return (
    <section className="bg-route-500">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-10 lg:py-20">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Pronto para planejar sua mudança ou frete?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
          Fale agora com a JB Transportes e receba uma cotação personalizada pelo WhatsApp.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            variant="outline"
            className="border-cobalt-950 bg-cobalt-950 text-white hover:bg-cobalt-900"
          >
            Solicitar Cotação Agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
