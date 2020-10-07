import React from 'react';
import '../styles/dropdown.css';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';

type DropdownProps = {
  isOpen: boolean;
};

const Dropdown = ({ isOpen }: DropdownProps) => {
  const { t } = useTranslation();

  return (
    <Transition
      items={isOpen}
      from={{ height: 0, overflow: 'hidden' }}
      enter={{ height: "auto", overflow: 'hidden' }}
      leave={{ height: 0, overflow: 'hidden' }}
    >
      {(isOpen) =>
        isOpen &&
        ((props) => (
          <div
            style={props}
            className='dropdown'
          >
            <ul>
              <li className='margin-bottom-sm'>{t('menu.work')}</li>
              <li className='margin-bottom-sm'>{t('menu.skills')}</li>
              <li className='margin-bottom-sm'>{t('menu.about')}</li>
              <li className='margin-bottom-sm'>{t('menu.cv')}</li>
            </ul>
          </div>
        ))
      }
    </Transition>
  );
};

export default Dropdown;
