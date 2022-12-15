import React from 'react';
import Button from '../../common/button/Button';
import './Rent.css';

//
const Rent = () => {
  return (
    <div className='rent'>
      <div>
        <h1>Renting Made Simple</h1>
        <p>
          Discover a place that checks all of your boxes. Filter your rental
          search, and find exactly what you’re looking for.{' '}
          <span>Hapartment.org</span> makes it easy for you to find your perfect
          home. Check prices, see photo displays, floor plans, amenities, and
          more!
        </p>
        <p></p>

        <button>Explore search</button>
      </div>
    </div>
  );
};

export default Rent;
