import React from 'react';
import './SectionThree.css';
import apartment from '../../assets/apartment2.png';
import Button from './../../common/button/Button';

const SectionThree = () => {
  return (
    <div className='section-three'>
      <div className='section-three-left'>
        <img src={apartment} alt='' />
      </div>

      <div className='section-three-right'>
        <h1>Rent your next apartment</h1>
        <p>
          Search and find vacant apartments near you - it's easy as
          one-two-three! Check out the facilities in your area, decide on the
          best apartment of your choice, compare prices, and then contact the
          property owner.
        </p>
        <p>
          With more than 1Million apartment listings across the country, finding
          your ideal home on <span>Hapartment</span> is a breeze!
        </p>

        <Button text='Explore apartments' background='var(--secondary-color)' />
      </div>
    </div>
  );
};

export default SectionThree;
