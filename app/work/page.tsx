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
        <h4>
          Charting Your Career Path: <br />
          Work for Us at SUMYSAN!
        </h4>
      </div>
    </div>
  );
};

export default Work;
