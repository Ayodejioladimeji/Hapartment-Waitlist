import React, { useState } from 'react';

// PACKAGES
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-scroll';

// IMAGES
import logo from '../../assets/logo.png';

// COMPONENTS
import './Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);
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

  // THE SECTION OF THE STYLE MENU
  const styleMenu = {
    left: menu ? 0 : '-100%',
  };

  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className='menu' onClick={() => setMenu(!menu)}>
        <BiMenuAltRight />
      </div>

      <ul
        className='header-link'
        style={styleMenu}
        // onClick={() => setMenu(!menu)}
      >
        <li onClick={() => setMenu(!menu)}>
          <Link
            to='newsletter'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            Home
          </Link>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <Link
            to='newsletter'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            Services
          </Link>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <Link
            to='newsletter'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            How-It-Works
          </Link>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <Link
            to='newsletter'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            Faqs
          </Link>
        </li>

        <li onClick={() => setMenu(!menu)}>
          <FaTimesCircle className='close-menu' />
        </li>
      </ul>
    </header>
  );
};

export default Header;
