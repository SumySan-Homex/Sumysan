import React from "react";
import Image from "next/image";
import Link from "next/link";
import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";
import work4 from "../../public/work4.png";
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
            <h5 className={styles.workCardHeader1}>Why Work for Us?</h5>
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

        <div className={styles.workCard2}>
          <div className={styles.workCardContent2}>
            <div>
              <h5 className={styles.workCardHeader2}>How to Work for Us:</h5>
              <h6 className={styles.workCardHeader22}>
                1. Browse Current Openings: 
              </h6>
              <p className={styles.workCardParagraph2}>
                Visit our careers page [link to careers page] to <br /> explore
                exciting opportunities across various <br /> departments. We
                offer roles for individuals with
                <br /> diverse skillsets and experience levels.
              </p>
              <button className={styles.workButton}>Learn More</button>
            </div>
            <Image src={work2} alt="image" width={400} height={220} />
          </div>
        </div>

        <div className={styles.workCard3}>
          <div className={styles.workCardContent3}>
            <Image src={work3} alt="image" width={400} height={220} />

            <div>
              <h5 className={styles.workCardHeader3}>How to Work for Us:</h5>
              <h6 className={styles.workCardHeader33}>
                2. Let Us Know Your Interest: 
              </h6>
              <p className={styles.workCardParagraph3}>
                Even if there is not a perfect fit currently, submit,
                <br /> your resume and a cover letter expressing your
                <br /> interest in joining our team. We are always looking
                <br /> for talented individuals who share our vision.
              </p>
              <button className={styles.workButton}>Learn More</button>
            </div>
          </div>
        </div>

        <div className={styles.workCard4}>
          <div className={styles.workCardContent4}>
            <Image src={work4} alt="image" width={400} height={220} />
            <h5 className={styles.workCardHeader4}>How to Work for Us:</h5>
            <h6 className={styles.workCardHeader44}>
              3. Follow Us on all Social Media 
            </h6>
            <p className={styles.workCardParagraph4}>
              Stay updated on our latest job postings and company culture by
              <br />
              following us on social media platforms like LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
