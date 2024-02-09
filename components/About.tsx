import React from "react";
import Image from "next/image";
import re1 from "../public/re1.png";
import re2 from "../public/re2.png";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContents}>
            <h1 className={styles.header}>Revolutionizing</h1>
            <h2 className={styles.header}>Real Estate</h2>

            <p className={styles.desc}>
              Sumysan is reshaping real estate through advanced technology. Our
              mission is
              <br />
              clear: to make real estate transactions efficient, secure, and
              accessible to all
            </p>

            <button type="button" className={styles.button}>
              Read More
            </button>

            <div className={styles.miniCard}>
              <div className={styles.miniContent}>
                <h2 className={styles.header2}>Our Vision:</h2>

                <p className={styles.desc2}>
                  Welcome the future of real estate. At Sumysan, we
                  <br />
                  envision a world where property transactions are seamless
                  <br />
                  and transparent
                </p>

                <button type="button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <Image src={re1} alt="estate" />
          <Image src={re2} alt="house" />
        </div>
      </div>
    </div>
  );
};

export default About;
