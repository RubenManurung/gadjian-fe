import React from "react";

import styles from "./[input].module.css";

const Inde = (props) => {
  const { type, placeholder, name, value, ...nativeProps } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      {...nativeProps}
      className={styles.inputAtom}
    />
  );
};

export default Inde;
