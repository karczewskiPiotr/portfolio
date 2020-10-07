import React, { useState, Suspense } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.svg';
import Menu from '../images/hamburger-menu.svg';
import Dropdown from './dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <img
        src={Logo}
        alt='Piotr Karczewski Logo'
        className='logo margin-left-xxs'
      />
      <img
        src={Menu}
        alt='Hamburger menu'
        className='menu-icon margin-right-sm'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <Suspense fallback={<div>Loding</div>}>
          <Dropdown />
        </Suspense>
      )}
    </nav>
  );
};

export default Navbar;
