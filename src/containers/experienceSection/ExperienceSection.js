import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceSection.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProjectAccordion from "../projectAccordion/ProjectAccordion";
import { Fade } from "react-reveal";

class ExperienceSection extends Component {
  render() {
    const theme = this.props.theme;
    const isTimeline = this.props.timeline ? this.props.timeline : false;
    const sections = this.props.sections;
    return (
      <div>
        {sections.map((section, sectionIndex) => {
          return (
            <div className="main" key={section["title"] + sectionIndex}>
              <div className="educations-header-div">
                <Fade bottom duration={2000} distance="20px">
                  <h1
                    className="educations-header"
                    style={{ color: theme.text }}
                  >
                    {section["title"]}
                  </h1>
                </Fade>
              </div>
              <div className="educations-body-div">
                {isTimeline && (
                  <VerticalTimeline>
                    {section["experiences"].map((experience) => {
                      return (
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work vertical-timeline-width"
                          contentStyle={{
                            background: "rgb(255,255,255)",
                            color: "#fff",
                          }}
                          contentArrowStyle={{
                            borderRight: "55px solid  rgb(33, 150, 243)",
                          }}
                          date="2011 - present"
                          icon={
                            <img
                              className="experience-card-logo"
                              src={require(`../../assests/images/${experience["logo_path"]}`)}
                              alt=""
                            />
                          }
                          iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                          }}
                        >
                          <ExperienceCard
                            experience={experience}
                            theme={theme}
                            isImage={false}
                            borderPixel={"0px"}
                          />
                          {experience.projects &&
                            experience.projects.length > 0 && (
                              <ProjectAccordion
                                theme={theme}
                                projects={experience.projects}
                                marginLeft={"24px"}
                              />
                            )}
                        </VerticalTimelineElement>
                      );
                    })}
                  </VerticalTimeline>
                )}
                {!isTimeline &&
                  section["experiences"].map((experience, index) => {
                    return (
                      <div key={experience.title + index}>
                        <ExperienceCard
                          experience={experience}
                          theme={theme}
                          isImage={true}
                          borderPixel={"0px"}
                        />
                        {experience.projects &&
                          experience.projects.length > 0 && (
                            <ProjectAccordion
                              theme={theme}
                              projects={experience.projects}
                            />
                          )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceSection;
