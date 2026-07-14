import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'

export function TemaCard({ licao, numero, onClick }) {
  const temPdf   = Boolean(licao.transcricao)
  const temVideo = Boolean(licao.completa?.video || licao.resumida?.video)
  const temAudio = Boolean(
    licao.completa?.audio?.google || licao.resumida?.audio?.spotify || licao.resumida?.audio?.deezer
  )

  return (
    <motion.button
      onClick={() => onClick(licao)}
      className="card text-left p-4 sm:p-5 w-full cursor-pointer transition-shadow hover:shadow-card-hover group"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      {/* Número */}
      <span className="text-[11px] font-semibold text-neutral-muted mb-1 block">
        Lição {licao.id}
      </span>

      {/* Título */}
      <h3 className="text-sm sm:text-[15px] font-semibold text-neutral-ink leading-snug mb-3 group-hover:text-primary transition-colors">
        {licao.titulo}
      </h3>

      {/* Badges de conteúdo */}
      <div className="flex flex-wrap gap-1.5">
        {temPdf
          ? <Badge variant="pdf">Apostila</Badge>
          : <Badge variant="soft">Apostila em breve</Badge>
        }
        {temVideo && <Badge variant="video">Vídeo</Badge>}
        {temAudio && <Badge variant="audio">Áudio</Badge>}
      </div>
    </motion.button>
  )
}
