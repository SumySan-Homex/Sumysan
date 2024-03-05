import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import pro1 from "../../public/pro1.png";
import pro2 from "../../public/pro2.png";
import pro3 from "../../public/pro3.png";
import pro4 from "../../public/pro4.png";

const Products = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImages}>
        <div className={styles.productImageContainer1}>
          <Image src={pro1} alt="image" width={450} height={200} />{" "}
          <h3 className={styles.Imagetext}>Homex</h3>
          <p className={styles.paragraphText}>
            Homex, by Sumysan, is your gateway to effortless <br /> property
            exploration. With an intuitive interface, <br /> immersive virtual
            tours, and advanced search <br /> features, finding your dream
            property has never <br />
            been easier. Connect directly with property owners <br /> and
            streamline your transactions with instant
            <br /> connectivity. Welcome to the future of real estate <br />{" "}
            search—welcome to Homex.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/homex">visit site</Link>
          </button>
        </div>

        {/* <div>
          <Image src={pro2} alt="image" width={270} height={200} />
          <h3 className={styles.Imagetext}>X Space</h3>
          <p className={styles.paragraphText}>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/xspace">set a reminder</Link>
          </button>
        </div>

        <div>
          <Image src={pro3} alt="image" width={270} height={200} />
          <h3 className={styles.Imagetext}>Estate Tycoons</h3>
          <p className={styles.paragraphText}>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/estateTycoons">Join a community</Link>
          </button>
        </div> */}

        <div>
          <Image src={pro4} alt="image" width={450} height={200} />
          <h3 className={styles.Imagetext}>Work for me</h3>
          <p className={styles.paragraphText}>
            Work4mi is your go-to platform for accessing <br /> artisan services
            with ease. Powered by <br /> innovative Uber-like map search
            technology,
            <br />
            Work4mi connects you with skilled artisans in <br /> your area,{" "}
            allowing you to request their services <br /> at the touch of a
            button. Whether you need a <br /> plumber, electrician, or
            carpenter, Work4mi <br />
            simplifies the process of finding and hiring <br /> artisans nearby,
            ensuring prompt and reliable <br /> service whenever you need it.
            Say goodbye to <br /> the hassle of searching for artisans—Work4mi{" "}
            <br />
            puts the power in your hands to get the job <br /> done efficiently
            and effortlessly.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/work">visit site</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
