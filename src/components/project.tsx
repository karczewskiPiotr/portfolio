import React from 'react';
import Arrow from '../images/arrow-icon.svg';
import { ProjectType } from '../constants/types';

type Props = {
  project: ProjectType;
};

const Project: React.FC<Props> = ({ project }) => {
  const { name, description, cover } = project;

  return (
    <div className='project margin-bottom-lg'>
      <img
        src={cover}
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
