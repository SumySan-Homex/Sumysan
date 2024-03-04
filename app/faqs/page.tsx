"use client";
import React, { useState } from "react";
import styles from "../../styles/page.module.css";

const Faq = () => {
  //state to manage the toggling of the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //function to manage the toggle button
  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
    // (prevDropdownOpen: any) => !prevDropdownOpen
  };
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqContents}>
        <h3 className={styles.faqHeader}>Frequently Asked Questions</h3>

        <div className={styles.faqDropdown}>
          <p>what is sumysan ?</p>

          {/* for dropdown to appear when dropdownOpen state is true */}
          {dropdownOpen && (
            <p>
              Sumysan is a prop tech company into real estate aquisition and
              <br />
              sorts.
            </p>
          )}

          <button onClick={handleToggle} className={styles.faqToggleBtn}>
            {dropdownOpen ? "🅧" : "v"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
