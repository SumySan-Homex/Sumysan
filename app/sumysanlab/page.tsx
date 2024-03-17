import React from "react";
import Image from "next/image";
import Link from "next/link";
import pro2 from "../../public/pro2.png";
import pro3 from "../../public/pro3.png";
import styles from "../../styles/page.module.css";


const SumysanLab = () => {
  return (
  
    <div className={styles.productContainer}>
      <div className={styles.productImages}>
        <div className={styles.productImageContainer1}>
          <Image src={pro2} alt="image" width={450} height={200} />
          <h3 className={styles.Imagetext}>X Space</h3>
          <p className={styles.paragraphText}>
            X-Space is your one-stop shop for navigating <br /> the exciting and
            ever-evolving world of real <br /> estate. Here, we empower you with
            the <br />
            knowledge and confidence to make informed <br /> decisions on your
            real estate journey. Whether <br /> you are a seasoned investor, a
            first-time <br />
            homebuyer, or simply curious about the market, <br /> X-Space offers
            a wealth of resources designed <br /> to educate and inspire you.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/xspace">set a reminder</Link>
          </button>
        </div>

        <div className={styles.productImageContainer2}>
          <Image src={pro3} alt="image" width={450} height={200} />
          <h3 className={styles.Imagetext}>Estate Tycoons</h3>
          <p className={styles.paragraphText}>
            Calling all real estate enthusiasts! Join <br />
            the Estate Tycoons WhatsApp group,
            <br /> your exclusive hub for navigating the <br /> ever-changing
            world of property <br /> investment. Here, you will connect with a{" "}
            <br /> savvy community and gain valuable <br /> insights from
            industry experts.
          </p>
          <button className={styles.buttonLink}>
            <Link href="/estateTycoons">Join a community</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SumysanLab;
