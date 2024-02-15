import React from "react";
import Image from "next/image";
import about1 from "../public/about1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import styles from "../styles/content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.contents}>
          <Image className={styles.image} src={about1} alt="abt" />

          <div className={styles.textContent}>
            <h2 className={styles.text}>See What Others Are Saying:</h2>
            <p className={styles.paragraph}>
              Read testimonials from satisfied clients
              <br />
              and partners who have experienced the
              <br />
              Sumysan difference.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.contents}>
            <div>
              <h2 className={styles.text2}>Latest Updates:</h2>
              <p className={styles.paragraph2}>
                Stay informed with the latest news and
                <br />
                insights from Sumysan. Explore our blog
                <br />
                for industry trends and company updates.
                <br />
                Join Us in Shaping the Future of Real
                <br />
                Estate.
                <br />
                <button className={styles.button}>Read Blog</button>
              </p>
            </div>

            <Image className={styles.image2} src={img2} alt="img" />
          </div>
        </div>

        <div>
          <div className={styles.cardContents}>
            <div>
              <h3 className={styles.h3}>Customer Reviews</h3>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.card1}>
                <h3 className={styles.cardText}>“</h3>
                <Image className={styles.img3} src={img3} alt="image" />
                <p className={styles.cardParagraph}>
                  〝Their commitment to
                  <br />
                  transparency and accessibility is
                  <br />
                  unmatched.
                  <br />- Jane Smith, Real Estate Agent
                </p>
              </div>

              <div className={styles.card2}>
                <h3 className={styles.cardText}>“</h3>
                <Image className={styles.img3} src={img4} alt="image" />
                <p className={styles.cardParagraph}>
                  〝Sumysan’s dedication to
                  <br />
                  harnessing technology for the
                  <br />
                  greater good sets them apart.
                  <br />- Mark Johnson, Investor
                </p>
              </div>

              <div className={styles.card3}>
                <h3 className={styles.cardText}>“</h3>
                <Image className={styles.img3} src={img5} alt="image" />
                <p className={styles.cardParagraph}>
                  〝Sumysan’s technology has
                  <br />
                  streamlined our transactions and
                  <br />
                  increased our efficiency tenfold.
                  <br />- John Doe, CEO of XYZ Realty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
