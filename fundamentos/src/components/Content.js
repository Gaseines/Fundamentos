import React, { useState } from "react";

//styles
import styles from "./Content.module.css";

//Components
import Lesson from "./Lesson";

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
        { name: "Conselho de Deus", 
          linkYTc: "https://www.youtube.com/watch?v=7IZFIyVefw8&ab_channel=Fundamentos",
          linkSPc: "https://open.spotify.com/episode/0yUcrlAXdHV7KJ6089HJKI?si=3BoqpMweR9y8xHJU7KMWDA&dl_branch=1&nd=1&dlsi=1087c0f037144306",
          linkDeezerC: "https://www.deezer.com/br/episode/340963652?deferredFl=1",
          linkYTr: "https://www.youtube.com/watch?v=Z6ksxWXT8-I&ab_channel=Fundamentos",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Aprender Crescer e Servir", 
          linkYTc: "https://www.youtube.com/watch?v=aOpMkUKCR-c&ab_channel=Fundamentos",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Porque Jesus veio ao mundo?", 
          linkYTc: "https://www.youtube.com/watch?v=b1BL6liW3M4",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Nascimento da Igreja", 
          linkYTc: "https://www.youtube.com/watch?v=HisslIICtQg",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Porta Caminho e Alvo", 
          linkYTc: "https://www.youtube.com/watch?v=b1ynIypl4_Q",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 2,
      name: "2 - Jesus, sua vida e sua obra",
      sub: [
        { name: "Jesus é Deus", 
          linkYTc: "https://www.youtube.com/watch?v=oLvq0dgU1Ko",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus é Homem", 
          linkYTc: "https://www.youtube.com/watch?v=y2UxzGHG4NA",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A bíblia afirma: Jesus é Deus feito Homem", 
          linkYTc: "https://www.youtube.com/watch?v=uy7lyesnDns",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus, o Messias esperado", 
          linkYTc: "https://www.youtube.com/watch?v=xENVXBFllaE",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A vida de Jesus foi perfeita e irrepreensível", 
          linkYTc: "https://www.youtube.com/watch?v=Fq5VfGohXpc",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus fez uma Obra tremenda e grandiosa", 
          linkYTc: "https://www.youtube.com/watch?v=9NGNpIKk_o4",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus como nossa referência e modelo de obreiro", 
          linkYTc: "https://www.youtube.com/watch?v=JZDu7f08k3M",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O que Jesus ensinou?", 
          linkYTc: "https://www.youtube.com/watch?v=NWSWlQ8yOSc",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Evangelho do Reino", 
          linkYTc: "https://www.youtube.com/watch?v=x5N9bsmdCyQ",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "As 5 características de um discípulo", 
          linkYTc: "https://www.youtube.com/watch?v=VY4M0FZITTU",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus anunciava e aplicava o Evangelho", 
          linkYTc: "https://www.youtube.com/watch?v=UjDXAivOmUg",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus Morreu na Cruz", 
          linkYTc: "https://www.youtube.com/watch?v=CzqZNkkBxDs",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus desceu ao Hades", 
          linkYTc: "https://www.youtube.com/watch?v=7pcUZkem7fM",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus Ressuscitou - Parte 1", 
          linkYTc: "https://www.youtube.com/watch?v=Cw3MoRpDG4Q",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus Ressuscitou - Parte 2", 
          linkYTc: "https://www.youtube.com/watch?v=8US87JNSyu8",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus foi exaltado à destra do Pai", 
          linkYTc: "https://www.youtube.com/watch?v=V35Chv3RZeY",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus após a exaltação", 
          linkYTc: "https://www.youtube.com/watch?v=oBjK0CeHpjc",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 3,
      name: "3 - A volta de Jesus",
      sub: [
        { name: "Porque e como estudar sobre a volta de Jesus", 
          linkYTc: "https://www.youtube.com/watch?v=EPNR4JG2L7g",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O que Jesus ensinou sobre a Sua volta", 
          linkYTc: "https://www.youtube.com/watch?v=RIIZ9UhBbjg",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "As 70 semanas de Daniel", 
          linkYTc: "https://www.youtube.com/watch?v=Uimj-Qe7dHQ",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A volta de Jesus: O ensino Apostólico - Parte 1", 
          linkYTc: "https://www.youtube.com/watch?v=H7uIPyacfF4",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A volta de Jesus: O ensino Apostólico - Parte 2", 
          linkYTc: "https://www.youtube.com/watch?v=RkwgVDp_vp4",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A volta de Jesus: O ensino Apostólico - Parte 3", 
          linkYTc: "https://www.youtube.com/watch?v=1mUc3mx-VC4",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Jesus que virá", 
          linkYTc: "https://www.youtube.com/watch?v=sSMU8wLhhZk",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Arrebatamento secreto?",
          linkYTc: "https://www.youtube.com/watch?v=ig22oxY6lfw",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
         },
        { name: "Apocalipse - Parte 1: As cartas às 7 Igrejas", 
          linkYTc: "https://www.youtube.com/watch?v=Hv0sdE4gOtU",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Apocalipse - Parte 2: O Cordeiro, os selos e as trombetas", 
          linkYTc: "https://www.youtube.com/watch?v=TpLdKx4HLsg",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Apocalipse - Parte 3: Os acontecimentos finais", 
          linkYTc: "https://www.youtube.com/watch?v=t-yVsYUlybk",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Apocalipse - Parte 4: O milênio", 
          linkYTc: "https://www.youtube.com/watch?v=M1X7pjtm8jY",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Jesus volta para os fiéis e prudentes", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 4,
      name: "4 - Jesus é a porta do Reino",
      sub: [
        { name: "Convicção de pecados", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A fé que salva - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A fé que salva - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Arrependimento - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Arrependimento - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Batismo em Cristo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Batismo com Espírito Santo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        {
          name: "A habitação do Espírito Santo e o batismo com o Espírito Santo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Recebereis poder", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 5,
      name: "5 - O Espírito Santo",
      sub: [
        { name: "O Espírito Santo é Deus", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Espírito Santo na história", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Espírito Santo e os apóstolos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Espírito Santo e a Igreja", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Espírito e a noiva dizem: Vem!", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O Espírito Santo e a Bíblia", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O caráter do Espírito Santo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Andando no Espírito", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Os dons do Espírito Santo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 6,
      name: "6 - O Deus pai",
      sub: [
        { name: "O Deus triuno", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Mostra-nos o Pai", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Quem é o Pai?", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "E o Pai o amará", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 7,
      name: "7 - O propósito eterno de Deus",
      sub: [
        { name: "Uma família para o Pai", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Uma noiva para o Filho", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Um edifício para o Espírito Santo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 8,
      name: "8 - Os primeiros passos no Caminho",
      sub: [
        { name: "Perdoar - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perdoar - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Confessar pecados", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Ser transparente", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perseverar na Palavra", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perseverar na oração", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perseverar no Jejum", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perseverar no partir do pão", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Perseverar na comunhão", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Proclamar o Evangelho", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 9,
      name: "9 - Caminhando como sacerdote",
      sub: [
        { name: "O sacerdócio de todos os santos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Os ministérios", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A Igreja na casa - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A Igreja na casa - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A Igreja na casa - Parte 3", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O que são juntas e ligamentos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos: Discipulado - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos: Discipulado - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos: Discipulado - Parte 3", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos: Companheirismo - Parte 1", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos: Companheirismo - Parte 2", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Juntas e ligamentos naturais: Família", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Discipulado e autoritarismo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O valor da sujeição", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Catequese", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Cooperadores", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Capacitando os discipuladores", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 10,
      name: "10 - No caminho da salvação",
      sub: [
        { name: "Salvação em Cristo", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A justificação pela fé", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Evidências sobre a Salvação", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Desenvolvendo a santificação", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Santificação plena: Espírito", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Amando a Deus de todo coração", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 11,
      name: "11 - Caminhando como família",
      sub: [
        { name: "Família: Projeto de Deus", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O casamento", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Os papéis dos cônjuges", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O padrão de Deus para o marido", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "O padrão de Deus para a esposa", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A comunicação no casamento", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A criação de filhos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Exercício da Paternidade", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Exercício da Paternidade na criação de filhos pequenos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Exercício da Paternidade com Jovens", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Exercício da paternidade na criação de filhos adultos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Divórcio e recasamento", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Sofismas sobre o divórcio", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Obediência e honra aos pais", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "A presença de Cristo no lar", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Compromisso para o casamento", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Casamento: paixão ou escolha?", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
        { name: "Conselhos aos noivos", 
          linkYTc: "",
          linkSPc: "",
          linkDeezerC: "",
          linkYTr: "",
          linkSPr: "",
          linkDeezerR: "",
          linkPDF:""
        },
      ],
    },
    {
      id: 12,
      name: "12 - Os dons do Espírito santo",
      sub: [],
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
    setActiveLink(null);
    setActiveNC(false);
    setActiveOS(false);
  };

  //Escolhendo Ordem Sequencial
  const handleClickOS = () => {
    clearAll();
    setActiveNC(false);
    setActiveOS(true);
  };

  //Escolhendo Novos Convetidos
  const handleClickNC = () => {
    clearAll();
    setActiveNC(true);
    setActiveOS(false);
  };

  // Clicado em um dos ciclos
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

      {/* Cliclos Ordem Cronológica */}

      <div className={`${styles.container_ciclos} ${styles.ciclosOS}`}>
        {idsOs.map((opc) => (
          <>
            <button
              key={opc.id}
              className={`${styles.ciclos} ${
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

      {/* Ciclos novos convertidos */}

      <div className={`${styles.container_ciclos} ${styles.ciclosNC}`}>
        {idsNC.map((opc) => (
          <>
            <button
              key={opc.id}
              className={`${styles.ciclos} ${
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

      {activeLink && activeOS && (
        <div>
          {idsOs.map(
            (opc) =>
              opc.id === activeLink &&
              opc.sub.map((licao) => <Lesson name={licao.name} YTCompleto={licao.linkYTc} SPCompleto={licao.linkSPc} DeezerCompleto={licao.linkDeezerC} YTResumo={licao.linkYTr} SPResumo={licao.linkSPr} DeezerResumo={licao.linkDeezerR} linkPDF={licao.linkPDF}/>)
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
