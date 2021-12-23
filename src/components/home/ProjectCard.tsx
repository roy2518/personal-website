import React from 'react';

import GithubLogo from 'assets/GithubLogo.png';

import styles from 'styles/home/ProjectCard.module.scss';

interface ProjectCardProps {
    description: React.ReactNode,
    githubLink: string,
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
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt={`Github link for ${title}`}
            className={styles.githubIcon}
            src={GithubLogo}
          />
        </a>
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
