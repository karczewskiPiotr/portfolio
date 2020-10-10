import React from 'react';
import '../styles/skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const technologies = {
    main: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'RSpec',
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'HTML5',
      'CSS',
      'Sass',
      'Webpack',
      'Figma',
    ],
    complementary: ['Redis', 'Sidekiq', 'Firebase', 'HAML'],
    rare: ['Java', 'C++', 'C#'],
  };

  const getTechnologies = (technologies: Array<string>) => {
    return technologies.map((technology) => {
      const logo = require(`../images/technologies/${technology
        .toLowerCase()
        .replace('#', '')}-logo.svg`);

      return (
        <div className='technology' key={technology}>
          <img src={logo} alt={`${technology} icon`} />
          <p>{technology}</p>
        </div>
      );
    });
  };

  return (
    <section id='skills' className='skills-wrapper margin-horizontal-sm'>
      <div className='skills'>
        <h4>{t('skills.part1')}</h4>
        <div className='technologies'>{getTechnologies(technologies.main)}</div>
        <h4 className='margin-top-sm'>{t('skills.part2')}</h4>
        <div className='technologies'>
          {getTechnologies(technologies.complementary)}
        </div>
        <h4 className='margin-top-sm'>{t('skills.part3')}</h4>
        <div className='technologies'>{getTechnologies(technologies.rare)}</div>
      </div>
    </section>
  );
};

export default Skills;
