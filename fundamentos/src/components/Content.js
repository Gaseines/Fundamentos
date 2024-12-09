import React, {  useState } from "react";

//styles
import styles from "./Content.module.css";

//Imagens
import fechar from '../image/fechar.png'

//Components
import Lesson from "./Lesson";

//db Ordem cronológica
import idsOs from "../db/Idos";

//db Novos convertidos
import idsNc from "../db/Idnc"

const Content = ({setActive}) => {
  const [activeOS, setActiveOS] = useState(false);
  const [activeNC, setActiveNC] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  

  //Opcões Novos contratados
  

  const clearAll = () => {
    setActiveLink(null);
    setActiveNC(false);
    setActiveOS(false);
  };

  //Escolhendo Ordem Sequencial
  const handleClickOS = () => {
    clearAll();
    setActiveNC(false);
    setActiveOS(!activeOS);
  };

  //Escolhendo Novos Convetidos
  const handleClickNC = () => {
    clearAll();
    setActiveNC(!activeNC);
    setActiveOS(false);
  };

  // Clicado em um dos ciclos
  const handleClickLink = (id) => {
    setActiveLink(id);
    setActive(true)

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
        {idsNc.map((opc) => (
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

        {/* Links Ordem Sequencial */}
      {activeLink && activeOS && (
        <div className={styles.background_licoes}>
          <img src={fechar} alt="Fechar" className={styles.fechar} onClick={() => {setActiveLink(""); setActive(false)}}/>
          <div className={styles.container_licoes}>
            {idsOs.map(
              (opc) =>
                opc.id === activeLink &&
                opc.sub.map((licao) => <Lesson name={licao.name} YTCompleto={licao.linkYTc} SPCompleto={licao.linkSPc} DeezerCompleto={licao.linkDeezerC} YTResumo={licao.linkYTr} SPResumo={licao.linkSPr} DeezerResumo={licao.linkDeezerR} linkPDF={licao.linkPDF}/>)
            )}
          </div>
        </div>
      )}

      {/* Links Novos Convertidos */}
      {activeLink && activeNC && (
        <div className={styles.background_licoes}>
          <img src={fechar} alt="Fechar" className={styles.fechar} onClick={() => {setActiveLink(""); setActive(false)}}/>
          <div className={styles.container_licoes}>
            {idsNc.map(
              (opc) =>
                opc.id === activeLink &&
                opc.sub.map((licao) => <Lesson name={licao.name} YTCompleto={licao.linkYTc} SPCompleto={licao.linkSPc} DeezerCompleto={licao.linkDeezerC} YTResumo={licao.linkYTr} SPResumo={licao.linkSPr} DeezerResumo={licao.linkDeezerR} linkPDF={licao.linkPDF}/>)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
