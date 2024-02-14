import React from "react";
import Image from "next/image";
import about1 from "../public/about1.png";
import img2 from "../public/img2.png";
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
              <p className={styles.paragraph}>
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

            <Image src={img2} alt="img" />
          </div>
        </div>

        <div>
          <div className={styles.card}>
            <h3>“</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
