import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// Removed baseui/accordion due to compatibility issues
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "react-vertical-timeline-component/style.min.css";
import ProjectAccordion from "../projectAccordion/ProjectAccordion";

import React, { useState } from "react";

const ExperienceAccordion = (props) => {
  const theme = props.theme;
  const isTimeline = props.timeline ? props.timeline : false;
  const [openIndex, setOpenIndex] = useState(null);

  const togglePanel = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="experience-accord">
      {props.sections.map((section, idx) => (
        <div className="accord-panel" key={section["title"]}>
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
            {section["title"]}
          </div>
          {openIndex === idx && (
            <div
              className="panel-content"
              style={{ padding: "10px", background: theme.body }}
            >
              {isTimeline ? (
                <Timeline animate={true} lineColor={theme.dark}>
                  {section["experiences"].map((experience) => (
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
                  ))}
                </Timeline>
              ) : (
                section["experiences"].map((experience) => (
                  <div key={experience.title}>
                    <ExperienceCard
                      experience={experience}
                      theme={theme}
                      isImage={true}
                      borderPixel={"0px"}
                    />
                    {experience.projects && experience.projects.length > 0 && (
                      <ProjectAccordion
                        theme={theme}
                        projects={experience.projects}
                      />
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceAccordion;
