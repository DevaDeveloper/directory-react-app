import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <i class="fas fa-bars"></i>
        <h3>Kontakti</h3>
      </div>
      <button className={styles.headerBtn} onClick={() => props.startAdd()}>
        Dodaj Novi
      </button>
    </div>
  );
};

export default Header;
