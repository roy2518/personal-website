import React from 'react';

import styles from 'styles/home/ProjectCard.module.scss';

interface ProjectCardProps {
    description: string,
    githubLink?: string,
    imageSrc: string,
    liveLink: string,
    skills: string[],
    title: string,
}

const ProjectCard = ({
  description,
  githubLink,
  imageSrc,
  liveLink,
  skills,
  title,
}: ProjectCardProps): JSX.Element => (
  <div className={styles.cardContainer}>
    <a href={liveLink} target="_blank" rel="noreferrer">
      <div className={styles.leftColumn}>
        <div className={styles.cardTitle}>
          {title}
        </div>
        <div>
          {description}
        </div>
        <div className={styles.skills}>
          {skills.join(' · ')}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img
          alt={`Screenshot for ${title}`}
          src={imageSrc}
          width="100%"
        />
      </div>
    </a>
  </div>
);

export default ProjectCard;
