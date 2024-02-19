import React from "react";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import About from "@/app/components/About";
import Content from "@/app/components/Content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Content />
    </div>
  );
};

export default Home;
