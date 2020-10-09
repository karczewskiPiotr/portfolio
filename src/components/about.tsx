import React from 'react';
import '../styles/about.css'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='about'>
      <h3>{t('greetings')}</h3>
      <p>{t('about')}</p>
    </section>
  );
};

export default About;
