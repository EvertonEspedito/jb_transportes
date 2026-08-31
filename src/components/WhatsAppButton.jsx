import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/content'

export default function WhatsAppButton({
  message,
  children,
  variant = 'primary',
  className = '',
}) {
  const base =
    'inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-route-500 text-white hover:bg-route-600',
    outline: 'border-2 border-cobalt-900 text-cobalt-900 hover:bg-cobalt-900 hover:text-white',
    ghost: 'text-white hover:text-route-400',
  }

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label="Falar pelo WhatsApp com a JB Transportes"
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
      {children}
    </a>
  )
}
