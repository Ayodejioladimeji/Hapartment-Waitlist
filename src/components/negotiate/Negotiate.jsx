import React from 'react';
import Heading from '../../common/heading/Heading';

//
import './Negotiate.css';
import img1 from '../../assets/negotiate1.svg';
import img2 from '../../assets/negotiate2.svg';

//

const Negotiate = () => {
  return (
    <div className='negotiate'>
      <Heading text='Quick tips on negotiating rent price with home owners.' />

      <div className='negotiate-center'>
        <div className='negotiate-left'>
          <img src={img1} alt='' />
          <img src={img2} alt='' className='img2' />
        </div>

        <div className='negotiate-right'>
          <ol>
            <li>Research rent apartment of your choice.</li>
            <li>Ask if the rent price is open for discussion.</li>
            <li>Highlight your strengths as a tenant.</li>
            <li>Inquire about extending your lease.</li>
            <li>Be open to compromise.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Negotiate;
