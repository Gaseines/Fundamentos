import { useState, useMemo } from 'react'
import { licoes } from '../data/licoes'
import { ciclos } from '../data/trilhas'

export function useSearch() {
  const [query, setQuery] = useState('')

  const normalizar = str =>
    str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

  const resultados = useMemo(() => {
    const q = normalizar(query.trim())
    if (!q || q.length < 2) return []
    return licoes
      .filter(l => normalizar(l.titulo).includes(q))
      .slice(0, 20)
      .map(l => ({ ...l, ciclo: ciclos[l.cicloId] }))
  }, [query])

  return { query, setQuery, resultados, buscando: query.trim().length >= 2 }
}
