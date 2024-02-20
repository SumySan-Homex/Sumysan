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
      <div className={styles.productImages}>
        <div>
          <Image src={pro1} alt="image" width={270} height={200} />{" "}
          <h3>Homex</h3>
          <p>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button>visit site</button>
        </div>

        <div>
          <Image src={pro2} alt="image" width={270} height={200} />
          <h3>X Space</h3>
          <p>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button>set a reminder</button>
        </div>

        <div>
          <Image src={pro3} alt="image" width={270} height={200} />
          <h3>Estate Tycoons</h3>
          <p>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button>Join Community</button>
        </div>

        <div>
          <Image src={pro4} alt="image" width={270} height={200} />
          <h3>Work for me</h3>
          <p>
            Crypto ipsum bitcoin
            <br />
            ethereum dogecoin
            <br />
            litecoin. Aave dai.
          </p>
          <button>visit site</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
