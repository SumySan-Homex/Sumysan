import React from "react";
import Image from "next/image";
import wp1 from "../../public/wp1.png";
import styles from "../../styles/page.module.css";

const Whitepaper = () => {
  return (
    <div className={styles.wpContainer}>
      <div className={styles.wpTextContainer}>
        <h3 className={styles.wpText}>Introduction</h3>
        <p className={styles.wpParagraph}>
          The real estate industry, as one of the cornerstones of the global
          economy, plays a<br /> pivotal role in shaping societies, economies,
          and individual lives. The very concept of <br /> &quot;home&quot; is
          intertwined with the real estate landscape, making it not just a
          business
          <br /> sector but a fundamental part of our daily existence.
          <br /> Yet, this vital industry faces significant challenges and
          complexities that have persisted
          <br /> for generations. These challenges span a wide spectrum, from
          inefficiencies in property,
          <br /> transactions and management to issues of transparency,
          security, and accessibility.
          <br />
          Inefficiencies in the real estate sector not only hinder its growth
          but also have a<br /> profound impact on the lives of individuals and
          communities.
        </p>
      </div>

      <div className={styles.wpCardContents}>
        <h5 className={styles.wpHeader}>
          The Challenges of the Real Estate Industry
        </h5>

        <div className={styles.wpCard1}>
          <div className={styles.wpCardContents1}>
            <div>
              <h4 className={styles.wpCardHeader1}>1. Complex Transactions</h4>
              <p className={styles.wpCardParagraph1}>
                Real estate transactions have long been known
                <br /> for their complexity, often involving numerous
                <br /> intermediaries, cumbersome paperwork, and
                <br />
                prolonged timelines. This complexity can deter
                <br /> potential buyers and sellers and lead to
                <br /> frustration.
              </p>
            </div>
            <Image src={wp1} alt="wp1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
