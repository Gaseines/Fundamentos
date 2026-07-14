import { useState, useMemo } from 'react'
import { trilhas, ciclos } from '../data/trilhas'
import { licoesPorCiclo } from '../data/licoes'

export function useTrilha() {
  const [trilhaId, setTrilhaId]   = useState(trilhas[0].id)
  const [cicloId,  setCicloId]    = useState(null)

  const trilhaAtual = useMemo(
    () => trilhas.find(t => t.id === trilhaId),
    [trilhaId]
  )

  const ciclosOrdenados = useMemo(
    () => trilhaAtual.ordem.map(id => ciclos[id]).filter(Boolean),
    [trilhaAtual]
  )

  const cicloAtualId = cicloId ?? ciclosOrdenados[0]?.id

  const cicloAtual = useMemo(
    () => ciclos[cicloAtualId],
    [cicloAtualId]
  )

  const licoesDoCI = useMemo(
    () => licoesPorCiclo[cicloAtualId] ?? [],
    [cicloAtualId]
  )

  function selecionarTrilha(id) {
    setTrilhaId(id)
    setCicloId(null)  // reseta pro primeiro ciclo da nova trilha
  }

  return {
    trilhas,
    trilhaAtual,
    ciclosOrdenados,
    cicloAtual,
    licoesDoCI,
    selecionarTrilha,
    selecionarCiclo: setCicloId,
  }
}
