import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header }    from './components/layout/Header'
import { Sidebar }   from './components/layout/Sidebar'
import { TemaCard }  from './components/features/TemaCard'
import { TemaModal } from './components/features/TemaModal'
import { useTrilha } from './hooks/useTrilha'

export default function App() {
  const [menuAberto,  setMenuAberto]  = useState(false)
  const [licaoModal,  setLicaoModal]  = useState(null)
  const [modalAberto, setModalAberto] = useState(false)

  const {
    trilhas,
    trilhaAtual,
    ciclosOrdenados,
    cicloAtual,
    licoesDoCI,
    selecionarTrilha,
    selecionarCiclo,
  } = useTrilha()

  function abrirLicao(licao) {
    setLicaoModal(licao)
    setModalAberto(true)
  }

  function navegarParaLicao(licao) {
    // Se o ciclo da lição não está na trilha atual, troca pra uma que tenha
    if (!trilhaAtual.ordem.includes(licao.cicloId)) {
      const trilhaCompativel = trilhas.find(t => t.ordem.includes(licao.cicloId))
      if (trilhaCompativel) selecionarTrilha(trilhaCompativel.id)
    }
    selecionarCiclo(licao.cicloId)
    abrirLicao(licao)
  }

  return (
    <div className="min-h-dvh bg-neutral-bg">
      <Header
        onAbrirMenu={() => setMenuAberto(true)}
        onSelecionarLicao={licao => { navegarParaLicao(licao); setMenuAberto(false) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex gap-5 items-start">
        <Sidebar
          aberto={menuAberto}
          onFechar={() => setMenuAberto(false)}
          trilhas={trilhas}
          trilhaAtual={trilhaAtual}
          ciclosOrdenados={ciclosOrdenados}
          cicloAtualId={cicloAtual?.id}
          onSelecionarTrilha={selecionarTrilha}
          onSelecionarCiclo={selecionarCiclo}
        />

        {/* Área principal */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={cicloAtual?.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mb-5"
            >
              <h1 className="text-xl sm:text-2xl font-bold text-neutral-ink">
                Ciclo {cicloAtual?.numero} — {cicloAtual?.titulo}
              </h1>
              <p className="text-sm text-neutral-soft mt-1">
                {cicloAtual?.placeholder
                  ? 'As lições deste ciclo serão adicionadas em breve.'
                  : `${licoesDoCI.length} lição${licoesDoCI.length !== 1 ? 'ões' : ''} — clique para abrir apostila ou vídeo.`}
              </p>
            </motion.div>
          </AnimatePresence>

          {cicloAtual?.placeholder ? (
            <div className="p-8 rounded-card border border-dashed border-neutral-border bg-neutral-card text-center">
              <p className="text-neutral-muted text-sm">Conteúdo em preparação.</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={cicloAtual?.id + '-grid'}
                className="grid gap-3 sm:gap-4"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {licoesDoCI.map((licao, i) => (
                  <motion.div
                    key={licao.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                  >
                    <TemaCard licao={licao} numero={i + 1} onClick={abrirLicao} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>

      <TemaModal
        licao={licaoModal}
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
      />
    </div>
  )
}
