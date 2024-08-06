import React from 'react'
import {getImageUrl} from "../../utils.js"
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
                    Earned a B.S. in Computer Science and Engineering from University of California, Merced in Fall 2023 with a 3.95 GPA while on multiple research teams. I was also an NSF-CREST fellow, a United States Census Bureau fellow, and was 1 of 2 to achieve the Outstanding Student award for Computer Science that semester.
                  </p>
                  <p>Currently an M.S. student at University of California Davis, furthering my education in Computer Science.</p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/ml_brain.png")} alt="Big data icon" />
                <div className={styles.aboutItemText}>
                  <h3>Data Science & Machine Learning</h3>
                  <p>
                    I've made tools for data analysis and visualization, implemented computer vision pipelines, designed my own network architectures with Pytorch and Tensorflow, and even crafted my own networks from scratch!
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
                    Experience in several domains, applying my computer science skills to areas such as biophysics, cardiology, surface sciences, cell mechanics, audio, educational technology, and just general software development.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/soft_skills.png")} alt="Soft skills icon" />
                <div className={styles.aboutItemText}>
                  <h3>Soft Skills</h3>
                  <p>
                    Along with my programming abilities, I have also developed a strong set of soft skills. I am incredibly self-motivated and independent, but also work well leading or as a member of a team and can adapt to many environments.
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