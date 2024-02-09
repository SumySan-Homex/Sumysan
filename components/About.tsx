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
            <h2 className={styles.header}>Revolutionizing</h2>
            <h2 className={styles.header}>Real Estate</h2>

            <p>
              Sumysan is reshaping real estate through advanced technology. Our
              mission is
              <br />
              clear: to make real estate transactions efficient, secure, and
              accessible to all
            </p>

            <button type="button">Read More</button>
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
