import React from "react";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import styles from "./[Search].module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
  const { type, placeholder, name, value, children, ...nativeProps } = props;

  return (
    <section className={styles.containerSearch}>
      <div className={styles.subContainer}>
        {children}
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          {...nativeProps}
        />
      </div>
      <div className={styles.subContainerRight}>
        <Button>
          ADD PERSONNEL <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </section>
  );
};

export default Index;
