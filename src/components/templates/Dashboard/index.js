import React from "react";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/Navbar";
import styles from "./[dashboard].module.css";
import Search from "../../molecules/Search";
import Card from "../../molecules/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
  const { personnels, idxStart, setIdxStart, idxEnd, setIdxEnd } = props;
  return (
    <div className={styles.containerDashboard}>
      <Navbar />
      <Sidebar />

      <section className={styles.content}>
        <div className={styles.personalList}>
          <div>
            <h2 className={styles.personalListTitle}>PERSONNEL LIST</h2>
            <p className={styles.personalListDesc}>List of all personnels</p>
          </div>

          <Search
            name="searchPersonnels"
            type="text"
            placeholder="Find Personnels"
            onChange={(e) => console.log(e.target.value)}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "var(--colorPrimary)" }}
            />
          </Search>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.cardPersonnels}>
          {personnels?.data?.results
            ?.slice(idxStart, idxEnd)
            .map((value, idx) => {
              return <Card key={idx} personnelsData={value} />;
            })}
        </div>
        <div className={`${styles.arrowContainer} `}>
          <button
            className={`${styles.arrow}`}
            disabled={idxStart <= 0}
            onClick={() => {
              if (idxStart > 0 && idxEnd > 4) {
                setIdxStart(idxStart - 1);
                setIdxEnd(idxEnd - 1);
              } else {
                setIdxStart(1);
                setIdxEnd(4);
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} /> Previous Page
          </button>
          <button
            className={`${styles.arrow}`}
            disabled={idxEnd === 28}
            onClick={() => {
              setIdxStart(idxStart + 1);
              setIdxEnd(idxEnd + 1);
            }}
          >
            Next Page
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
