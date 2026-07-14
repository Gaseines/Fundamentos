import { motion, AnimatePresence } from 'framer-motion'
import { licoesPorCiclo } from '../../data/licoes'

export function Sidebar({ aberto, onFechar, trilhaAtual, trilhas, ciclosOrdenados, cicloAtualId, onSelecionarTrilha, onSelecionarCiclo }) {
  return (
    <>
      {/* Overlay mobile */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            className="fixed inset-0 z-20 bg-neutral-ink/30 sm:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onFechar}
          />
        )}
      </AnimatePresence>

      {/* Painel lateral */}
      <nav
        aria-label="Ciclos"
        className={[
          'fixed sm:sticky top-0 sm:top-[56px] left-0 h-full sm:h-[calc(100dvh-56px)]',
          'w-72 sm:w-64 z-30 sm:z-auto',
          'bg-neutral-card border-r sm:border border-neutral-border sm:rounded-card',
          'flex flex-col overflow-hidden',
          'transition-transform duration-200 ease-out',
          aberto ? 'translate-x-0' : '-translate-x-full sm:translate-x-0',
        ].join(' ')}
      >
        {/* Seletor de trilha */}
        <div className="p-3 border-b border-neutral-border flex-shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-muted mb-2 px-1">Trilha</p>
          <div className="flex gap-1.5">
            {trilhas.map(t => (
              <button
                key={t.id}
                onClick={() => onSelecionarTrilha(t.id)}
                className={[
                  'flex-1 text-xs font-medium py-1.5 px-2 rounded-lg transition-colors text-center leading-tight',
                  trilhaAtual.id === t.id
                    ? 'bg-primary text-white'
                    : 'text-neutral-soft border border-neutral-border hover:bg-neutral-bg',
                ].join(' ')}
              >
                {t.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de ciclos */}
        <div className="flex-1 overflow-y-auto p-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-muted px-2 pt-1 pb-2">
            Ciclos
          </p>
          {ciclosOrdenados.map((ciclo, idx) => {
            const count = licoesPorCiclo[ciclo.id]?.length ?? 0
            const ativo = ciclo.id === cicloAtualId

            return (
              <button
                key={ciclo.id}
                onClick={() => { onSelecionarCiclo(ciclo.id); onFechar() }}
                className={[
                  'w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-colors mb-0.5',
                  ativo
                    ? 'bg-primary-50 text-primary font-semibold'
                    : 'text-neutral-ink hover:bg-neutral-bg',
                ].join(' ')}
              >
                <span className="text-sm leading-snug line-clamp-2">
                  <span className="text-[11px] font-medium text-neutral-muted mr-1">{idx + 1}.</span>
                  {ciclo.titulo}
                  {ciclo.placeholder && <span className="ml-1 text-[10px] italic text-neutral-muted">(em breve)</span>}
                </span>
                {count > 0 && (
                  <span className={[
                    'flex-shrink-0 text-[11px] px-1.5 py-0.5 rounded-pill font-medium',
                    ativo ? 'bg-white text-primary' : 'bg-neutral-bg text-neutral-muted',
                  ].join(' ')}>
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
