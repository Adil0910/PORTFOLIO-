import React from 'react'
import  project  from '../data/project';
import { FaExternalLinkAlt } from "react-icons/fa";
function MyProject() {
  return (
    <section className="page page2">
          <div className="projects-page">
      <h2 className="heading-home-wroks">My Works</h2>

      <div className="project-container">
        {project.slice(0,6).map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} className="project-img" />

            <h3 className="project-header-new">{p.title}</h3>

            <div className="tech-list">
              {p.tech.map((t, i) => (
                <span className="tech" key={i}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" className="project-btn">
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </div>
        </section>
  )
}

export default MyProject;