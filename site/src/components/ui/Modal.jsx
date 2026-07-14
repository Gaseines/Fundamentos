import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Modal({ aberto, onFechar, children }) {
  useEffect(() => {
    if (!aberto) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [aberto])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onFechar() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onFechar])

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={e => { if (e.target === e.currentTarget) onFechar() }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-neutral-ink/40 backdrop-blur-[2px]" />

          {/* Painel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg bg-neutral-card rounded-card shadow-modal overflow-y-auto max-h-[90dvh]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          >
            <button
              onClick={onFechar}
              aria-label="Fechar"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-muted hover:text-neutral-ink hover:bg-neutral-bg transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
