import React from "react";
import Image from "next/image";
import Link from "next/link";
import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";
import styles from "../../styles/page.module.css";

const Work = () => {
  return (
    <div className={styles.workContainer}>
      <div className={styles.workContent1}>
        <h4 className={styles.workContentHeader}>
          Charting Your Career Path: <br />
          Work for Us at SUMYSAN!
        </h4>

        <Image src={work1} alt="image" width={479} height={320} />
      </div>

      <div className={styles.workContent2}>
        <div className={styles.workCard1}>
          <h5>Why Work For Us ?</h5>
        </div>
      </div>
    </div>
  );
};

export default Work;
