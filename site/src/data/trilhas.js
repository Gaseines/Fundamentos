/**
 * Definição dos Ciclos (metadados) e das duas Trilhas de navegação.
 * Cada trilha é apenas uma lista ordenada de cicloIds — o conteúdo real
 * vem sempre de licoes.js, sem duplicação.
 */

export const ciclos = {
  c1:  { id: 'c1',  numero: 1,     titulo: 'Temas Panorâmicos' },
  c2:  { id: 'c2',  numero: 2,     titulo: 'Jesus, sua vida e sua obra' },
  c3:  { id: 'c3',  numero: 3,     titulo: 'A volta de Jesus' },
  c4:  { id: 'c4',  numero: 4,     titulo: 'Jesus é a porta do Reino' },
  c5:  { id: 'c5',  numero: 5,     titulo: 'O Espírito Santo' },
  c6:  { id: 'c6',  numero: 6,     titulo: 'O Deus Pai' },
  c7:  { id: 'c7',  numero: 7,     titulo: 'O propósito eterno de Deus' },
  c8:  { id: 'c8',  numero: 8,     titulo: 'Os primeiros passos no Caminho' },
  c9a: { id: 'c9a', numero: '9-A', titulo: 'Caminhando como Sacerdote — Parte 1' },
  c9b: { id: 'c9b', numero: '9-B', titulo: 'Caminhando como Sacerdote — Parte 2' },
  c10: { id: 'c10', numero: 10,    titulo: 'No caminho da salvação' },
  c11: { id: 'c11', numero: 11,    titulo: 'Caminhando como família' },
  c12: { id: 'c12', numero: 12,    titulo: 'Os dons do Espírito Santo', placeholder: true },
}

/**
 * Trilha "Ordem Sequencial" — 12 Ciclos completos.
 * Seguimento: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9-A → 9-B → 10 → 11 → 12
 */
export const trilhaSequencial = {
  id: 'sequencial',
  titulo: 'Ordem Sequencial',
  descricao: 'Percurso completo dos 12 Ciclos de fundamentação.',
  ordem: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9a', 'c9b', 'c10', 'c11', 'c12'],
}

/**
 * Trilha "Novos / Sem Fundamento / Denominações" — Ciclos 1–9 em ordem pedagógica alternativa.
 * Não inclui Ciclos 10, 11 e 12.
 * Ordem: 1 → 2 → 4 → 9-A → 5 → 6 → 7 → 8 → 3 → 9-B
 */
export const trilhaNovos = {
  id: 'novos',
  titulo: 'Novos / Sem Fundamento',
  descricao: 'Sequência pensada para quem ainda não tem base ou vem de outra denominação.',
  ordem: ['c1', 'c2', 'c4', 'c9a', 'c5', 'c6', 'c7', 'c8', 'c3', 'c9b'],
}

export const trilhas = [trilhaSequencial, trilhaNovos]
