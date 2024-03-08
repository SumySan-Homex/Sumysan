"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import homex1 from "../../public/homex1.png";
import homex2 from "../../public/homex2.png";
import homex3 from "../../public/homex3.png";
import homex4 from "../../public/homex4.png";
import homex5 from "../../public/homex5.png";
import homex6 from "../../public/homex6.png";
import homex7 from "../../public/homex7.png";
import homex8 from "../../public/homex8.png";
import homex9 from "../../public/homex9.png";
import styles from "../../styles/page.module.css";

const images = [
  { src: "/homex1", alt: "Image 1" },
  { src: "/homex2", alt: "Image 2" },
  { src: "/homex3", alt: "Image 3" },
  { src: "/homex4", alt: "Image 4" },
  { src: "/homex5", alt: "Image 5" },
  { src: "/homex6", alt: "Image 6" },
  { src: "/homex7", alt: "Image 7" },
];

const Homex = () => {
  return (
    <div className={styles.homexContainer}>
      <div className={styles.homexContents}>
        <div className={styles.homexTextImageBox}>
          <h1 className={styles.homexHeader}>
            Finding Your Dream Home With People You Trust
          </h1>
          <Image
            className={styles.homexLogo}
            src={homex1}
            alt="homexImage"
            width={400}
            height={300}
          />
        </div>

        <div className={styles.homexCardContainer}>
          <div className={styles.homexCard1}>
            <div className={styles.homexImages}>
              <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false} // Hide status indicators
                infiniteLoop={true} // Enable infinite loop
                autoPlay={true} // Enable auto play
                interval={3000} // Set auto play interval (milliseconds)
                stopOnHover={false} // Stop auto play on hover
                transitionTime={500} // Set transition time (milliseconds)
                axis="horizontal"
              >
                <Image src={homex1} alt="image" className={styles.images} />
                <Image src={homex2} alt="image" className={styles.images} />
                <Image src={homex3} alt="image" className={styles.images} />
                <Image src={homex4} alt="image" className={styles.images} />
                <Image src={homex5} alt="image" className={styles.images} />
                <Image src={homex6} alt="image" className={styles.images} />
                <Image src={homex7} alt="image" className={styles.images} />
              </Carousel>
            </div>

            <h5 className={styles.homexCardText}>User-friendly Interface:</h5>
            <p className={styles.homexCardParagraph}>
              Navigate with ease through our sleek and intuitive interface,
              <br />
              where every tap brings you closer to your dream property.
            </p>
          </div>
        </div>

        <div className={styles.homexCard2}>
          <div className={styles.card2TextContents}>
            <h5 className={styles.homexCardText1}>Virtual Property Tours:</h5>
            <p className={styles.homexCardParagraph1}>
              Step into your potential new home from <br />
              anywhere with immersive virtual tours that bring <br />
              properties to life before your eyes.
            </p>

            <button type="button" className={styles.homexButton}>
              Learn More
            </button>
          </div>

          <Image src={homex8} alt="image" />
        </div>

        <div className={styles.homexCard3}>
          <Image src={homex9} alt="image" />
          <div className={styles.card3TextContents}>
            <h5 className={styles.homexCardText2}>Advanced Search:</h5>
            <p className={styles.homexCardParagraph2}>
              Fine-tune your search with precision using our <br />
              advanced search filters, ensuring you find the <br />
              perfect match for your lifestyle and preferences.
            </p>
            <button type="button" className={styles.homexButton1}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homex;
