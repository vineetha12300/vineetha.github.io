import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class TooltipImg extends Component {
  render() {
    const title = this.props.title;
    const url = this.props.url;
    const path = this.props.imgPath;
    return (
      <OverlayTrigger
        key={title}
        placement={"top"}
        style={{ marginBottom: "5px" }}
        overlay={
          <Tooltip id={`tooltip-top`}>
            <strong>{title}</strong>
          </Tooltip>
        }
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${path}`)}
            alt=""
          />
        </a>
      </OverlayTrigger>
    );
  }
}

export default TooltipImg;
