import React from 'react';
import '../styles/collaborations.css';
import { useTranslation } from 'react-i18next';

const Collaborations: React.FC = () => {
  const { t } = useTranslation();

  const companies: string[] = ['saxion', 'imd-ma', 'politie', 'sodaq'];

  const getCompanies = (companies: string[]): JSX.Element[] => {
    return companies.map((company) => {
      const logo = require(`../images/companies/${company}-logo.svg`);

      return (
        <img
          src={logo}
          alt={`${company} logo`}
          key={company}
          className='company'
        />
      );
    });
  };

  return (
    <section className='collaborations-wrapper margin-top-md'>
      <article className='collaborations'>
        <h4>{t('companies')}</h4>
        <div className='companies'>{getCompanies(companies)}</div>
      </article>
    </section>
  );
};

export default Collaborations;
