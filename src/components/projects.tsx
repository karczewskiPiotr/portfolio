import React from 'react';
import '../styles/projects.css';
import { useTranslation } from 'react-i18next';
import Arrow from '../images/arrow-icon.svg';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='projects-wrapper margin-horizontal-sm'>
      <div className='projects'>
        <h2 className='margin-bottom-md'>{t('work')}</h2>
        <div className='project'>
          <img
            src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122607209/original/532a93b6d0c5238d64a55c61f61dc8f895636616/do-material-ui-design-for-web-app.jpg'
            alt='projct'
            className='margin-bottom-sm project-cover'
          />
          <h3>Project</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            dolore soluta eius molestiae cumque tempora id sint minima natus
            quisquam, corporis maxime inventore explicabo commodi corrupti?
            Saepe sit voluptates corrupti?
          </p>
          <p className='link margin-top-xs'>
            View <img className="arrow" src={Arrow} alt='Arrow icon' />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
