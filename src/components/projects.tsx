import React from 'react';
import '../styles/projects.css';
import { useTranslation } from 'react-i18next';
import Project from './project';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const project = {
    name: 'Alertd',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque culpa, architecto fugiat impedit soluta commodi amet beatae harum eligendi quia dolores, distinctio dolorem! Ea placeat debitis culpa delectus est!',
  };

  return (
    <section className='projects-wrapper margin-horizontal-sm'>
      <div className='projects'>
        <h2 className='margin-bottom-md'>{t('work')}</h2>
        <Project project={project} />
      </div>
    </section>
  );
};

export default Projects;
