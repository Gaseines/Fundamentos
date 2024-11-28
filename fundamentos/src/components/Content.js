import React, { useState } from "react";

//styles
import styles from "./Content.module.css";

//Components

const Content = () => {
  const [activeOS, setActiveOS] = useState(false);
  const [activeNC, setActiveNC] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // Opções Ordem Cronológica
  const idsOs = [
    {
      id: 1,
      name: "1 - Temas Panorâmicos",
      sub: [
        { name: "Conselho de Deus" },
        { name: "Aprender Crescer e Servir" },
        { name: "Porque Jesus veio ao mundo?" },
        { name: "O Nascimento da Igreja" },
        { name: "Porta Caminho e Alvo" },
      ],
    },
    {
      id: 2,
      name: "2 - Jesus, sua vida e sua obra",
      sub: [
        { name: "Jesus é Deus" },
        { name: "Jesus é Homem" },
        { name: "A bíblia afirma: Jesus é Deus feito Homem" },
        { name: "Jesus o Messias esperado" },
        { name: "A vida de Jesus foi perfeita e irrepreensível" },
        { name: "Jesus fez uma Obra tremenda e grandiosa" },
        { name: "Jesus como nossa referência e modelo de obreiro" },
        { name: "O que Jesus ensinou?" },
        { name: "O Evangelho do Reino" },
        { name: "As 5 características de um discípulo" },
        { name: "Jesus anunciava e aplicava o Evangelho" },
        { name: "Jesus Morreu na Cruz" },
        { name: "Jesus desceu ao Hades" },
        { name: "Jesus Ressuscitou - Parte 1" },
        { name: "Jesus Ressuscitou - Parte 2" },
        { name: "Jesus foi exaltado à destra do Pai" },
        { name: "Jesus após a exaltação" },
      ],
    },
    {
      id: 3,
      name: "3 - A volta de Jesus",
      sub: [
        { name: "Porque e como estudar sobre a volta de Jesus" },
        { name: "O que Jesus ensinou sobre a Sua volta" },
        { name: "As 70 semanas de Daniel" },
        { name: "A volta de Jesus: O ensino Apostólico parte 1" },
        { name: "A volta de Jesus: O ensino Apostólico parte 2" },
        { name: "A volta de Jesus: O ensino Apostólico parte 3" },
        { name: "O Jesus que virá" },
        { name: "Arrebatamento secreto?" },
        { name: "Apocalipse - Parte 1: As cartas às sete Igrejas" },
        { name: "Apocalipse - Parte 3: O Cordeiro" },
        { name: "Apocalipse - Parte 3: Os acontecimentos finais" },
        { name: "Apocalipse - Parte 4: O milênio" },
        { name: "Jesus volta para os fiéis e prudentes" },
      ],
    },
    {
      id: 4,
      name: "4 - Jesus é a porta do Reino",
      sub: [
        { name: "Convicção de pecados" },
        { name: "A fé que salva - Parte 1" },
        { name: "A fé que salva - Parte 2" },
        { name: "Arrependimento - Parte 1" },
        { name: "Arrependimento - Parte 2" },
        { name: "Batismo em Cristo" },
        { name: "Batismo com Espírito Santo" },
        {
          name: "A habitação do Espírito Santo e o batismo com o Espírito Santo",
        },
        { name: "Recebereis poder" },
      ],
    },
    {
      id: 5,
      name: "5 - O Espírito Santo",
      sub: [
        { name: "O Espírito Santo é Deus" },
        { name: "O Espírito Santo na história" },
        { name: "O Espírito Santo e os apóstolos" },
        { name: "O Espírito Santo e a Igreja" },
        { name: "O Espírito e a noiva dizem: Vem!" },
        { name: "O Espírito Santo e a Bíblia" },
        { name: "O caráter do Espírito Santo" },
        { name: "Andando no Espírito" },
        { name: "Os dons do Espírito Santo" },
      ],
    },
    {
      id: 6,
      name: "6 - O Deus pai",
      sub: [
        { name: "O Deus triuno" },
        { name: "Mostra-nos o Pai" },
        { name: "Quem é o Pai?" },
        { name: "E o Pai o amará" },
      ],
    },
    {
      id: 7,
      name: "7 - O propósito eterno de Deus",
      sub: [
        { name: "Uma família para o Pai" },
        { name: "Uma noiva para o Filho" },
        { name: "Um edifício para o Espírito Santo" },
      ],
    },
    {
      id: 8,
      name: "8 - Os primeiros passos no Caminho",
      sub: [
        { name: "Perdoar - Parte 1" },
        { name: "Perdoar - Parte 2" },
        { name: "Confessar pecados" },
        { name: "Ser transparente" },
        { name: "Perseverar na Palavra" },
        { name: "Perseverar na oração" },
        { name: "Perseverar no Jejum" },
        { name: "Perseverar no partir do pão" },
        { name: "Perseverar na comunhão" },
        { name: "Proclamar o Evangelho" },
      ],
    },
    {
      id: 9,
      name: "9 - Caminhando como sacerdote",
      sub: [
        { name: "O sacerdócio de todos os santos" },
        { name: "Os ministérios" },
        { name: "A Igreja na casa - Parte 1" },
        { name: "A Igreja na casa - Parte 2" },
        { name: "A Igreja na casa - Parte 3" },
        { name: "O que são juntas e ligamentos" },
        { name: "Juntas e ligamentos: Discipulado - Parte 1" },
        { name: "Juntas e ligamentos: Discipulado - Parte 2" },
        { name: "Juntas e ligamentos: Discipulado - Parte 3" },
        { name: "Juntas e ligamentos: Companheirismo - Parte 1" },
        { name: "Juntas e ligamentos: Companheirismo - Parte 2" },
        { name: "Juntas e ligamentos naturais: Família" },
        { name: "Discipulado e autoritarismo" },
        { name: "O valor da sujeição" },
        { name: "Catequese" },
        { name: "Cooperadores" },
        { name: "Capacitando os discipuladores" },
      ],
    },
    {
      id: 10,
      name: "10 - No caminho da salvação",
      sub: [
        { name: "Salvação em Cristo" },
        { name: "A justificação pela fé" },
        { name: "Evidências sobre a Salvação" },
        { name: "Desenvolvendo a santificação" },
        { name: "Santificação plena: Espírito" },
        { name: "Amando a Deus de todo coração" },
      ],
    },
    {
      id: 11,
      name: "11 - Caminhando como família",
      sub: [
        { name: "Família: Projeto de Deus" },
        { name: "O casamento" },
        { name: "Os papéis dos cônjuges" },
        { name: "O padrão de Deus para o marido" },
        { name: "O padrão de Deus para a esposa" },
        { name: "A comunicação no casamento" },
        { name: "A criação de filhos" },
        { name: "Exercício da Paternidade" },
        { name: "Exercício da Paternidade na criação de filhos pequenos" },
        { name: "Exercício da Paternidade com Jovens" },
        { name: "Exercício da paternidade na criação de filhos adultos" },
        { name: "Divórcio e recasamento" },
        { name: "Sofrimos sobre o divórcio" },
        { name: "Obediência e honra aos pais" },
        { name: "A presença de Cristo no lar" },
        { name: "Compromisso para o casamento" },
        { name: "Casamento: paixão ou escolha?" },
        { name: "Conselhos aos noivos" },
      ],
    },
    {
      id: 12,
      name: "12 - Os dons do Espírito santo",
      sub: [
        
      ],
    },
  ];

  //Opcões Novos contratados
  const idsNC = [
    {
      id: 1,
      name: "1 - Temas Panorâmicos",
      sub: [
        { name: "Conselho de Deus" },
        { name: "Aprender Crescer e Servir" },
        { name: "Porque Jesus veio ao mundo?" },
        { name: "O Nascimento da Igreja" },
        { name: "Porta Caminho e Alvo" },
      ],
    },
    {
      id: 2,
      name: "2 - Jesus, sua vida e sua obra",
      sub: [
        { name: "Jesus é Deus" },
        { name: "Jesus é Homem" },
        { name: "A bíblia afirma: Jesus é Deus feito Homem" },
        { name: "Jesus o Messias esperado" },
        { name: "A vida de Jesus foi perfeita e irrepreensível" },
        { name: "Jesus fez uma Obra tremenda e grandiosa" },
        { name: "Jesus como nossa referência e modelo de obreiro" },
        { name: "O que Jesus ensinou?" },
        { name: "O Evangelho do Reino" },
        { name: "As 5 características de um discípulo" },
        { name: "Jesus anunciava e aplicava o Evangelho" },
        { name: "Jesus Morreu na Cruz" },
        { name: "Jesus desceu ao Hades" },
        { name: "Jesus Ressuscitou - Parte 1" },
        { name: "Jesus Ressuscitou - Parte 2" },
        { name: "Jesus foi exaltado à destra do Pai" },
        { name: "Jesus após a exaltação" },
        { name: "O que Jesus ensinou sobre a Sua volta" },
      ],
    },
    {
      id: 3,
      name: "4 - Jesus é a porta do Reino",
      sub: [
        { name: "A fé que salva - Parte 1" },
        { name: "A fé que salva - Parte 2" },
        { name: "Arrependimento - Parte 1" },
        { name: "Arrependimento - Parte 2" },
        { name: "Batismo em Cristo" },
        { name: "Batismo com Espírito Santo" },
        {
          name: "A habitação do Espírito Santo e o batismo com o Espírito Santo",
        },
        { name: "Recebereis poder" },
      ],
    },
    {
      id: 4,
      name: "5 - O Espírito Santo",
      sub: [
        { name: "O Espírito Santo é Deus" },
        { name: "O Espírito Santo na história" },
        { name: "O Espírito Santo e os apóstolos" },
        { name: "O Espírito Santo e a Igreja" },
        { name: "O Espírito e a noiva dizem: Vem!" },
        { name: "O Espírito Santo e a Bíblia" },
        { name: "O caráter do Espírito Santo" },
        { name: "Andando no Espírito" },
        { name: "Os dons do Espírito Santo" },
      ],
    },
    {
      id: 5,
      name: "8 - Os primeiros passos no Caminho",
      sub: [
        { name: "Perdoar - Parte 1" },
        { name: "Perdoar - Parte 2" },
        { name: "Confessar pecados" },
        { name: "Ser transparente" },
        { name: "Perseverar na Palavra" },
        { name: "Perseverar na oração" },
        { name: "Perseverar no Jejum" },
        { name: "Perseverar no partir do pão" },
        { name: "Perseverar na comunhão" },
        { name: "Proclamar o Evangelho" },
      ],
    },
    {
      id: 6,
      name: "9 - Caminhando como Sacerdote",
      sub: [
        { name: "Proclamar o Evangelho" },
        { name: "O sacerdócio de todos os santos" },
        { name: "Os ministérios" },
        { name: "A Igreja na casa - Parte 1" },
        { name: "A Igreja na casa - Parte 2" },
        { name: "O que são juntas e ligamentos" },
        { name: "Juntas e ligamentos: Discipulado - Parte 1" },
        { name: "Juntas e ligamentos: Discipulado - Parte 2" },
        { name: "Juntas e ligamentos: Companheirismo - Parte 1" },
        { name: "Juntas e ligamentos: Companheirismo - Parte 2" },
        { name: "Juntas e ligamentos naturais: Família" },
      ],
    },
    {
      id: 7,
      name: "6 - O Deus pai",
      sub: [
        { name: "O Deus triuno" },
        { name: "Mostra-nos o Pai" },
        { name: "Quem é o Pai?" },
        { name: "O Pai o amará" },
        { name: "Uma família para o Pai" },
        { name: "Uma noiva para o Filho" },
        { name: "Um edifício para o Espírito Santo" },
      ],
    },
    {
      id: 8,
      name: "3 - A volta de Jesus",
      sub: [
        { name: "Porque e como estudar sobre a volta de Jesus" },
        { name: "As 70 semanas de Daniel" },
        { name: "A volta de Jesus: O ensino apostólico - Parte 1" },
        { name: "A volta de Jesus: O ensino apostólico - Parte 2" },
        { name: "A volta de Jesus: O ensino apostólico - Parte 3" },
        { name: "O Jesus que virá" },
        { name: "Arrebatamento secreto?" },
        { name: "Apocalipse - Parte 1: As cartas às sete igrejas" },
        { name: "Apocalipse - Parte 2: O Cordeiro" },
        { name: "Apocalipse - Parte 3: Os acontecimentos finais" },
        { name: "Apocalipse - Parte 4: O milênio" },
        { name: "Jesus volta para os fiéis e prudentes" },
      ],
    },
    {
      id: 9,
      name: "9 - Parte 2 - Caminhando como Sacerdote",
      sub: [
        { name: "Discipulado e autoritarismo" },
        { name: "O valor da sujeição" },
        { name: "Catequese" },
        { name: "Cooperadores" },
        { name: "Capacitando os discipuladores" },
      ],
    },
  ];

  const clearAll = () => {
    setActiveLink(null)
    setActiveNC(false)
    setActiveOS(false)
  }

  //Escolhendo Ordem Sequencial
  const handleClickOS = () => {
    clearAll()
    setActiveNC(false);
    setActiveOS(true);
  };

  //Escolhendo Novos Convetidos
  const handleClickNC = () => {
    clearAll()
    setActiveNC(true);
    setActiveOS(false);
  };

  // Clicado em um dos links
  const handleClickLink = (id) => {
    setActiveLink(id);
    console.log(activeLink);
  };

  return (
    <div className={styles.container_content}>


      {/* Botão Ordem Cronológica */}

      <button
        className={`${styles.btn1} ${activeOS ? styles.on1 : ""} ${
          activeNC ? styles.off1 : ""
        }`}
        onClick={handleClickOS}
      >
        Ordem Sequencial
      </button>

      {/* Links Ordem Cronológica */}

      <div className={`${styles.container_links} ${styles.linksOS}`}>
        {idsOs.map((opc) => (
          <>
            <button
              key={opc.id}
              className={`${styles.links} ${
                activeLink === opc.id ? styles.active_link : ""
              }`}
              style={{ display: activeOS ? "block" : "none" }}
              onClick={() => handleClickLink(opc.id)}
            >
              {opc.name}
            </button>
          </>
        ))}
      </div>


      {/* Botão Novos Convertidos */}

      <button
        className={`${styles.btn2} ${activeNC ? styles.on2 : ""} ${
          activeOS ? styles.off2 : ""
        }`}
        onClick={handleClickNC}
      >
        Novos Convetidos
      </button>


        {/* Links novos convertidos */}

      <div className={`${styles.container_links} ${styles.linksNC}`}>
        {idsNC.map((opc) => (
          <>
            <button
              key={opc.id}
              className={`${styles.links} ${
                activeLink === opc.id ? styles.active_link : ""
              }`}
              style={{ display: activeNC ? "block" : "none" }}
              onClick={() => handleClickLink(opc.id)}
            >
              {opc.name}
            </button>
          </>
        ))}
      </div>

      <h1></h1>
    </div>
  );
};

export default Content;
