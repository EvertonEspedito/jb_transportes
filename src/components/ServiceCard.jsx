export default function ServiceCard({ icon: Icon, nome, descricao }) {
  return (
    <div className="group rounded-lg border border-ink/10 bg-white p-7 transition-colors hover:border-route-400">
      <div className="inline-flex rounded-md bg-cobalt-950 p-3 transition-colors group-hover:bg-route-500">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-cobalt-950">{nome}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{descricao}</p>
    </div>
  )
}
