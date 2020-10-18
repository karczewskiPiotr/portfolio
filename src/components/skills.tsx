import React from 'react';
import '../styles/skills.css';
import { useTranslation } from 'react-i18next';
import { technologies } from '../constants/technologies';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const getTechnologies = (technologies: string[]): JSX.Element[] => {
    return technologies.map((technology) => {
      const logo = require(`../images/technologies/${technology
        .toLowerCase()
        .replace('#', '')}-logo.svg`);

      return (
        <article className='technology' key={technology}>
          <img src={logo} alt={`${technology} icon`} />
          <p>{technology}</p>
        </article>
      );
    });
  };

  return (
    <div id='skills' className='skills-wrapper'>
      <section className='skills'>
        <article>
          <h4>{t('skills.part1')}</h4>
          <div className='technologies'>
            {getTechnologies(technologies.main)}
          </div>
        </article>
        <article>
          <h4 className='margin-top-sm'>{t('skills.part2')}</h4>
          <div className='technologies'>
            {getTechnologies(technologies.complementary)}
          </div>
        </article>
        <article>
          <h4 className='margin-top-sm'>{t('skills.part3')}</h4>
          <div className='technologies'>
            {getTechnologies(technologies.rare)}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Skills;
