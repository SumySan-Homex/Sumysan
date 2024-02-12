import React from "react";
import Image from "next/image";
import about1 from "../public/about1.png";
import styles from "../styles/content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Image className={styles.image} src={about1} alt="abt" />

        <div className={styles.textContent}>
          <h2 className={styles.text}>See What Others Are Saying:</h2>
          <p className={styles.paragraph}>
            Read testimonials from satisfied clients
            <br />
            and partners who have experienced the
            <br />
            Sumysan difference
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
