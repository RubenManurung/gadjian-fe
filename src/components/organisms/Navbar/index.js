import React from "react";
import Logo from "../../../public/assets/gadjian_logo_tosca.png";
import styles from "./[navbar].module.css";
import RoundedImage from "../../atom/RoundedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftnav}>
        <FontAwesomeIcon icon={faBars} className={styles.barsIcon} />
        <img src={Logo} alt="logo" width={75} height={50} />
      </div>
      <div className={styles.rightnav}>
        <p className={styles.username}>Hallo, GADJIAN USER</p>
        <RoundedImage img={Logo} alt="profile" width={30} height={30} />
      </div>
    </nav>
  );
};

export default Index;
