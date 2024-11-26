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
      <a href="/">
        <img
          src={youtube}
          alt="youtube"
          className={`${styles.icones} ${styles.youtube}`}
        />
      </a>
      <a href="/">
        <img
          src={deezer}
          alt="deezer"
          className={`${styles.icones} ${styles.deezer}`}
        />
      </a>
      <a href="/">
        <img
          src={spotify}
          alt="spotify"
          className={`${styles.icones} ${styles.spotify}`}
        />
      </a>
      <a href="/">
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
