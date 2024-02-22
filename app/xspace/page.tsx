import React from "react";
import Image from "next/image";
import Link from "next/link";
import xpsace1 from "../../public/xspace1.png";
import xpsace2 from "../../public/xspace2.png";
import xpsace3 from "../../public/xspace3.png";
import styles from "../../styles/page.module.css";

const Xspace = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContent1}>
        <Image src={xpsace1} alt="image" width={220} height={150} />

        <div className={styles.homexInnerContent}>
          <h3 className={styles.homexTextContent}>Xspace</h3>
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
        <Image className={styles.homexRoomImage} src={xpsace2} alt="image" />
      </div>

      <div className={styles.homexContent3}>
        <Image src={xpsace3} alt="image" />

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

export default Xspace;
