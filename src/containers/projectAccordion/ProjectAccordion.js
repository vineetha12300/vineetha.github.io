import React, { Component } from "react";
import "./ProjectAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

class ProjectAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const projects = this.props.projects;
    return (
      <div className="project-accord">
        <h4
          className="experience-card-title"
          style={{ color: theme.text, marginBottom: "10px" }}
        >
          Projects
          <br />
        </h4>
        <Accordion>
          {projects.map((project) => {
            return (
              <Panel
                className="accord-panel"
                title={project.title}
                key={project.title}
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
                {project.responsibilities.map((resp, respIndex) => {
                  return (
                    <p
                      className="experience-card-description"
                      style={{ color: theme.text }}
                      key={resp + respIndex}
                    >
                      {resp}
                    </p>
                  );
                })}
                <Fade right duration={1500}>
                  <SoftwareSkill logos={project.tech} />
                </Fade>
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ProjectAccordion;
