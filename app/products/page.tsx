import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import pro1 from "../../public/pro1.png";
import pro2 from "../../public/pro2.png";
import pro3 from "../../public/pro3.png";
import pro4 from "../../public/pro4.png";

const Products = () => {
  return (
    <div className={styles.productContainer}>
      <div>
        <Image src={pro1} alt="image" />
        <Image src={pro2} alt="image" />
        <Image src={pro3} alt="image" />
        <Image src={pro4} alt="image" />
      </div>
    </div>
  );
};

export default Products;
