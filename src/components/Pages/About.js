import React from "react";
import styles from "./About.module.css";
import backgroundImg from "../../react-img.jpeg";

const About = () => {
  return (
    <div
      className={styles.about}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2>O NAMA</h2>
      <div>
        <p className={styles.opisAp}>
          Aplikacija telefonski imenik uradjena je koristenjem React biblioteke.
          <br></br>
          Svrha aplikacije je skladistenje odredjenih podataka o korisniku: ime,
          prezime, email i broj telefona. Takodje je moguce brisati korisnike i
          uredjivati vec postojece korisnike.
        </p>
      </div>
    </div>
  );
};

export default About;
