import React from 'react';
import { ProjectType } from '../constants/types';
// import Arrow from '../images/arrow-icon.svg';

type Props = {
  project: ProjectType;
};

const Project: React.FC<Props> = ({ project }) => {
  const { name, description, cover } = project;

  return (
    <article className='project margin-bottom-lg'>
      <img
        src={cover}
        alt={`${name} cover`}
        className='margin-bottom-sm project-cover'
      />
      <h3>{name}</h3>
      <p>{description}</p>
      {/* <p className='link margin-top-xs'>
        View <img className='arrow' src={Arrow} alt='Arrow icon' />
      </p> */}
    </article>
  );
};

export default Project;
