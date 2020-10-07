import React from 'react';
import '../styles/dropdown.css';
import { useTranslation } from 'react-i18next';

const Dropdown = () => {
  const { t } = useTranslation();

  return (
    <div className='dropdown'>
      <ul>
        <li className='margin-bottom-sm'>{t('menu.work')}</li>
        <li className='margin-bottom-sm'>{t('menu.skills')}</li>
        <li className='margin-bottom-sm'>{t('menu.about')}</li>
        <li className='margin-bottom-sm'>{t('menu.cv')}</li>
      </ul>
    </div>
  );
};

export default Dropdown;
