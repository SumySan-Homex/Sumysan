import React from "react";
import Image from "next/image";
import wp1 from "../../public/wp1.png";
import wp2 from "../../public/wp2.png";
import wp3 from "../../public/wp3.png";
import wp4 from "../../public/wp4.png";
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
            <div className={styles.wpTextContainer8}>
              <h6 className={styles.wpCardHeader8}>1. Prop Search</h6>
              <p className={styles.wpCardParagraph8}>
                Prop Search is a user-friendly application
                <br />
                that redefines how individuals search for,
                <br />
                connect with, and experience properties. It
                <br />
                operates with the ease and accessibility of
                <br />
                ride-sharing apps like Uber and Bolt. The key
                <br />
                features and functionalities include:
              </p>

              <p className={styles.wpCardParagraph8i}>
                1. User-Friendly Interface: Prop Search
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;offers an intuitive and
                easy-to-navigate
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;interface that simplifies
                property <br />
                &nbsp;&nbsp;&nbsp;&nbsp;searches.
              </p>
              <p className={styles.wpCardParagraph8i}>
                2. Property Tour: A standout feature allows
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;users to virtually tour
                properties through
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;videos uploaded by property
                owners or
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;managers. This immersive experience
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;provides potential buyers or
                renters with
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;an in-depth understanding of the
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;property&apos;s layout and
                condition.
              </p>
              <p className={styles.wpCardParagraph8i}>
                3. Advanced Search: Users can fine-tune
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;their property searches by
                location, price
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;range, amenities, and more,
                ensuring that
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;they find the perfect match for
                their
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;needs.
              </p>
              <p className={styles.wpCardParagraph8i}>
                4. Instant Connectivity: The app facilitates
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;direct connections between
                property
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;seekers and property owners or
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;managers, streamlining
                communication
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;and reducing delays in the
                transaction
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;process.
              </p>
              <p className={styles.wpCardParagraph8i}>
                5. Ratings and Reviews: Users can leave and
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;view ratings and reviews for
                properties
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;and property owners, enhancing
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;transparency and trust within the
                platform.
              </p>
            </div>
            <div className={styles.wpImageContainer8}>
              <Image src={wp2} alt="image" width={400} height={500} />
              <Image src={wp3} alt="image" width={400} height={380} />
            </div>
          </div>
        </div>

        <div className={styles.wpCard9}>
          <div className={styles.wpCardContent9}>
            <div className={styles.wpImageContainer9}>
              <Image src={wp4} alt="image" />
            </div>

            <div className={styles.wpTextContainer9}>
              <h6 className={styles.wpCardHeader9}>2. Prop NFT</h6>
              <p className={styles.wpCardParagraph9}>
                Prop NFT introduces the concept of Non-
                <br />
                Fungible Tokens (NFTs) to the world of real
                <br /> estate. This component leverages blockchain
                <br />
                technology to represent ownership and
                <br /> rights related to real estate assets in a digital,
                <br /> unique, and secure manner:
              </p>
              <p className={styles.wpCardParagraph9i}>
                1. Tokenized Ownership: Real estate assets
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;are represented as NFTs, each with a
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;unique digital identifier. These
                tokens can
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;be bought, sold, and traded on
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;compatible platforms
              </p>
              <p className={styles.wpCardParagraph9i}>
                2. Fractional Ownership: Prop NFT enables
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;fractional ownership, allowing
                multiple
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;investors to hold shares in a
                property. This
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;democratizes real estate investment and
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;opens up opportunities for a
                broader
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;range of investors.
              </p>
              <p className={styles.wpCardParagraph9i}>
                3. Property Documentation: All property-
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;related documents, such as titles,
                deeds,
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;and contracts, are securely
                stored on the
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;blockchain. This ensures tamper-proof
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;records and transparency in
                ownership
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
