import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navHolder}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div>
            <i className="far fa-address-book"></i>
          </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
