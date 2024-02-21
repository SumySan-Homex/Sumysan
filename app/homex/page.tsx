import React from "react";
import Image from "next/image";
import homex1 from "../../public/homex1.png";
import styles from "../../styles/page.module.css";

const Homex = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContent1}>
        <Image src={homex1} alt="image" width={220} height={150} />

        <div className={styles.homexInnerContent}>
          <h3 className={styles.homexTextContent}>Homex</h3>
          <p className={styles.homexParagraphText}>
            Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
            <br />
            polygon crypto PancakeSwap uniswap binance cardano
            <br />
            maker hive avalanche. Horizen chiliz ren neo USD quant
            <br />
            waves quant ICON.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homex;
