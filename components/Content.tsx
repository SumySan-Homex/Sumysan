import React from "react";
import Image from "next/image";
import about1 from "../public/about1.png";
import styles from "../styles/content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={about1} alt="abt" />
        <p>
          lorem ipsum yes yeshsh scbcnj hjnch <br />
          jbchcc cchbchcc chccbcdc,b u{" "}
        </p>
      </div>
    </div>
  );
};

export default Content;
