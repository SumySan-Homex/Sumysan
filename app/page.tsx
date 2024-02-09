import React from "react";
import Navbar from "@/components/Navbar";
import "./globals.css";
import About from "@/components/About";
import Content from "@/components/Content";

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
