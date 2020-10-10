import React from 'react';
import '../styles/dropdown.css';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';

type DropdownProps = {
  isOpen: boolean;
  setIsOpen: any;
  windowWidth: number;
};

const Dropdown = ({ isOpen, windowWidth, setIsOpen }: DropdownProps) => {
  const { t } = useTranslation();

  const closeDropdown = function (): boolean {
    if (windowWidth < 992) setIsOpen(false);
    return true;
  };

  return (
    <Transition
      items={isOpen}
      from={{ height: 0, overflow: 'hidden' }}
      enter={{ height: 'auto', overflow: 'hidden' }}
      leave={{ height: 0, overflow: 'hidden' }}
      initial={null}
    >
      {(isOpen) =>
        isOpen &&
        ((props) => (
          <div style={props} className='dropdown'>
            <ul>
              <li className='margin-bottom-sm'>
                <a className='highlight' href='#' onClick={closeDropdown}>
                  {t('menu.work')}
                </a>
              </li>
              <li className='margin-bottom-sm'>
                <a className='highlight' href='#' onClick={closeDropdown}>
                  {t('menu.skills')}
                </a>
              </li>
              <li className='margin-bottom-sm'>
                <a className='highlight' href='#about-section' onClick={closeDropdown}>
                  {t('menu.about')}
                </a>
              </li>
              <li className='margin-bottom-sm resume'>
                <span className='resume-text'>
                  <a
                    className='highlight'
                    href='#'
                    target='_blank'
                    onClick={closeDropdown}
                  >
                    {t('menu.cv')}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        ))
      }
    </Transition>
  );
};

export default Dropdown;
