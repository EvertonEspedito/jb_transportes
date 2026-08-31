export default function SectionHeader({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-wide ${light ? 'text-route-400' : 'text-route-500'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-cobalt-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-ink/65'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
