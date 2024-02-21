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

      <div className={styles.homexContent2}>
        <p className={styles.homexParagraphText2}>
          Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
          <br />
          polygon crypto PancakeSwap uniswap binance cardano
          <br />
          maker hive avalanche. Horizen chiliz ren neo USD quant
          <br />
          waves quant ICON.
        </p>
        <Image className={styles.homexRoomImage} src={homex2} alt="image" />
      </div>

      <div className={styles.homexContent3}>
        <Image src={homex3} alt="image" />

        <p className={styles.homexParagraphText3}>
          Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
          <br />
          polygon crypto PancakeSwap uniswap binance cardano
          <br />
          maker hive avalanche. Horizen chiliz ren neo USD quant
          <br />
          waves quant ICON.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.buttonLink}>
          <Link href="">visit site</Link>
        </button>
      </div>
    </div>
  );
};

export default Homex;
