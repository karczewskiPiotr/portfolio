import React from 'react';
import '../styles/projects.css';
import { useTranslation } from 'react-i18next';
import Project from './project';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import { ProjectType } from '../constants/types';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectsRef = useFirestore().collection('locales/en/projects');
  const projectsData = useFirestoreCollectionData(projectsRef);

  return (
    <section className='projects-wrapper margin-horizontal-sm'>
      <div className='projects'>
        <h2 className='margin-bottom-md'>{t('work')}</h2>
        {projectsData.map((item) => {
          const project = item as ProjectType;
          return <Project key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
