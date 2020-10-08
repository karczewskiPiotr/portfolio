import React, { useState, useEffect, Suspense } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.svg';
import Back from '../images/back.svg';
import Menu from '../images/hamburger-menu.svg';
import Dropdown from './dropdown';
import { Transition } from 'react-spring/renderprops';
import Sticky from 'react-stickynode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });

  useEffect(() => {
    if (width >= 992) {
      setIsOpen(true);
    } else {
      if (isOpen === true) {
        setIsOpen(false);
      }
    }
  }, [width]);

  return (
    <Sticky activeClass='sticky-navbar' innerClass='innerSticky'>
      <nav className='navbar'>
        <div className="navbar-content">
          <div className='logo-wrapper'>
            <img
              src={Logo}
              alt='Piotr Karczewski Logo'
              className='logo margin-left-xxs'
            />
            <div className='logo-identity'>
              <div className='identity-component'>Piotr</div>
              <div className='identity-component'>Karczewski</div>
            </div>
          </div>
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
                      alt='Back icon'
                      className='back-icon margin-right-sm'
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                    />
                  )
            }
          </Transition>
          <Suspense fallback={<div>Loding</div>}>
            <Dropdown
              isOpen={isOpen}
              windowWidth={width}
              setIsOpen={setIsOpen}
            />
          </Suspense>
        </div>
      </nav>
    </Sticky>
  );
};

export default Navbar;
