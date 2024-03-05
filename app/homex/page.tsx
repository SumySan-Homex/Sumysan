import React from "react";
import Image from "next/image";
import Link from "next/link";
import homex1 from "../../public/homex1.png";
import homex2 from "../../public/homex2.png";
import homex3 from "../../public/homex3.png";
import styles from "../../styles/page.module.css";

const Homex = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContents}>
        <h1 className={styles.homexHeader}>
          Finding Your Dream Home With People You Trust
        </h1>
        <Image
          className={styles.homexLogo}
          src={homex1}
          alt="homexImage"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Homex;
