import React from 'react';
import '../styles/collaborations.css';
import { useTranslation } from 'react-i18next';

const Collaborations = () => {
  const { t } = useTranslation();

  const companies = ['saxion', 'imd-ma', 'politie', 'sodaq'];

  const getCompanies = (companies: Array<string>) => {
    return companies.map((company) => {
      const logo = require(`../images/companies/${company}-logo.svg`);

      return <img src={logo} alt={`${company} logo`} className='company' />;
    });
  };

  return (
    <section className='collaborations-wrapper margin-top-md'>
      <div className='collaborations'>
        <h4>{t('companies')}</h4>
        <div className='companies'>{getCompanies(companies)}</div>
      </div>
    </section>
  );
};

export default Collaborations;
