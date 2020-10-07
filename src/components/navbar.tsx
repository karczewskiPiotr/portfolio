import React, { useState, Suspense } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.svg';
import Back from '../images/back.svg';
import Menu from '../images/hamburger-menu.svg';
import Dropdown from './dropdown';
import { Transition } from 'react-spring/renderprops';
import Sticky from 'react-stickynode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sticky activeClass="sticky-navbar" innerClass="innerSticky">
      <nav className='navbar'>
        <img
          src={Logo}
          alt='Piotr Karczewski Logo'
          className='logo margin-left-xxs'
        />
        <Transition
          items={isOpen}
          from={{ opacity: 0, transform: 'rotate(-270deg)' }}
          enter={{ opacity: 1, transform: 'rotate(0deg)' }}
          leave={{ opacity: 0, transform: 'rotate(270deg)' }}
        >
          {(isOpen) =>
            !isOpen
              ? (props) => (
                  <img
                    style={props}
                    src={Menu}
                    alt='Hamburger menu'
                    className='menu-icon margin-right-sm'
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    }}
                  />
                )
              : (props) => (
                  <img
                    style={props}
                    src={Back}
                    alt='Hamburger menu'
                    className='back-icon margin-right-sm'
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    }}
                  />
                )
          }
        </Transition>
        <Suspense fallback={<div>Loding</div>}>
          <Dropdown isOpen={isOpen} />
        </Suspense>
      </nav>
    </Sticky>
  );
};

export default Navbar;
