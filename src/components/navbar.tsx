import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.svg';
import Back from '../images/back.svg';
import Menu from '../images/hamburger-menu.svg';
import Dropdown from './dropdown';
import { useTransition, animated } from 'react-spring';
import Sticky from 'react-stickynode';
import { useWindowWidth } from '../helpers/useWindowWidth';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { width } = useWindowWidth();

  useEffect(() => {
    if (width >= 992) {
      setToggle(true);
    } else if (toggle === true) {
      setToggle(false);
    }
  }, [width]);

  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: 'rotate(-270deg)' },
    enter: { opacity: 1, transform: 'rotate(0deg)' },
    leave: { opacity: 0, transform: 'rotate(270deg)' },
  });

  return (
    <Sticky activeClass='sticky-navbar' innerClass='innerSticky'>
      <nav className='navbar'>
        <div className='navbar-content'>
          <div className='logo-wrapper'>
            <img src={Logo} alt='Piotr Karczewski Logo' className='logo' />
            <div className='logo-identity'>
              <div className='identity-component'>Piotr</div>
              <div className='identity-component'>Karczewski</div>
            </div>
          </div>
          {transitions.map(({ item, key, props }) =>
            !item ? (
              <animated.img
                style={props}
                key={key}
                src={Menu}
                alt='Hamburger menu'
                className='menu-icon margin-right-sm'
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              />
            ) : (
              <animated.img
                style={props}
                key={key}
                src={Back}
                alt='Back icon'
                className='back-icon margin-right-sm'
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              />
            )
          )}
          <Dropdown toggle={toggle} windowWidth={width} setToggle={setToggle} />
        </div>
      </nav>
    </Sticky>
  );
};

export default Navbar;
