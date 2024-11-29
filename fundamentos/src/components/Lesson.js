import React, { useState } from "react";

//Styles
import styles from "./Lesson.module.css";

//images
import yt from "../image/youtube_links.png";
import sp from "../image/spotify_links.png";
import deezer from "../image/deezer_links.png";
import pdf from "../image/pdf_links.png";
import down from "../image/down.png";
import downBlack from "../image/downBlack.png";

const Lesson = ({
  name,
  linkPDF,
  YTCompleto,
  DeezerCompleto,
  SPCompleto,
  YTResumo,
  DeezerResumo,
  SPResumo,
}) => {
  const [activeVersoes, setActiveVersoes] = useState(false);
  const [activeVC, setActiveVC] = useState(false);
  const [activeVR, setActiveVR] = useState(false);
  const [activeVE, setActiveVE] = useState(false);

  //Clica para abrir as Versoes
  const handleClickVersoes = () => {
    setActiveVersoes(!activeVersoes);
  };

  //Clica para abrir os links
  const handleClickLinks = (data) => {
    if (data === "VC") {
      setActiveVC(!activeVC);
    }
    if (data === "VR") {
      setActiveVR(!activeVR);
    }
    if (data === "VE") {
      setActiveVE(!activeVE);
    }
  };
  return (
    <div className={styles.container_licoes}>

        {/* Título Principal */}
      <h1 onClick={handleClickVersoes}>
        {name}
        <img src={down} alt="Abrir" className={styles.down} />
      </h1>

      <div
        className={`${styles.container_versoes} ${
          activeVersoes ? styles.activeVersoes : ""
        }`}
      >

        {/* Título Versão Completa */}
        <h2 onClick={() => handleClickLinks("VC")}>
          Versão Completa
          <img src={downBlack} alt="Abrir" className={styles.downBlack} />
        </h2>

        {/* Links Versão Completa */}
        <div
          className={`${styles.container_links} ${
            activeVC ? styles.activeLinks : ""
          }`}
        >
          <ul>
            <li>
              <img src={yt} alt="Youtube" /> <a href={YTCompleto}>Youtube</a>
            </li>
            <li>
              <img src={sp} alt="Spotify" /> <a href={SPCompleto}>Spotify</a>
            </li>
            <li>
              <img src={deezer} alt="Deezer" />{" "}
              <a href={DeezerCompleto}>Deezer</a>
            </li>
          </ul>
        </div>

        {/* Título Versão Resumida */}
        <h2 onClick={() => handleClickLinks("VR")}>
          Versão Resumida
          <img src={downBlack} alt="Abrir" className={styles.downBlack} />
        </h2>

        {/* Links Versão Resumida */}
        <div
          className={`${styles.container_links} ${
            activeVR ? styles.activeLinks : ""
          }`}
        >
          <ul>
            <li>
              <img src={yt} alt="Youtube" /> <a href={YTResumo}>Youtube</a>
            </li>
            <li>
              <img src={sp} alt="Spotify" /> <a href={SPResumo}>Spotify</a>
            </li>
            <li>
              <img src={deezer} alt="Deezer" />{" "}
              <a href={DeezerResumo}>Deezer</a>
            </li>
          </ul>
        </div>

        {/* Título PDF */}
        <h2 onClick={() => handleClickLinks("VE")}>
          Verão Escrita (PDF)
          <img src={downBlack} alt="Abrir" className={styles.downBlack} />
        </h2>

        {/* Link PDF */}
        <div
          className={`${styles.container_links} ${
            activeVE ? styles.activePDF : ""
          }`}
        >
          <ul>
            <li>
              <img src={pdf} alt="PDF" /> <a href={linkPDF}>PDF</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
