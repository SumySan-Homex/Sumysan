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
          <Link href="/sumysanlab">Sumysan Lab</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/products">Products</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/careerOpportunities">Career Opportunities</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/whitepaper">Whitepaper</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/legalpages">Legal Pages</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navlist}>
          <Link href="/faqs">FAQs</Link>
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
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>

          <div>
            <Navlinks />
          </div>

          <div>
            <button type="button" className={styles.contact}>
              contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
