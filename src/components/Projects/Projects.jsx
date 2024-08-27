import React, {useRef} from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const scrollContainer = useRef(null)

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -0.9 * window.innerWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 0.9 * window.innerWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <h4>*  indicates an academic research project</h4>
      <h4>** indicates a published academic research project with a valid DOI</h4>
      <div className={styles.scrollWrapper}>
        <button className={styles.scrollButton} onClick={scrollLeft}>←</button>
        <div className={styles.projects} ref={scrollContainer}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>→</button>
      </div>
    </section>
  );
};