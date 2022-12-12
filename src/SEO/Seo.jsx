import React from "react";
import { Helmet } from "react-helmet";
import image from "../assets/logo2.png";
import Favicon from "../assets/favicon.ico";

const SEO = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Hapartment`}>
      <meta name="image" content={image} />
      <meta
        name="description"
        content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
      />
      <meta
        name="keywords"
        content="Hapartment, hapartments, Hapartments, hapartment, real estate, agents, landlord, tenant, renting website, apartment, rent house, leasing house "
      />
      <link rel="shortcut icon" href={Favicon} />
    </Helmet>
  );
};

export default SEO;
