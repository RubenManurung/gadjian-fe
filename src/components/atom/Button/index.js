import React from "react";
import styles from "./[button].module.css";

const Index = (props) => {
  const { children, ...nativeProps } = props;
  return (
    <button className={styles.primaryButton} {...nativeProps}>
      {children}
    </button>
  );
};

export default Index;
