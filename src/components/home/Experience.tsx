import { useState } from 'react';

import styles from 'styles/home/ExperienceSection.module.scss';

import twoSigma from 'assets/two_sigma.png';
import duolingo from 'assets/duolingo.svg';
import amazon from 'assets/amazon.png';

type CompanyInfo = {
  name: string;
  title: string;
  tenure: string;
  description: JSX.Element;
  skills: string[];
};

const companyInfo: Record<string, CompanyInfo> = {
  'Two Sigma': {
    name: 'Two Sigma',
    title: 'Senior Software Engineer',
    tenure: 'July 2026 - Present',
    description: (
      <div>
        <div>
          <a
            href="https://www.twosigma.com/"
            target="_blank"
            rel="noreferrer"
          >
            Two Sigma
          </a>
          {' '}
          is a quantitative hedge fund based in NYC.
        </div>
        <br />
        <div>
          More coming soon! :)
        </div>
      </div>
    ),
    skills: [],
  },
  Duolingo: {
    name: 'Duolingo',
    title: 'Senior Software Engineer',
    tenure: 'May 2021 - June 2026',
    description: (
      <div>
        <div>
          <a
            href="https://www.duolingo.com"
            target="_blank"
            rel="noreferrer"
          >
            Duolingo
          </a>
          {' '}
          is the world&apos;s
          most popular way to learn a language.
        </div>
        <br />
        <div>
          I worked on the localization team as a full stack engineer, enabling Duolingo to
          be available in 27+ (and counting!) UI languages across the world.
          I also worked on backend LLM infrastructure used to create high-quality learning
          content for users across &gt;250 different courses.
        </div>
      </div>
    ),
    skills: ['AWS', 'Apache Airflow', 'Bash', 'SCSS', 'Flask', 'Jenkins', 'Python', 'React/Redux', 'SQL', 'Terraform', 'Typescript', 'ElasticSearch'],
  },
  Amazon: {
    name: 'Amazon',
    title: 'Software Engineer Intern',
    tenure: 'June 2020 - August 2020',
    description: (
      <div>
        <div>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
          {' '}
          is a global e-commerce company, offering customers a wide range of products
          with fast, reliable delivery.
        </div>
        <br />
        <div>
          I worked on building a notifications microservice for the
          EHS (Environment, Health, and Safety) platform.
        </div>
      </div>
    ),
    skills: ['AWS', 'Node.js', 'React/Redux', 'GraphQL'],
  },
};

const skills = [
  'AWS', 'Node.js', 'React/Redux', 'GraphQL', 'ElasticSearch', 'Flask', 'Python',
  'Typescript', 'SCSS', 'Apache Airflow', 'Bash', 'Jenkins', 'SQL', 'Terraform',
].sort();

const Experience = (): JSX.Element => {
  type Company = keyof typeof companyInfo;
  const [company, setCompany] = useState<Company>('Two Sigma');

  return (
    <div className={styles.container}>
      <div className={styles.companies}>
        <img
          alt="Two Sigma"
          className={styles.logo}
          onClick={() => setCompany('Two Sigma')}
          src={twoSigma}
        />
        <img
          alt="Duolingo"
          className={styles.logo}
          onClick={() => setCompany('Duolingo')}
          src={duolingo}
        />
        <img
          alt="Amazon"
          className={styles.logo}
          onClick={() => setCompany('Amazon')}
          src={amazon}
        />
      </div>
      <div className={styles.experience}>
        <div className={styles.companyName}>
          {companyInfo[company].name}
        </div>
        <div className={styles.role}>
          {companyInfo[company].title}
          <br />
          {companyInfo[company].tenure}
        </div>
        <div className={styles.description}>
          {companyInfo[company].description}
        </div>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div className={companyInfo[company as keyof typeof companyInfo].skills.includes(skill)
              ? styles.skillSelected : styles.skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
