import React from 'react';
import '../styles/about.css';
import { useTranslation } from 'react-i18next';
import Background from '../images/about-background.svg';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='about' id='about-section'>
      <img src={Background} alt='About section background' />
      <article className='about-content'>
        <h2>{t('greetings')}</h2>
        <p>{t('about')}</p>
      </article>
    </section>
  );
};

export default About;
