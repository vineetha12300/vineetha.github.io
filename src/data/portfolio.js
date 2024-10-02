/* Change this file to get your personal Porfolio */

// Website related settings
const { skills, experience } = require("./experience");
const { certifications } = require("./certification");
const {
  socialMediaLinks,
  seo,
  greeting,
  contactPageData,
} = require("./personalDetails");

const {
  projectsHeader,
  degrees,
  competitiveSites,
} = require("./qualification");
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
