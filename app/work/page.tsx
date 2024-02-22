import React from "react";
import Image from "next/image";
import Link from "next/link";
import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";
import styles from "../../styles/page.module.css";

const Work = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContent1}>
        <Image src={work1} alt="image" width={220} height={150} />

        <div className={styles.homexInnerContent}>
          <h3 className={styles.homexTextContent}>Work for me</h3>
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
        <Image className={styles.homexRoomImage} src={work2} alt="image" />
      </div>

      <div className={styles.homexContent3}>
        <Image src={work3} alt="image" />

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

export default Work;
