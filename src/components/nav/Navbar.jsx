import React, { useState } from 'react';

// import logo
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import { Link } from 'react-scroll';
import './Navbar.css';
import Button from '../../common/button/Button';

//

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // Changing the navbar color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'active-nav nav' : 'nav'}>
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
          <Button
            text='Join waitlist'
            background='var(--primary-color)'
            border='2px solid var(--white-color)'
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
