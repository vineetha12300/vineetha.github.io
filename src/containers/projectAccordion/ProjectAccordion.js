import "./ProjectAccordion.css";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import React, { useState } from "react";

const ProjectAccordion = ({ theme, projects }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePanel = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="project-accord">
      <h4
        className="experience-card-title"
        style={{ color: theme.text, marginBottom: "10px" }}
      >
        Projects
        <br />
      </h4>
      {projects.map((project, idx) => (
        <div className="accord-panel" key={project.title}>
          <div
            className="panel-title"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: theme.text,
              background: openIndex === idx ? theme.accent : "transparent",
              padding: "10px",
              border: "1px solid #eee",
            }}
            onClick={() => togglePanel(idx)}
          >
            {project.title}
          </div>
          {openIndex === idx && (
            <div
              className="panel-content"
              style={{ padding: "10px", background: theme.body }}
            >
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                <b>Overview: </b>
                {project.overview}
              </p>
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                <b>Tech-Stacks: </b>
                {project.stacks}
              </p>
              {project.responsibilities.map((resp, respIndex) => (
                <p
                  className="experience-card-description"
                  style={{ color: theme.text }}
                  key={resp + respIndex}
                >
                  {resp}
                </p>
              ))}
              <Fade right duration={1500}>
                <SoftwareSkill logos={project.tech} />
              </Fade>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectAccordion;
