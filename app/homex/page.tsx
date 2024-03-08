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
import homex10 from "../../public/homex10.png";
import homex11 from "../../public/homex11.png";
import homex12 from "../../public/homex12.png";
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

        <div className={styles.homexCard4}>
          <h5 className={styles.homexCardText3}>Your Perfect Home Awaits</h5>
          <Image src={homex10} alt="image" />
          <p className={styles.homexCardParagraph3}>
            Dive deep into our extensive database with an advanced search like
            no <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other,
            guiding you to your ideal living space effortlessly.
          </p>
        </div>

        <div className={styles.homexCard5}>
          <h5 className={styles.homexCardText4}>Instant Connectivity:</h5>
          <p className={styles.homexCardParagraph4}>
            Connect directly with property owners or managers in real-time,
            <br />
            &nbsp;&nbsp;&nbsp;making communication swift and seamless throughout
            your <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property
            search journey.
          </p>
        </div>

        <div className={styles.homexCard6}>
          <Image src={homex11} alt="image" height={400} />
          <div className={styles.card5TextContents}>
            <h5 className={styles.homexCardText5}>Unveil Your Future Home</h5>
            <p className={styles.homexCardParagraph5}>
              Immerse yourself in the comfort of your couch <br /> and explore
              properties like never before with our <br /> captivating virtual
              tours.
            </p>
          </div>
        </div>

        <div className={styles.homexCard7}>
          <Image src={homex12} alt="image" />
          <div className={styles.card6TextContents}>
            <h5 className={styles.homexCardText6}>
              Your Dream Property, Just a Click Away
            </h5>
            <p className={styles.homexCardParagraph6}>
              Experience the power of instant connectivity as <br /> you connect
              with property owners at the touch of <br /> a button, making your
              dream property closer than <br /> ever before.
            </p>
            <button type="button" className={styles.homexButton1}>
              Learn More
            </button>
          </div>
        </div>

        <div className={styles.homexCard8}>
          <div className={styles.card7TextContents}>
            <h5 className={styles.homexCardText7}>Ratings and Reviews:</h5>
            <p className={styles.homexCardParagraph7}>
              Make informed decisions with confidence using <br /> our
              transparent ratings and reviews system, <br /> giving you insights
              into properties and owners <br /> like never before.
            </p>

            <button type="button" className={styles.homexButton}>
              Learn More
            </button>
          </div>

          <Image src={homex12} alt="image" />
        </div>

        <div className={styles.homexCard9}>
          <button type="button" className={styles.homexButton}>
            Learn More
          </button>

          <div className={styles.card8TextContents}>
            <h5 className={styles.homexCardText8}>Trust in Your Choices:</h5>
            <p className={styles.homexCardParagraph8}>
              Navigate your property search journey with <br /> confidence,
              backed by genuine ratings and <br /> reviews from our trusted
              community of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homex;
