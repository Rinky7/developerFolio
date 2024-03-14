/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import customSplashAnimation from "./assets/lottie/customSplashAnimation"; // Custom animation tailored to Shreeya's portfolio theme // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2200 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreeya",
  title: "Hi all, I'm Shreeya",
  subTitle: emoji(
    "A passionate Product Manager and Full Stack Developer 🚀 with a knack for enhancing user experiences and streamlining backend processes. Skilled in leveraging Agile methodologies to deliver cutting-edge web and mobile applications, from ideation to launch."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1gWB8jKHws9_dgN2z_VMLJqDE8qfQhXPs/edit?usp=sharing&ouid=115628144120075725407&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "shreeya.rao18@gmail.com",
  display: true
};

/// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "A MULTI-FACETED PRODUCT MANAGER AND DEVELOPER WHO THRIVES ON CHALLENGE AND INNOVATION",
  skills: [
    emoji("⚡ Enhance digital experiences by integrating seamless front and backend functionalities."),
    emoji("⚡ Implement advanced data analysis techniques to drive decision-making and optimizations."),
    emoji("⚡ Lead cross-functional teams to achieve product excellence and operational efficiency.")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Illinois Chicago",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "GPA: 3.7/4. Delved into advanced computer science principles and hands-on project work."
    }
  ]
};



// Work experience section tailored to reflect Shreeya's roles and accomplishments
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Product Manager",
      company: "Cognizant, Chicago",
      date: "January 2023 – Present",
      desc: "Led the enhancement of Medicare Advantage application, improving efficiency and user satisfaction by 25% through integrative solutions."
    },
    {
      role: "Full Stack Software Developer",
      company: "Bectran Inc, Chicago",
      date: "July 2022 – December 2022",
      desc: "Automated RESTful services with Spring-boot, enhancing API reliability, and optimized deployment on AWS with Kubernetes."
    },
    // Additional experiences can be added here
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "SIGNIFICANT PROJECTS THAT MARKED MY JOURNEY",
  projects: [
    {
      projectName: "Telemedicine Platform Development",
      projectDesc: "Spearheaded the development of a telemedicine platform, facilitating over 3 million remote consultations amid COVID-19."
    },
    // More projects can be added here
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc
const certifications = {
  title: "Certifications",
  subtitle: "My Professional Certifications",
  certifications: [
    {
      name: "Certified Product Manager from AIPMM",
      authority: "AIPMM",
      logo: require("./assets/images/aipmmLogo.png"), // Placeholder path, replace with actual logo path
    },
    {
      name: "Scrum Certified Product Owner",
      authority: "Scrum Alliance",
      logo: require("./assets/images/scrumAllianceLogo.png"), // Placeholder path, replace with actual logo path
    },
    {
      name: "PEGA Certified System Architect",
      authority: "PEGA",
      logo: require("./assets/images/pegaLogo.png"), // Placeholder path, replace with actual logo path
    },
    {
      name: "PEGA Certified Senior System Architect",
      authority: "PEGA",
      logo: require("./assets/images/pegaLogo.png"), // Placeholder path, replace with actual logo path
    },
    {
      name: "Risk Management Certification",
      authority: "Project Management Institute",
      logo: require("./assets/images/pmiLogo.png"), // Placeholder path, replace with actual logo path
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+14754393898",
  email_address: "shreeya.rao18@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  bigProjects,
  certifications,
  // Other sections can be added or modified as needed
};
