import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navlinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="">Products/Services</Link>
        </li>
        <li>
          <Link href="">Career Opportunities</Link>
        </li>
        <li>
          <Link href="">Whitepaper</Link>
        </li>
        <li>
          <Link href="">Legal Pages</Link>
        </li>
        <li>
          <Link href="">About Us</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
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
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <Navlinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
