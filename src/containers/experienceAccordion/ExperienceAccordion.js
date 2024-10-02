import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "react-vertical-timeline-component/style.min.css";
import ProjectAccordion from "../projectAccordion/ProjectAccordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const isTimeline = this.props.timeline ? this.props.timeline : false;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {isTimeline && (
                  <Timeline animate={true} lineColor={theme.dark}>
                    {section["experiences"].map((experience) => {
                      return (
                        <TimelineItem
                          dateText={experience.duration}
                          dateInnerStyle={{ background: theme.text }}
                          key={experience.title}
                        >
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
                                marginLeft={"24px"}
                              />
                            )}
                        </TimelineItem>
                      );
                    })}
                  </Timeline>
                )}
                {!isTimeline &&
                  section["experiences"].map((experience) => {
                    return (
                      <div key={experience.title}>
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
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
