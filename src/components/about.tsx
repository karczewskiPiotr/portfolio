import React from 'react';
import '../styles/about.css';
import { useTranslation } from 'react-i18next';
import Background from '../images/about-background.svg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='about' id='about-section'>
      <img src={Background} alt='About section background' />
      <div className='about-content'>
        <h3>{t('greetings')}</h3>
        <p>{t('about')}</p>
      </div>
    </section>
  );
};

export default About;
