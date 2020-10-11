import React from 'react';
import Arrow from '../images/arrow-icon.svg';

type Props = {
  project: {
    name: string;
    description: string;
    cover?: string;
  };
};

const Project: React.FC<Props> = ({ project }) => {
  const { name, description, cover } = project;

  return (
    <div className='project'>
      <img
        src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122607209/original/532a93b6d0c5238d64a55c61f61dc8f895636616/do-material-ui-design-for-web-app.jpg'
        alt={`${name} cover`}
        className='margin-bottom-sm project-cover'
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className='link margin-top-xs'>
        View <img className='arrow' src={Arrow} alt='Arrow icon' />
      </p>
    </div>
  );
};

export default Project;
