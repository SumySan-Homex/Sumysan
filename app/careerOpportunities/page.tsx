import React from "react";
import Image from "next/image";
import co1 from "../../public/co1.png";
import styles from "../../styles/page.module.css";

const CareerOpportunities = () => {
  return (
    <div className={styles.coContainer}>
      <div>
        <div>
          <h3>Here are Career Opportunities in Sumysan</h3>
          <p>
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
    </div>
  );
};

export default CareerOpportunities;
