import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
