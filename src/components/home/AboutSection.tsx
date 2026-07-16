import styles from 'styles/home/AboutSection.module.scss';

import email from 'assets/email.svg';
import github from 'assets/GithubLogo.png';
import headshot from 'assets/headshot.jpg';
import linkedin from 'assets/linkedin_icon.svg';

const AboutSection = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.aboutSection}>
      <div>
        <span>Hi! I&apos;m</span>
        <h2 className={styles.name}>Roy Xiong</h2>
        <p>
          I am currently a software engineer at Two Sigma. I have also worked at
          Duolingo and Amazon. I graduated from Duke University (&apos;22) with a major
          in Computer Science and minor in Music.
        </p>
        <p>
          In my free time, I like playing piano, basketball, tennis, and cooking. I am
          always on the lookout for new delicious recipes!
        </p>
      </div>
      <div>
        <img
          alt="Roy's Headshot"
          className={styles.headshot}
          src={headshot}
        />
      </div>
    </div>
    <div
      className={styles.links}
    >
      <a
        href="https://github.com/roy2518"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="Github Link"
          className={styles.icon}
          src={github}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/roylxiong/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="LinkedInLink"
          className={styles.icon}
          src={linkedin}
        />
      </a>
      <a
        href="mailto:roy.xiong.1@gmail.com"
      >
        <img
          alt="Email Link"
          className={styles.icon}
          src={email}
        />
      </a>
    </div>
  </div>
);

export default AboutSection;
