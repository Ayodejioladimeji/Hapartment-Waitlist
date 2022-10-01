import React from 'react';

// import logo
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import './Navbar.css';
import Button from '../../common/button/Button';

//

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-brand'>
        <img src={logo} alt='brand-logo' />
      </div>

      <div className='nav-button'>
        <Link
          to='newsletter'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button text='Join waitlist' background='var(--primary-color)' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
