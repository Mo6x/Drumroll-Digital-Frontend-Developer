import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import Delete from "../../../assets/delete.svg";
import Profile from "../../../assets/profiles.svg";
import Styles from "./Navbar.module.css";


export const Navbar: React.FC = () => {
  return (
    <div className={Styles.NavbarContainer}>
      <div className={Styles.NavabrContainerItem}>
        <div className={Styles.NavbarImages}>
          <img src={Logo} alt="company Icon" />
        </div>

        <nav className={Styles.NavbarLinks}>
          <ul>
            <li><Link to="/HomeDashboards">Home</Link></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className={Styles.NavbarActions}>
          <h2>NGN</h2>
          <img src={Delete} alt="delete icon" />
          <img src={Profile} alt="profile icon" />
        </div>
      </div>
    </div>
  );
};
