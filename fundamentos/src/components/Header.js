import React from "react";
//Styles
import styles from "./Header.module.css";

//Imagens
import arvore from "../image/arvore.png";
import youtube from "../image/youtube.png";
import deezer from "../image/deezer.png";
import spotify from "../image/spotify.png";
import ytMusic from "../image/yt_music.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container_imgs}>
        {/* Logo */}
        <img src={arvore} alt="Fundamentos" className={styles.logo} />

        {/* Icones */}
        <a href="https://www.youtube.com/@FundamentosMe" target="_blank" rel="noopener noreferrer">
          <img
            src={youtube}
            alt="youtube"
            className={`${styles.icones} ${styles.youtube}`}
          />
        </a>
        <a href="https://www.deezer.com/br/show/2923862?deferredFl=1" target="_blank" rel="noopener noreferrer">
          <img
            src={deezer}
            alt="deezer"
            className={`${styles.icones} ${styles.deezer}`}
          />
        </a>
        <a href="https://open.spotify.com/show/63ldaJCgHeedjUJpn9k1cT" target="_blank" rel="noopener noreferrer">
          <img
            src={spotify}
            alt="spotify"
            className={`${styles.icones} ${styles.spotify}`}
          />
        </a>
        <a href="https://music.youtube.com/playlist?list=PLZ6NqiPhv1QPHUsxjZ0aPhtYQ1XWeGAcK" target="_blank" rel="noopener noreferrer">
          <img
            src={ytMusic}
            alt="ytMusic"
            className={`${styles.icones} ${styles.ytMusic}`}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
