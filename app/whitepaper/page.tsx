import React from "react";
import Image from "next/image";
import wp1 from "../../public/wp1.png";
import wp2 from "../../public/wp2.png";
import wp3 from "../../public/wp3.png";
import styles from "../../styles/page.module.css";

const Whitepaper = () => {
  return (
    <div className={styles.wpContainer}>
      <div className={styles.wpTextContainer}>
        <h3 className={styles.wpText}>Introduction</h3>
        <p className={styles.wpParagraph}>
          The real estate industry, as one of the cornerstones of the global
          economy, plays a<br /> pivotal role in shaping societies, economies,
          and individual lives. The very concept of <br /> &quot;home&quot; is
          intertwined with the real estate landscape, making it not just a
          business
          <br /> sector but a fundamental part of our daily existence.
          <br /> Yet, this vital industry faces significant challenges and
          complexities that have persisted
          <br /> for generations. These challenges span a wide spectrum, from
          inefficiencies in property,
          <br /> transactions and management to issues of transparency,
          security, and accessibility.
          <br />
          Inefficiencies in the real estate sector not only hinder its growth
          but also have a<br /> profound impact on the lives of individuals and
          communities.
        </p>
      </div>

      <div className={styles.wpCardContents}>
        <h5 className={styles.wpHeader}>
          The Challenges of the Real Estate Industry
        </h5>

        <div className={styles.wpCard1}>
          <div className={styles.wpCardContents1}>
            <div>
              <h4 className={styles.wpCardHeader1}>1. Complex Transactions:</h4>
              <p className={styles.wpCardParagraph1}>
                Real estate transactions have long been known
                <br /> for their complexity, often involving numerous
                <br /> intermediaries, cumbersome paperwork, and
                <br />
                prolonged timelines. This complexity can deter
                <br /> potential buyers and sellers and lead to
                <br /> frustration.
              </p>
            </div>
            <Image src={wp1} alt="wp1" />
          </div>
        </div>

        <div className={styles.wpCard2}>
          <div className={styles.wpCardContents2}>
            <Image src={wp1} alt="wp1" />
            <div>
              <h4 className={styles.wpCardHeader2}>
                2.  Lack of Transparency:
              </h4>
              <p className={styles.wpCardParagraph2}>
                The lack of transparency in property records and
                <br /> ownership can result in disputes, fraud, and
                <br /> uncertainty. It hampers the ability to make
                <br /> informed decisions about real estate investments.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wpCard3}>
          <div className={styles.wpCardContents3}>
            <div>
              <h4 className={styles.wpCardHeader3}>3. High Entry Barriers:</h4>
              <p className={styles.wpCardParagraph3}>
                Real estate investment traditionally required
                <br /> significant capital, making it inaccessible to
                <br /> many. This has limited the ability of
                <br /> individuals to diversify their investments and
                <br /> build wealth through property.
              </p>
            </div>
            <Image src={wp1} alt="wp1" />
          </div>
        </div>

        <div className={styles.wpCard4}>
          <div className={styles.wpCardContents4}>
            <Image src={wp1} alt="wp1" />
            <div>
              <h4 className={styles.wpCardHeader4}>4.  Data Silos:</h4>
              <p className={styles.wpCardParagraph4}>
                Valuable data related to real estate, such as
                <br /> market trends and property histories, is often
                <br /> siloed and inaccessible. This makes it difficult for
                <br /> stakeholders to make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wpCard5}>
          <div className={styles.wpCardContents5}>
            <div>
              <h4 className={styles.wpCardHeader5}>5. Privacy and Security:</h4>
              <p className={styles.wpCardParagraph5}>
                Privacy breaches and security vulnerabilities in
                <br /> property transactions pose risks to both buyers
                <br /> and sellers. There is a pressing need for secure
                <br /> and transparent methods of conducting real
                <br /> estate transactions.
              </p>
            </div>
            <Image src={wp1} alt="wp1" />
          </div>
        </div>

        <div className={styles.wpCard6}>
          <div className={styles.wpCardContent6}>
            <h4 className={styles.wpCardHeader6}>
              The Imperative for Innovation and Technology
            </h4>
            <p className={styles.wpCardParagraph6}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In an age
              characterised by digital transformation and the rapid evolution of
              <br /> technologies, the real estate industry stands at a
              crossroads. The need for innovation
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
              technology in this sector has never been more evident. Here is
              why:
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>1. Efficiency:</h5>

            <p className={styles.wpCardContent6iParagraph}>
              Technology can streamline the entire real estate lifecycle, from
              property searches to
              <br /> transactions and management. This efficiency reduces costs,
              saves time, and enhances the
              <br /> overall experience for stakeholders.
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>2. Transparency:</h5>
            <p className={styles.wpCardContent6iParagraph}>
               Blockchain technology, for instance, can bring unprecedented
              transparency to property
              <br /> records, reducing disputes and fraud. It empowers
              individuals with clear ownership information.
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>3. Accessibility:</h5>
            <p className={styles.wpCardContent6iParagraph}>
              Technology has the potential to democratise real estate
              investment, enabling fractional
              <br /> ownership and making it more accessible to a broader range
              of investors.
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>
              4. Data Empowerment:
            </h5>
            <p className={styles.wpCardContent6iParagraph}>
              Advanced data analytics and AI can provide actionable insights
              into market trends, enabling
              <br /> smarter investment decisions.
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>5. Security:</h5>
            <p className={styles.wpCardContent6iParagraph}>
              Blockchain and advanced encryption can provide robust security in
              real estate transactions,
              <br /> safeguarding sensitive information.
            </p>
          </div>

          <div className={styles.wpCardContent6i}>
            <h5 className={styles.wpCardContent6iHeader}>6. Innovation: </h5>
            <p className={styles.wpCardContent6iParagraph}>
              Embracing innovation positions the industry to adapt to emerging
              trends, including the
              <br /> metaverse, which is reshaping how people experience real
              estate.
            </p>
          </div>
        </div>

        <div className={styles.wpCard7}>
          <div className={styles.wpCardContent}>
            <p className={styles.wpCardParagraph7}>
              Sumysan, at its core, recognizes these challenges and the immense
              potential for transformative
              <br /> change. We are on a mission to revolutionize the real
              estate industry by harnessing cutting edge
              <br />
              &nbsp;&nbsp;technologies, including artificial intelligence,
              quantum computing, blockchain, and metaverse
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;integration. Our vision is to
              create an ecosystem where real estate transactions are efficient,
              <br />
              secure, transparent, and accessible to all. Sumysan is not just a
              company; it is a commitment to
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;realizing a future where real
              estate truly serves the needs and aspirations of individuals and
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;communities.
              Welcome to the future of real estate.
            </p>
          </div>
        </div>

        <div className={styles.wpTextContainer2}>
          <h3 className={styles.wpText2}>PRODUCTS OF SUMYSAN</h3>
        </div>

        <div className={styles.wpCard8}>
          <div className={styles.wpCardContent8}>
            <div>
              <h6>1. Prop Search</h6>
              <p>
                Prop Search is a user-friendly application
                <br /> that redefines how individuals search for,
                <br /> connect with, and experience properties. It
                <br /> operates with the ease and accessibility of
                <br /> ride-sharing apps like Uber and Bolt. The key
                <br /> features and functionalities include:
              </p>

              <p>
                1. User-Friendly Interface: Prop Search
                <br /> offers an intuitive and easy-to-navigate
                <br /> interface that simplifies property searches.
              </p>
              <p>
                2. Property Tour: A standout feature allows
                <br /> users to virtually tour properties through
                <br /> videos uploaded by property owners or
                <br />
                managers. This immersive experience
                <br /> provides potential buyers or renters with
                <br /> an in-depth understanding of the
                <br /> property&apos;s layout and condition.
              </p>
              <p>
                3. Advanced Search: Users can fine-tune
                <br /> their property searches by location, price
                <br /> range, amenities, and more, ensuring that
                <br /> they find the perfect match for their
                <br /> needs.
              </p>
              <p>
                4. Instant Connectivity: The app facilitates
                <br /> direct connections between property
                <br /> seekers and property owners or
                <br /> managers, streamlining communication
                <br /> and reducing delays in the transaction
                <br />
                process.
              </p>
              <p>
                5. Ratings and Reviews: Users can leave and
                <br /> view ratings and reviews for properties
                <br /> and property owners, enhancing
                <br /> transparency and trust within the platform.
              </p>
            </div>
            <div>
              <Image src={wp2} alt="image" />
            </div>
            <div>
              <Image src={wp3} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
