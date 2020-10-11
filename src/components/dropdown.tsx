import React from 'react';
import '../styles/dropdown.css';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
};

const Dropdown: React.FC<Props> = ({ isOpen, windowWidth, setIsOpen }) => {
  const { t } = useTranslation();

  const closeDropdown = (): boolean => {
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
                <a
                  className='highlight'
                  href='#projects'
                  onClick={closeDropdown}
                >
                  {t('menu.work')}
                </a>
              </li>
              <li className='margin-bottom-sm'>
                <a className='highlight' href='#skills' onClick={closeDropdown}>
                  {t('menu.skills')}
                </a>
              </li>
              <li className='margin-bottom-sm'>
                <a
                  className='highlight'
                  href='#about-section'
                  onClick={closeDropdown}
                >
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
