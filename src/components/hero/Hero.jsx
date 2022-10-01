import React from 'react';

//
import './Hero.css';
import heroImg from '../../assets/hero-img.svg';
import Button from '../../common/button/Button';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-center'>
        <div className='hero-left'>
          <div className='hero-left-div'>
            <h1>
              Easy <span>way</span> to <br />
              find a perfect <span>home</span>
            </h1>
            <p>
              We help users search for apartment easily and provide them with
              adequate information to help them make well- informed decisions.
            </p>
            <Button text='Stay updated' />
          </div>
        </div>

        <div className='hero-right'>
          <img src={heroImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
