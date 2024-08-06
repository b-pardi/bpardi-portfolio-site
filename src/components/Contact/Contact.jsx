import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">bmpardi@ucdavis.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/brandon-pardi-650464253" target="_blank" rel="noopener noreferrer">linkedin.com/brandonpardi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/b-pardi" target="_blank" rel="noopener noreferrer">github.com/b-pardi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/orcid.png")} alt="Orcid icon" />
          <a href="https://orcid.org/0000-0001-6483-9858" target="_blank" rel="noopener noreferrer">orcid.org/0000-0001-6483-9858</a>
        </li>
      </ul>
    </footer>
  );
};
