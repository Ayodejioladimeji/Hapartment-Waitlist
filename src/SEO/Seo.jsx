import React from 'react';
import { Helmet } from 'react-helmet';
import image from '../assets/favicon.ico';
import Favicon from '../assets/favicon.ico';

const SEO = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | Hapartment`}>
      <meta name='image' content={image} />
      <link rel='shortcut icon' href={Favicon} />
    </Helmet>
  );
};

export default SEO;
