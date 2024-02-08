import React from "react";
import Image from "next/image";
import re1 from "../public/re1.png";
import re2 from "../public/re2.png";

const About = () => {
  return (
    <div>
      <div>
        <Image src={re1} alt="estate" />
        <Image src={re2} alt="house" />
      </div>
    </div>
  );
};

export default About;
