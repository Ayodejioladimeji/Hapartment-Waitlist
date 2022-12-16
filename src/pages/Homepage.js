import React from "react";
import Header from "./../components/nav/Header";
import HeroPage from "./../components/hero/HeroPage";
import Scan from "./../components/scan/Scan";
import WhatWeDo from "../components/whatwedo/WhatWeDo";
import Negotiate from "../components/negotiate/Negotiate";
import Enjoy from "../components/enjoy/Enjoy";
import SectionOne from "../components/section-one/SectionOne";
import SectionTwo from "../components/section-two/SectionTwo";
import SectionThree from "../components/section-three/SectionThree";
import SEO from "./../SEO/Seo";
import Rent from "../components/rent/Rent";
import Footer from "../components/footer/Footer";

//
const Homepage = () => {
  return (
    <>
      <SEO title="Homepage" />
      <Header />
      <HeroPage />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Enjoy />
      <Scan />
      <WhatWeDo />
      {/* <Negotiate /> */}
      {/* <Rent /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
