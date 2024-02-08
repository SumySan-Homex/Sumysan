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
          <h2>Card Title</h2>
          <p>Card Content</p>
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
