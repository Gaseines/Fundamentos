import React, { useState } from "react";

//styles
import styles from "./Content.module.css";

//Components

const Content = () => {
  
  const [activeOS, setActiveOS] = useState(false);
  const [activeNC, setActiveNC] = useState(false);
  

  const handleClickOS = () => {
    setActiveNC(false)
    setActiveOS(true);
    
  };

  const handleClickNC = () => {
    setActiveNC(true)
    setActiveOS(false);
  }

  

  return (
    <div className={styles.container_content}>
      <button className={`${styles.btn1} ${activeOS ? styles.on1 : ''} ${activeNC ? styles.off1 : ''}`} onClick={handleClickOS}>Ordem Sequencial</button> 

      <button className={`${styles.btn2} ${activeNC ? styles.on2 : ''} ${activeOS ? styles.off2 : ''}`} onClick={handleClickNC} >Novos Convetidos</button> 
    </div>
  );
};

export default Content;
