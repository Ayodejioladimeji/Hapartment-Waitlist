import React from "react";
import Newsletters from "./../components/newsletter/Newsletter";
import SEO from "./../SEO/Seo";
import Navbar from "./../components/nav/Navbar";

const Newsletter = () => {
  return (
    <>
      <SEO title="Join waitlist" />
      <Navbar />
      <Newsletters />
    </>
  );
};

export default Newsletter;
