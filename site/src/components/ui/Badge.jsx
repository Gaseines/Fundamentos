export function Badge({ children, variant = 'soft', className = '' }) {
  const variants = {
    green: 'bg-primary-50 text-primary',
    soft:  'bg-neutral-bg text-neutral-soft',
    pdf:   'bg-amber-50 text-amber-700',
    video: 'bg-primary-50 text-primary-400',
    audio: 'bg-blue-50 text-blue-600',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-pill text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
