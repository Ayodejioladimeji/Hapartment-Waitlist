import React from 'react';
import how from '../../assets/how.png';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <div className='how-it-works-left'>
        <div className='left-box'>
          <img src={how} alt='' />
        </div>
      </div>

      <div className='how-it-works-right'>
        <h1>How it works</h1>
      </div>
    </div>
  );
};

export default HowItWorks;
