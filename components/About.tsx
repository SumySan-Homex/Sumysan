import React from "react";
import Image from "next/image";
import home1 from "../public/home1.png";
import home2 from "../public/home2.png";
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
                <h2 className={styles.header2}>Our Objectives:</h2>

                <p className={styles.desc2}>
                  At Sumysan, we are on a mission to revolutionize the real
                  estate industry by
                  <br />
                  harnessing cutting-edge technologies like AI, blockchain, and
                  quantum
                  <br />
                  computing. Our vision is a future where real estate
                  transactions are efficient,
                  <br />
                  secure, transparent, and accessible to all. Join us as we
                  redefine the
                  <br />
                  possibilities of real estate.
                </p>

                <button className={styles.button2} type="button">
                  Read More
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
                  Explore services
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
          <Image src={home1} alt="estate" />
          <Image className={styles.images} src={home2} alt="house" />
        </div>
      </div>
    </div>
  );
};

export default About;
