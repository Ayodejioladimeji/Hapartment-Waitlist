import React from 'react';
// import Heading from '../../common/heading/Heading';

//
import './Enjoy.css';
import service from '../../assets/service.svg';
import charges from '../../assets/charges.svg';
import navigation from '../../assets/navigation.svg';

const Enjoy = () => {
  return (
    <div className='enjoy'>
      <h1>What you tend to enjoy</h1>

      <div className='enjoy-center'>
        <div className='enjoy-box'>
          <div className='enjoy-box-image blue'>
            <img src={service} alt='' />
          </div>

          <h3>Free Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            facilisis sit in et ridiculus aliquam a, elit
          </p>
        </div>

        <div className='enjoy-box'>
          <div className='enjoy-box-image green'>
            <img src={charges} alt='' />
          </div>

          <h3>No hidden charges</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            facilisis sit in et ridiculus aliquam a, elit
          </p>
        </div>

        <div className='enjoy-box'>
          <div className='enjoy-box-image yellow'>
            <img src={navigation} alt='' />
          </div>

          <h3>Easy Navigation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            facilisis sit in et ridiculus aliquam a, elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
