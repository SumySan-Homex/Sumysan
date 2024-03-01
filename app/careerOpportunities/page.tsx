import React from "react";
import Image from "next/image";
import co1 from "../../public/co1.png";
import co2 from "../../public/co2.png";
import styles from "../../styles/page.module.css";

const Agents = () => {
  return (
    <div className={styles.flexboxContainer}>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
      <p className={styles.cell}>&rarr; Agent</p>
    </div>
  );
};

const CareerOpportunities = () => {
  return (
    <div className={styles.coContainer}>
      <div className={styles.coTitleDesc}>
        <div className={styles.coContents}>
          <h3 className={styles.coDesc}>
            Here are Career Opportunities
            <br />
            in Sumysan
          </h3>
          <p className={styles.coText}>
            Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
            <br />
            polygon crypto PancakeSwap uniswap binance cardano
            <br />
            maker hive avalanche. Horizen chiliz ren neo USD quant
            <br />
            waves quant ICON.
          </p>
        </div>
        <Image src={co1} alt="image" />
      </div>

      <div className={styles.coJobOpening}>
        <h3>Job openings that are available.</h3>
        <Agents />
        <div></div>
      </div>

      <div className={styles.coBenefits}>
        <h3 className={styles.coBenefitsText}>
          Companies Benefits and Cultures
        </h3>
        <div className={styles.coBenefitItems}>
          <p className={styles.coBenefitParagraph}>
            ✦ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crypto ipsum
            bitcoin ethereum dogecoin litecoin. Uniswap nexo
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ankr
            amp ox holo.
          </p>
          <p className={styles.coBenefitParagraph}>
            ✦ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crypto ipsum
            bitcoin ethereum dogecoin litecoin. Uniswap nexo
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ankr
            amp ox holo.
          </p>
          <p className={styles.coBenefitParagraph}>
            ✦ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crypto ipsum
            bitcoin ethereum dogecoin litecoin. Uniswap nexo
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ankr
            amp ox holo.
          </p>
          <p className={styles.coBenefitParagraph}>
            ✦ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crypto ipsum
            bitcoin ethereum dogecoin litecoin. Uniswap nexo
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ankr
            amp ox holo.
          </p>
        </div>
      </div>

      <div className={styles.coApply}>
        <h3 className={styles.coApplyHeader}>How to Apply</h3>
        <p className={styles.coApplyParagraph}>
          Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
          <br />
          polygon crypto PancakeSwap uniswap binance cardano maker hive
          avalanche. Horizen chiliz ren neo
          <br />
          USD quant waves quant ICON.
        </p>
      </div>

      <div className={styles.coImageContent}>
        <Image src={co2} width={280} height={195} alt="image" />

        <div className={styles.coImageParagraph}>
          <p className={styles.coParagraph1}>
            Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer polygon
            crypto
            <br />
            PancakeSwap uniswap binance cardano maker hive avalanche. Horizen
            <br />
            chiliz ren neo USD quant waves quant ICON.
          </p>
          <p className={styles.coParagraph2}>
            Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer polygon
            crypto
            <br />
            PancakeSwap uniswap binance cardano maker hive avalanche. Horizen
            <br />
            chiliz ren neo USD quant waves quant ICON.
          </p>
        </div>
      </div>

      <div className={styles.coButtonContainer}>
        <button className={styles.coButton}>Upload Resume and Portfolio</button>
      </div>
    </div>
  );
};

export default CareerOpportunities;
