const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactParita.jpg",
    description:
      "I am a Senior Software Developer with over 6 years of experience specializing in building scalable and user-centric applications. I'm open to opportunities in Frontend, Backend, and Full-Stack Development. Feel free to reach out to discuss new opportunities.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Toronto, Ontario, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/RpybcLwoKGA8x9W6A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 548-398-3001",
    href: "tel:+15483983001",
  },
};

const seo = {
  title: "Parita's Portfolio",
  description:
    "Senior Software Developer with over 6 years of experience in building scalable and user-centric applications using technologies like Angular, React, and Node.js.",
  og: {
    title: "Parita Akoliya Portfolio",
    type: "website",
    url: "http://ParitaAkoliya.com/",
  },
};

// Home Page
const greeting = {
  title: "Parita Akoliya",
  logo_name: "Parita Akoliya",
  nickname: "",
  subTitle:
  "A passionate Senior Software Developer thriving to bridge the gap between humans and technology through scalable and high-performance applications.",
  resumeLink:
    "https://drive.google.com/file/d/1F-bPxsaz5zqtrx0w-flxW-hYiPsNL8EO/view?usp=drive_link",
  portfolio_repository: "https://github.com/ParitaAkoliya/personalPortfolio",
  mailTo: "mailto:akoliya.parita@gmail.com",
};

const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/parita-akoliya",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/parita-akoliya",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:akoliya.parita@gmail.com",
    brand: false,
    fontAwesomeIcon: "fa-solid fa-envelope",
    backgroundColor: "#D14836",
  }
];

export { contactPageData, greeting, seo, socialMediaLinks };
