import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navHolder}>
      <navbar className={styles.navbar}>
        <div className={styles.logo}>
          <div>Logo</div>
          <h3>Dashboard</h3>
        </div>
        <ul className={styles.links}>
          <li>
            <NavLink to="/">Pocetna</NavLink>
          </li>
          <li>
            <NavLink to="/o-nama">O nama</NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <button className={styles.button}>Kontakt</button>
            </NavLink>
          </li>
        </ul>
      </navbar>
    </div>
  );
};

export default Navbar;
