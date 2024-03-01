import React from "react";
import styles from "../../styles/page.module.css";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogContents}>
        <h3 className={styles.blogHeader}>Blog</h3>
        <p className={styles.blogParagraph}>
          Crypto ipsum bitcoin ethereum dogecoin litecoin. Livepeer
          <br />
          polygon crypto PancakeSwap uniswap binance cardano maker hive
          avalanche. Horizen chiliz ren neo
          <br />
          USD quant waves quant ICON.
        </p>
        <h3 className={styles.blogHeader1}>Top Categories</h3>
      </div>
    </div>
  );
};

export default Blog;
