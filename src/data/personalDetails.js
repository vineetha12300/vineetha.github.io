const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactvineetha.jpg",
    description:
      "I am a Senior Software Developer with over 5 years of experience specializing in building scalable and user-centric applications. I'm open to opportunities in Frontend, Backend, and Full-Stack Development. Feel free to reach out to discuss new opportunities.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Toronto, Ontario, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/RpybcLwoKGA8x9W6A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 519-721-9561",
    href: "tel:+15483983001",
  },
};

const seo = {
  title: "Vineetha's Portfolio",
  description:
    "Senior Software Developer with over 5 years of experience in building scalable and user-centric applications using technologies like Angular, React, and Node.js.",
  og: {
    title: "vineetha  Portfolio",
    type: "website",
    url: "http://vineetha.com/",
  },
};

// Home Page
const greeting = {
  title: "Vineetha ",
  logo_name: "Vineetha ",
  nickname: "",
  subTitle:
    "A passionate Full Stack Software Developer thriving to bridge the gap between humans and technology through scalable and high-performance applications.",
  resumeLink:
    "https://drive.google.com/file/d/1Ybhf-_Wii5aB70jTo4HjTqt3sZ-DKfTL/view?usp=sharing",
  portfolio_repository: "https://github.com/vineetha/personalPortfolio",
  mailTo: "mailto:.vineetha12300@gmail.com",
};

const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/vineetha12300",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vineetha12300/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:.vineetha12300@gmail.com",
    brand: false,
    fontAwesomeIcon: "fa-solid fa-envelope",
    backgroundColor: "#D14836",
  },
];

export { contactPageData, greeting, seo, socialMediaLinks };
