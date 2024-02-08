import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navlinks = () => {
  return (
    <nav>
      <ul className={styles.navlinks}>
        <li className={styles.navlist}>
          <Link href="">Products/Services</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">Career Opportunities</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">Whitepaper</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">Legal Pages</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">About Us</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">Blog</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navcontent}>
          <div>
            <Image src={logo} alt="logo" />
          </div>

          <div>
            <Navlinks />
          </div>

          <div>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;