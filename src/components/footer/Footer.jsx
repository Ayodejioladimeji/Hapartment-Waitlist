import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <a
          href='https://www.facebook.com/profile.php?id=100085724386292&mibextid=ZbWKwL'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa fa-facebook-square' aria-hidden='true'></i>
        </a>

        <a
          href='https://www.instagram.com/invites/contact/?i=1pqlgg45pg0nl&utm_content=pldblyb'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa fa-instagram' aria-hidden='true'></i>
        </a>

        <a
          href='https://twitter.com/Hapartment11?t=cmOAR5aAypWeGzbLvebt-A&s=09'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa fa-twitter-square' aria-hidden='true'></i>
        </a>

        <a
          href='https://www.linkedin.com/in/hapartment-rentals'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        </a>
      </div>

      <p>copyright&copy;{new Date().getFullYear()} Hapartment.org</p>
    </div>
  );
};

export default Footer;
