import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import TooltipImg from "../TooltipImg/TooltipImg";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const isImage = (this.props.isImage && experience.logo_path!=='') ? this.props.isImage : false;
    const borderPixel = this.props.borderPixel;
    return (
      <div
        className="experience-card"
        style={{ border: `${borderPixel} solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          {isImage && (
            <TooltipImg
              title={experience.company}
              url={experience.company_url}
              imgPath={experience.logo_path}
            />
          )}
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          {experience["descriptions"].map((sentence) => {
            return (
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
                key={sentence}
              >
                {sentence}
              </p>
            );
          })}
          <Fade right duration={1500}>
            <SoftwareSkill logos={experience.skills} />
          </Fade>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
