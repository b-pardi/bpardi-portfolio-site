import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl, getProjectLinkType, getProjectSourceLink } from "../../utils";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills } = project;
  const { type: linkType, href: linkHref } = getProjectLinkType(project);
  const { type: sourceType, href: sourceHref } = getProjectSourceLink(project);

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <h2>Key Skills:</h2>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={linkHref} className={styles.link} target="_blank" rel="noopener noreferrer">
          {linkType}
        </a>
        <a href={sourceHref} className={styles.link} target="_blank" rel="noopener noreferrer">
          {sourceType}
        </a>
      </div>
    </div>
  );
};