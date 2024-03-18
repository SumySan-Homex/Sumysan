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
              <h4 className={styles.wpCardHeader1}>1. Complex Transactions:</h4>
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

        <div className={styles.wpCard2}>
          <div className={styles.wpCardContents2}>
            <Image src={wp1} alt="wp1" />
            <div>
              <h4 className={styles.wpCardHeader2}>
                2.  Lack of Transparency:
              </h4>
              <p className={styles.wpCardParagraph2}>
                The lack of transparency in property records and
                <br /> ownership can result in disputes, fraud, and
                <br /> uncertainty. It hampers the ability to make
                <br /> informed decisions about real estate investments.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wpCard3}>
          <div className={styles.wpCardContents3}>
            <div>
              <h4 className={styles.wpCardHeader3}>3. High Entry Barriers:</h4>
              <p className={styles.wpCardParagraph3}>
                Real estate investment traditionally required
                <br /> significant capital, making it inaccessible to
                <br /> many. This has limited the ability of
                <br /> individuals to diversify their investments and
                <br /> build wealth through property.
              </p>
            </div>
            <Image src={wp1} alt="wp1" />
          </div>
        </div>

        <div className={styles.wpCard4}>
          <div className={styles.wpCardContents4}>
            <Image src={wp1} alt="wp1" />
            <div>
              <h4 className={styles.wpCardHeader4}>4.  Data Silos:</h4>
              <p className={styles.wpCardParagraph4}>
                Valuable data related to real estate, such as
                <br /> market trends and property histories, is often
                <br /> siloed and inaccessible. This makes it difficult for
                <br /> stakeholders to make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wpCard5}>
          <div className={styles.wpCardContents5}>
            <div>
              <h4 className={styles.wpCardHeader5}>5. Privacy and Security:</h4>
              <p className={styles.wpCardParagraph5}>
                Privacy breaches and security vulnerabilities in
                <br /> property transactions pose risks to both buyers
                <br /> and sellers. There is a pressing need for secure
                <br /> and transparent methods of conducting real
                <br /> estate transactions.
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
