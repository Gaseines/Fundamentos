import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { ciclos } from '../../data/trilhas'

function youtubeEmbedUrl(url) {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

function AudioLinks({ audio }) {
  if (!audio?.google && !audio?.deezer && !audio?.spotify) return null
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {audio.google  && <LinkPill href={audio.google}  label="Google Podcasts" icone="🎙️" />}
      {audio.deezer  && <LinkPill href={audio.deezer}  label="Deezer"          icone="🎵" />}
      {audio.spotify && <LinkPill href={audio.spotify} label="Spotify"         icone="🟢" />}
    </div>
  )
}

function LinkPill({ href, label, icone }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill border border-neutral-border text-xs font-medium text-neutral-soft hover:border-primary-100 hover:bg-primary-50 hover:text-primary transition-colors"
    >
      <span>{icone}</span>{label}
    </a>
  )
}

function VersaoPlayer({ titulo, versao }) {
  const embedUrl = youtubeEmbedUrl(versao?.video)
  const temAlgo  = embedUrl || versao?.audio?.google || versao?.audio?.deezer || versao?.audio?.spotify
  if (!temAlgo) return null

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-muted mb-2">{titulo}</p>

      {embedUrl && (
        <div className="relative w-full rounded-xl overflow-hidden bg-neutral-ink mb-2" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title={titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <AudioLinks audio={versao?.audio} />
    </div>
  )
}

export function TemaModal({ licao, aberto, onFechar }) {
  const [aba, setAba] = useState('completa')

  if (!licao) return null

  const ciclo = ciclos[licao.cicloId]
  const temCompleta = licao.completa?.video || licao.completa?.audio?.google
  const temResumida = licao.resumida?.video || licao.resumida?.audio?.google
  const temConteudo = licao.transcricao || temCompleta || temResumida

  return (
    <Modal aberto={aberto} onFechar={onFechar}>
      <div className="p-5 sm:p-6">
        {/* Cabeçalho */}
        <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-0.5">
          Ciclo {ciclo?.numero} — {ciclo?.titulo}
        </p>
        <h2 className="text-base sm:text-lg font-bold text-neutral-ink pr-8 mb-4 leading-snug">
          {licao.id}. {licao.titulo}
        </h2>

        {temConteudo ? (
          <div className="flex flex-col gap-4">
            {/* Apostila */}
            {licao.transcricao && (
              <a
                href={licao.transcricao}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-border hover:border-primary-100 hover:bg-primary-50 transition-colors group"
              >
                <span className="text-xl">📄</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-ink group-hover:text-primary transition-colors">Apostila (PDF)</p>
                  <p className="text-xs text-neutral-muted">Google Drive</p>
                </div>
                <svg className="text-neutral-muted group-hover:text-primary-400 transition-colors flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}

            {/* Abas completa / resumida */}
            {(temCompleta || temResumida) && (
              <div>
                {temCompleta && temResumida && (
                  <div className="flex gap-1 mb-3 bg-neutral-bg p-1 rounded-xl">
                    {['completa', 'resumida'].map(a => (
                      <button
                        key={a}
                        onClick={() => setAba(a)}
                        className={[
                          'flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize',
                          aba === a
                            ? 'bg-neutral-card text-neutral-ink shadow-card'
                            : 'text-neutral-muted hover:text-neutral-ink',
                        ].join(' ')}
                      >
                        {a === 'completa' ? 'Versão completa' : 'Versão resumida'}
                      </button>
                    ))}
                  </div>
                )}

                {(!temCompleta || !temResumida) && (
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-muted mb-2">
                    {temCompleta ? 'Versão completa' : 'Versão resumida'}
                  </p>
                )}

                <VersaoPlayer
                  titulo=""
                  versao={(!temCompleta || !temResumida)
                    ? (temCompleta ? licao.completa : licao.resumida)
                    : (aba === 'completa' ? licao.completa : licao.resumida)
                  }
                />
              </div>
            )}

            {/* Perguntas */}
            {licao.perguntas && (
              <a
                href={licao.perguntas}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-border hover:border-primary-100 hover:bg-primary-50 transition-colors group"
              >
                <span className="text-xl">❓</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-ink group-hover:text-primary transition-colors">Perguntas para estudo</p>
                  <p className="text-xs text-neutral-muted">Google Drive</p>
                </div>
              </a>
            )}
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-neutral-border bg-neutral-bg text-center">
            <p className="text-sm text-neutral-muted">
              Os links desta lição ainda serão adicionados.
            </p>
          </div>
        )}
      </div>
    </Modal>
  )
}
