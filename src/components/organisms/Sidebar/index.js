import React, { useState } from "react";
import styles from "./[sidebar].module.css";
import { MENU_LIST } from "./constant";
import Logo from "../../../public/assets/gadjian_logo_tosca.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  const [menuSelect, setMenuSelect] = useState("Beranda");

  return (
    <>
      <nav className={`${styles.sidebar} ${styles.sidebarSwing}`}>
        <img src={Logo} alt="logo" className={styles.imgLogo} />
        {MENU_LIST.map((value, idx) => {
          return (
            <section key={idx} className={styles.sectionNavitem}>
              <FontAwesomeIcon
                icon={value.icon}
                className={
                  menuSelect === value.label
                    ? styles.iconActive
                    : styles.iconNormal
                }
              />
              <a
                href={value.route}
                onClick={() => setMenuSelect(value.label)}
                className={menuSelect === value.label ? styles.active : ""}
              >
                {value.label}
              </a>
            </section>
          );
        })}
      </nav>
    </>
  );
};

export default Index;
