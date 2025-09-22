import React from "react";
import "./ContactImg.css";

class ContactImg extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        width={400}
        src={require(`../../assests/images/vineetha.jpg`)}
        alt="Contact"
      />
    );
  }
}

export default ContactImg;
