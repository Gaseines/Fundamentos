# Site Fundamentação — briefing para o Claude Code

## Regra geral (vale para toda e qualquer etapa)
Tudo o que for construído — cada tela, componente, modal, listagem — precisa ser responsivo, testado em celular, tablet e desktop. Não é uma etapa separada, é requisito em toda entrega.

## Objetivo
Substituir o mapa mental atual (Mindomo) por um site organizado, bonito e fácil de usar para quem não tem conhecimento técnico, com os Ciclos de estudo, seus temas, apostilas (PDF) e vídeos.

## Stack
- **React + Vite**
- **Framer Motion** — transições entre ciclos/temas, animações de cards e modal
- **ui-ux-pro-max** (skill/plugin do Claude Code, by nextlevelbuilder) — usar para gerar o design system (paleta, tipografia, componentes) a partir da paleta abaixo
- Sugestão: **shadcn/ui** como base de componentes, já que o ui-ux-pro-max tem stack pronta pra isso — mas fica a critério de quem for montar

## Paleta de cores
| Uso | Cor |
|---|---|
| Primária (escura) | `#253E0D` |
| Fundo / neutro | `#F2F2F2` |
| Secundária | verde mais claro (definir tom exato — sugestão: derivar de `#253E0D` clareando ~35–40%, ex. `#4C7A26` ou similar) |

Logo da igreja: colocar em `/public/logo` (ou `/src/assets/logo`) e referenciar a partir daí.

## Estrutura de conteúdo (extraída diretamente do Mindomo, dados reais)

Hierarquia real de cada Tema/Lição: **Ciclo → Tema → Transcrição + { Versão Completa: Vídeo, Áudio (Google/Deezer/Spotify) } + { Versão Resumida: Vídeo, Áudio (Google/Deezer/Spotify) }** — às vezes com "Perguntas" no final.

O mapa tem duas **trilhas** que usam o mesmo conjunto de lições, mas em **ordens diferentes** — corrigindo o que eu tinha dito antes (comparei a ordem dos Ciclos nos dois ramos, não só a contagem):

- **"Ordem Sequencial"** — 12 Ciclos, nesta ordem: 1, 2, 3, 4, 5, 6, 7, 8, 9 (parte 1), 9 (continuação), 10, 11, 12. É a trilha completa, inclui os Ciclos 10, 11 e 12 (Salvação, Família, Dons do Espírito Santo).
- **"Novos / Sem fundamento / Denominações"** — mesmos Ciclos 1 a 9 (mesmas lições, mesmos títulos), mas em outra ordem: 1, 2, 4, 9 (parte 1), 5, 6, 7, 8, 3, 9 (parte 2) — repare que o Ciclo 3 (A volta de Jesus) vem quase no fim, e o Ciclo 4 e o Ciclo 9-parte-1 vêm bem antes. Não tem os Ciclos 10, 11 e 12. É uma sequência pedagógica alternativa (provavelmente pensada pra quem vem de outra denominação ou não tem nenhuma base ainda), então **precisa mesmo virar uma segunda trilha navegável no site**, como você apontou.

Implicação pro modelo de dados: cada **Lição** deve existir uma única vez (com seu PDF, vídeo, áudio), e cada **Trilha** (Ordem Sequencial, Novos/Sem Fundamento) é só uma lista ordenada apontando pra essas lições — assim não duplica conteúdo, só a ordem de navegação muda. O usuário escolhe a trilha no site e navega pelos Ciclos na ordem daquela trilha.

Detalhe de limpeza: dentro do "Ciclo 2" da trilha "Novos" há um nó duplicado no mapa original (o próprio "Ciclo 2" aparece repetido como filho dele mesmo, com as 18 lições de novo dentro) — é só ignorar esse nó extra na hora de migrar, não é conteúdo novo.

### Ciclos e temas (trilha "Ordem Sequencial")

**Ciclo 1 — Temas Panorâmicos** (5 temas)
1 - Conselho de Deus · 2 - Aprender Crescer e Servir · 3 - Porque Jesus veio ao mundo? · 4 - O Nascimento da Igreja · 5 - Porta Caminho e Alvo

**Ciclo 2 — Jesus, sua vida e sua obra** (Lições 6–24, 18 temas)
6 Jesus é Deus · 7 Jesus é Homem · 8 A bíblia afirma: Jesus é Deus feito Homem · 9 Jesus o Messias esperado · 10 A vida de Jesus foi perfeita e irrepreensível · 11 Jesus fez uma obra tremenda e grandiosa · 12 Jesus como nossa referência e modelo de obreiro · 13 O que Jesus ensinou? · 14 O Evangelho do Reino · 15 As 5 características de um discípulo · 16 Jesus anunciava e aplicava o Evangelho · 17 Jesus morreu na cruz · 18 Jesus desceu ao Hades · 19 Jesus ressuscitou – Parte 1 · 20 Parte 2 · 21 Jesus foi exaltado à destra do Pai · 22 Jesus após a exaltação · 24 O que Jesus ensinou sobre a Sua volta

**Ciclo 3 — A volta de Jesus** (Lições 23–35, 13 temas)
23 Porque e como estudar sobre a volta de Jesus · 24 O que Jesus ensinou sobre a Sua volta · 25 As 70 semanas de Daniel · 26–28 A volta de Jesus: o ensino apostólico (partes 1–3) · 29 O Jesus que virá · 30 Arrebatamento secreto? · 31 Apocalipse – Parte 1: as cartas às sete Igrejas · 32 Apocalipse – Parte 2: o Cordeiro · 33 Apocalipse – Parte 3: os acontecimentos finais · 34 Apocalipse – Parte 4: o milênio · 35 Jesus volta para os fiéis e prudentes

**Ciclo 4 — Jesus é a porta do Reino** (Lições 36–44, 9 temas)
36 Convicção de pecados · 37–38 A fé que salva (partes 1–2) · 39–40 Arrependimento (partes 1–2) · 41 Batismo em Cristo · 42 Batismo com Espírito Santo · 43 A habitação do Espírito Santo e o batismo com o Espírito Santo · 44 Recebereis poder

**Ciclo 5 — O Espírito Santo** (Lições 45–53, 9 temas)
45 O Espírito Santo é Deus · 46 O Espírito Santo na história · 47 ...e os apóstolos · 48 ...e a Igreja · 49 O Espírito e a noiva dizem: Vem! · 50 ...e a Bíblia · 51 O caráter do Espírito Santo · 52 Andando no Espírito · 53 Os dons do Espírito Santo

**Ciclo 6 — O Deus Pai** (Lições 54–57, 4 temas)
54 O Deus triuno · 55 Mostra-nos o Pai · 56 Quem é o Pai? · 57 E o Pai o amará

**Ciclo 7 — O propósito eterno de Deus** (Lições 58–60, 3 temas)
58 Uma família para o Pai · 59 Uma noiva para o Filho · 60 Um edifício para o Espírito Santo

**Ciclo 8 — Os primeiros passos no Caminho** (Lições 61–70, 10 temas)
61–62 Perdoar (partes 1–2) · 63 Confessar pecados · 64 Ser transparente · 65 Perseverar na Palavra · 66 ...na oração · 67 ...no jejum · 68 ...no partir do pão · 69 ...na comunhão · 70 Proclamar o Evangelho

**Ciclo 9 — Parte 1 — Caminhando como Sacerdote** (Lições 70–82, 13 temas)
70 Proclamar o Evangelho · 71 O sacerdócio de todos os santos · 72 Os ministérios · 73–75 A Igreja na casa (partes 1–3) · 76 O que são juntas e ligamentos · 77–79 Juntas e ligamentos: Discipulado (partes 1–3) · 80–81 Juntas e ligamentos: Companheirismo (partes 1–2) · 82 Juntas e ligamentos naturais: Família

**Ciclo 9 — Parte 2 — Caminhando como Sacerdote** (Lições 71–87, continuação)
83 Discipulado e autoritarismo · 84 O valor da sujeição · 85 Catequese · 86 Cooperadores · 87 Capacitando os discipuladores

**Ciclo 10 — No caminho da salvação** (Lições 88–93, 6 temas)
88 Salvação em Cristo · 89 A justificação pela fé · 90 Equívocos sobre a Salvação · 91 Desenvolvendo a santificação · 92 Santificação plena: Espírito · 93 Amando a Deus de todo coração

**Ciclo 11 — Caminhando como família** (Lições 94–111, 18 temas)
94 Família: projeto de Deus · 95 O casamento · 96 Os papéis dos cônjuges · 97 O padrão de Deus para o marido · 98 ...para a esposa · 99 A comunicação no casamento · 100 A criação de filhos · 101–104 Exercício da paternidade (geral, filhos pequenos, jovens, filhos adultos) · 105 Divórcio e recasamento · 106 Sofismas sobre o divórcio · 107 Obediência e honra aos pais · 108 A presença de Cristo no lar · 109 Compromisso para o casamento · 110 Casamento: paixão ou escolha? · 111 Conselhos aos noivos

**Ciclo 12 — Os dons do Espírito Santo** — sem temas cadastrados ainda (ciclo vazio/placeholder no mapa atual).

Total: ~111 lições numeradas, cada uma normalmente com Transcrição (link Google Drive) + Vídeo e Áudio (Google Drive/Deezer/Spotify) em versão completa e resumida — mais de 1.000 links de conteúdo ao todo. Os títulos acima têm pequenas inconsistências no mapa original (numeração de "Apocalipse Parte 2/3" trocada, "Condessar" em vez de "Confessar", lições repetidas entre ciclos como a 24 e a 70) — vale revisar com quem produziu o conteúdo antes de migrar.

## Funcionalidades essenciais
- Seletor de trilha (Ordem Sequencial / Novos e Sem Fundamento) — muda a ordem dos Ciclos exibidos, mesmo conteúdo por trás
- Navegação lateral por Ciclo (dentro da trilha escolhida)
- Busca por tema
- Card de tema abre apostila (PDF) e vídeo
- Responsivo (celular é o principal caso de uso pra muita gente da igreja)
- Interface simples o bastante pra qualquer um usar sem instrução

## Protótipo de referência
Arquivo `prototipo-site-igreja.html` (já entregue) mostra o layout base: sidebar de ciclos, grid de cards, modal de apostila/vídeo, busca. Serve de referência de estrutura, não de código final.

## Vídeos (YouTube)
Os vídeos das lições estão todos no mesmo canal do YouTube. Duas abordagens possíveis:
- **Lançamento**: usar os links de vídeo já mapeados por lição (extraídos do mapa mental) e embutir o player via iframe na página da lição — simples, sem API, sem risco de casar vídeo errado com lição errada.
- **Futuro (opcional)**: sincronizar automaticamente com o canal via YouTube Data API v3 (gratuita, 10.000 unidades/dia — de sobra pra esse volume), pra o site puxar vídeos novos sozinho. Precisa de uma lógica de correspondência por título entre o vídeo do canal e a lição, já que os nomes nem sempre batem exatamente.

## Pendências antes de codar
- Extrair os links reais (PDF/vídeo/áudio) de cada tema — hoje temos a hierarquia e os títulos reais, falta mapear os +1.000 links um a um (dá pra fazer com o mesmo método usado aqui, direto na API pública do Mindomo, tema por tema ou em lote)
- Implementar as duas trilhas de navegação (Ordem Sequencial e Novos/Sem Fundamento) sobre o mesmo banco de lições, cada uma com sua própria ordem de Ciclos
- Revisar com a liderança as inconsistências de numeração encontradas (ver seção acima)
- Definir o tom exato do verde mais claro
- Confirmar hospedagem/domínio
