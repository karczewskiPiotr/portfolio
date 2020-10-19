import React from 'react';
import '../styles/dropdown.css';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';

type Props = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
};

const Dropdown: React.FC<Props> = ({ toggle, windowWidth, setToggle }) => {
  const { t } = useTranslation();

  const closeDropdown = (): boolean => {
    if (windowWidth < 992) setToggle(false);
    return true;
  };

  return (
    <Transition
      items={toggle}
      from={{ height: 0, overflow: 'hidden' }}
      enter={{ height: 'auto', overflow: 'hidden' }}
      leave={{ height: 0, overflow: 'hidden' }}
      initial={null}
    >
      {(toggle) =>
        toggle &&
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
                    href='https://firebasestorage.googleapis.com/v0/b/portfolio-7c0fd.appspot.com/o/Piotr_Karczewski_CV.pdf?alt=media&token=6a3792f4-1a0d-4166-89bc-a4ae1a3ab991'
                    target='_blank'
                    rel='noopener noreferrer'
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
