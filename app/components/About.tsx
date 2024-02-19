import React from "react";
import Image from "next/image";
import re1 from "../../public/re1.png";
import re2 from "../../public/re2.png";
import styles from "../../styles/about.module.css";

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
                  Welcome to the future of real estate. At Sumysan, we
                  <br />
                  envision a world where property transactions are seamless
                  <br />
                  and transparent
                </p>

                <button className={styles.button2} type="button">
                  Learn More
                </button>
              </div>
            </div>

            <div className={styles.miniCard2}>
              <div className={styles.miniContent}>
                <h2 className={styles.header2}>Explore our services:</h2>

                <p className={styles.desc2}>
                  Discover how Sumysan is transforming real estate with
                  <br />
                  innovative solutions powered by AI, blockchain, and more.
                </p>

                <button className={styles.button2} type="button">
                  Learn More
                </button>
              </div>
            </div>

            <div className={styles.miniCard3}>
              <div className={styles.miniContent}>
                <h2 className={styles.header2}>Unlock the potential:</h2>

                <p className={styles.desc2}>
                  Join us in unlocking the full potential of real estate.
                  Explore
                  <br />
                  our offerings and revolutionize the way you think about
                  <br />
                  property.
                </p>

                <button className={styles.button2} type="button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image src={re1} alt="estate" />
          <Image className={styles.images} src={re2} alt="house" />
        </div>
      </div>
    </div>
  );
};

export default About;
