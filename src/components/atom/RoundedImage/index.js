import React from "react";
import styles from "./[roundedImage].module.css";

const Index = (props) => {
  const { alt, img, width, height } = props;
  return (
    <img
      src={img}
      alt={alt}
      width={width}
      height={height}
      className={styles.roundedImage}
    />
  );
};

export default Index;
