import React from "react";
import Image from "next/image";
import Link from "next/link";
import est1 from "../../public/est1.png";
import est2 from "../../public/est2.png";
import est3 from "../../public/est3.png";
import styles from "../../styles/page.module.css";

const EstateTycoons = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContent1}>
        <Image src={est1} alt="image" width={220} height={150} />

        <div className={styles.homexInnerContent}>
          <h3 className={styles.homexTextContent}>Estate Tycoons</h3>
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
        <Image className={styles.homexRoomImage} src={est2} alt="image" />
      </div>

      <div className={styles.homexContent3}>
        <Image src={est3} alt="image" />

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
          <Link href="">set a reminder</Link>
        </button>
      </div>
    </div>
  );
};

export default EstateTycoons;
