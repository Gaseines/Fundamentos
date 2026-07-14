import { useSearch } from '../../hooks/useSearch'

export function Header({ onAbrirMenu, onSelecionarLicao }) {
  const { query, setQuery, resultados, buscando } = useSearch()

  return (
    <header className="sticky top-0 z-30 bg-neutral-card border-b border-neutral-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">

        {/* Botão menu (mobile) */}
        <button
          onClick={onAbrirMenu}
          aria-label="Abrir menu de ciclos"
          className="sm:hidden p-2 rounded-lg border border-neutral-border hover:bg-neutral-bg transition-colors flex-shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        {/* Marca */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Fundamentação" className="h-8 w-auto" />
        </div>

        {/* Busca */}
        <div className="flex-1 max-w-md relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted pointer-events-none"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="search"
            className="input-search"
            placeholder="Buscar tema..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          {/* Dropdown de resultados */}
          {buscando && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-card border border-neutral-border rounded-card shadow-modal z-50 max-h-72 overflow-y-auto">
              {resultados.length === 0 ? (
                <p className="px-4 py-3 text-sm text-neutral-muted">Nenhum tema encontrado.</p>
              ) : (
                resultados.map(l => (
                  <button
                    key={l.id}
                    onClick={() => { onSelecionarLicao(l); setQuery('') }}
                    className="w-full text-left px-4 py-2.5 hover:bg-neutral-bg transition-colors"
                  >
                    <p className="text-sm font-medium text-neutral-ink leading-snug">{l.titulo}</p>
                    <p className="text-xs text-neutral-muted mt-0.5">Ciclo {l.ciclo?.numero} — {l.ciclo?.titulo}</p>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
