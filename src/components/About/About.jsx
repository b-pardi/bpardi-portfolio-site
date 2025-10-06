import React from 'react'
import { getImageUrl } from "../../utils.js"
import styles from "./About.module.css"

import research_resume from '../../../assets/misc/BrandonPardi-Resume-GSR.pdf'
import industry_resume from '../../../assets/misc/BrandonPardi-Resume-Industry.pdf'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/education.png")} alt="Big data icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                Computer Science Ph.D. student at University of California, Davis, involved in multiple projects across several domains, all with a machine learning emphasis. B.S. in Computer Science and Engineering from UC Merced, receiving the Outstanding Student Award Fall 2023, and fellowships from NSF, CITRIS, and the US Census Bureau.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ml_brain.png")} alt="Big data icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science & Machine Learning</h3>
              <p>
                I've designed numerous Pytorch model architectures for various domain applications, created tools for data analysis and visualization, and even crafted my own networks from scratch!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/languages.png")} alt="Languages icon" />
            <div className={styles.aboutItemText}>
              <h3>Languages</h3>
              <p>
                Advanced understanding of Python and many of its libraries, as well as a solid grasp of various other languages like SQL, C/C++, and web dev languages like HTML, CSS, and JS/JSX.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/domain_expertise.png")} alt="Domains icon" />
            <div className={styles.aboutItemText}>
              <h3>Domain Expertise</h3>
              <p>
                Experience in several domains, applying my computer science skills to areas such as biophysics, high energy physics, climatology, statistics, surface sciences, cell mechanics, educational technology, and general software development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/soft_skills.png")} alt="Soft skills icon" />
            <div className={styles.aboutItemText}>
              <h3>Soft Skills</h3>
              <p>
                Along with my programming abilities, I have also developed a strong set of soft skills. I am incredibly self-motivated and independent, but also work well leading or as a member of a team, and can easily adapt to new environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/pdf.png")} alt="Soft skills icon" />
            <div className={styles.aboutItemText}>
              <h3>Curriculum Vitae</h3>
              <div className={styles.pdfLinks}>
                <a href={research_resume} target="_blank" rel="noopener noreferrer">Research oriented CV</a>
                <a href={industry_resume} target="_blank" rel="noopener noreferrer">Industry oriented CV</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};