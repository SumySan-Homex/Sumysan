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
          <div className={styles.workCardContent1}>
            <h5 className={styles.workCardHeader}>Why Work for Us?</h5>
            <div className={styles.workCardParagraphs1}>
              <div className={styles.workCardParagraphs11}>
                <p>
                  •&nbsp;&nbsp;&nbsp;Make a Real Impact: Join a team of
                  passionate <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;professionals
                  who are shaping the future of real <br />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;estate technology. Your work
                  will directly <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;impact how
                  people experience the real estate <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;journey.
                </p>
                <p>
                  • &nbsp;&nbsp;Growth Opportunities: We invest in our people.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Develop your skills and explore
                  career <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;advancement
                  opportunities within a supportive <br />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and collaborative environment.
                </p>
              </div>

              <div className={styles.workCardParagraphs12}>
                <p>
                  •&nbsp;&nbsp;&nbsp;Cutting-edge Technology: Work with the
                  latest <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proptech tools and
                  solutions, staying at the <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forefront of the
                  industry&apos;s technological <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;advancements.
                </p>

                <p>
                  •&nbsp;&nbsp;&nbsp;&nbsp;Vibrant Culture: Become part of a
                  dynamic and <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inclusive workplace where
                  innovation and <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teamwork are celebrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
