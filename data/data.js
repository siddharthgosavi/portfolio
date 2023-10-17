import SkillImg1 from "../assets/img/HTML.png";
import SkillImg2 from "../assets/img/CSS.png";
import SkillImg3 from "../assets/img/JavaScript.png";
import SkillImg4 from "../assets/img/react.png";
import SkillImg5 from "../assets/img/next-js.svg";
import SkillImg6 from "../assets/img/TypeScript.png";
import SkillImg7 from "../assets/img/Git.png";
import SkillImg8 from "../assets/img/creativecloud.png";
import ProjectImage1 from "../assets/img/projects/loopstudios-black.png";
import ProjectImage2 from "../assets/img/projects/devSpace-black.png";
import ProjectImage3 from "../assets/img/projects/shortly-black.png";
import ProjectImage4 from "../assets/img/projects/djEvents-black.png";
import ProjectImage5 from "../assets/img/projects/portfolio.png";
import { FaLinkedin, FaDev } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home"
  },
  {
    name: "About",
    href: "about"
  },
  {
    name: "Skills",
    href: "skills"
  },
  {
    name: "Projects",
    href: "projects"
  },
  // {
  //   name: "Blogs",
  //   href: "blogs"
  // },
  {
    name: "Contact",
    href: "contact"
  }
];

// social media
export const social = [
  {
    icon: <FaLinkedin className="text-white" />,
    href: "https://linkedin.com/in/siddharthgosavi/",
    color: "text-sky-500",
    ariaLabel: "LinkedIn"
  },
  {
    icon: <FiGithub className="text-white" />,
    href: "https://github.com/siddharthgosavi",
    color: "text-white",
    ariaLabel: "Github"
  },
  {
    icon: <FaDev className="text-white" />,
    href: "https://dev.to/siddharthgosavi",
    color: "text-blue-500",
    ariaLabel: "Dev.To"
  }
];

// about me
export const aboutMe = [
  {
    description: "Hi there! my name is Siddharth Gosavi, I am a Full-stack Developer | Technical Team Lead at Cognizant, where I have been working on various requirements of a medical healthcare insurance clearing house application since April 2021. I have extensive experience in developing websites using ReactJs, NextJs, Nodejs, Express, MySQL, and REST APIs, as well as PHP projects. I also have a strong background in cloud computing, IoT, and PowerShell scripting, which I gained from my previous internships at Unisys India."
  },
  {
    description: "I hold a Master of Technology degree with a Gold Medal in Computer Science and Engineering from REVA University, where I published a paper on a secure OTP generation method using Springer. I am proficient in a wide range of programming utilities and languages, such as Java, Python, PHP, SQL, Flask, Git, Linux, Azure Portal, Azure DevOps, and Visual Studio Code. I am a collaborative team player with excellent technical abilities, leadership and management skills, communication and negotiation skills, and problem-solving skills. I am passionate about learning new technologies and delivering quality solutions that meet the needs and expectations of the clients."
  },
  {
    description: "Here are a few technologies I’ve been working with recently:"
  }
];

// skills
export const skills = [{ name: "ReactJs" }, { name: "NextJs" }, { name: "NodeJs" }, { name: "ExpressJs" }, { name: "Redux" }, { name: "Java" }, { name: "Python" }, { name: "PHP" }, { name: "HTML/CSS/JavaScript" }, { name: "TypeScript" }, { name: "TailWindCSS" }, { name: "MongoDb" }, { name: "SQL" }, { name: "Flask" }, { name: "Git" }, { name: "Linux" }, { name: "Azure Portal" }, { name: "RestAPIs" }, { name: "Azure DevOps" }, { name: "VSCode" }];

// skills image
export const skillImages = [
  {
    image: SkillImg1
  },
  {
    image: SkillImg2
  },
  {
    image: SkillImg3
  },
  {
    image: SkillImg4
  },
  {
    image: SkillImg5
  },
  {
    image: SkillImg6
  },
  {
    image: SkillImg7
  },
  {
    image: SkillImg8
  }
];

// project details
export const projects = [
  {
    image: ProjectImage1,
    name: "LoopStudios",
    description: "This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle.",
    tags: ["JavaScript", "HTML", "TailwindCSS", "", "CSS"],
    frontend: "https://github.com/siddharthgosavi/TailwindCSS/tree/main/all-projects/Landing-Pages/loopstudios",
    backend: "",
    live: "https://loopstudios-khaki-alpha.vercel.app/",
    video: "",
    repo: "https://github.com/siddharthgosavi/TailwindCSS/tree/main/all-projects/Landing-Pages/"
  },
  {
    image: ProjectImage5,
    name: "Portfolio Website Version 1.0",
    description: "This is my new portfolio website. Built with React, NextJs and Tailwind CSS.",
    tags: ["React", "Redux", "NextJs", "PostgreSQL", "JWT", "HTML", "CSS", "TailwindCSS"],
    frontend: "https://github.com/siddharthgosavi/portfolio",
    backend: "",
    live: "https://addme/",
    video: "",
    repo: "https://github.com/siddharthgosavi/portfolio"
  },
  {
    image: ProjectImage2,
    name: "DevSpace",
    description: "Static Next.js blog that uses Markdown for posts and Tailwind CSS. Includes pagination, categories and search.",
    tags: ["React", "Redux", "NextJs", "PostgreSQL", "JWT", "HTML", "CSS", "TailwindCSS", "MarkDown", "Husky"],
    frontend: "https://github.com/siddharthgosavi/NextJsDevSpaceBlog",
    backend: "https://github.com/siddharthgosavi/NextJsDevSpaceBlog",
    live: "https://next-js-dev-space-blog-gules.vercel.app/",
    video: "",
    repo: ""
  },
  {
    image: ProjectImage3,
    name: "Shortly",
    description: "Landing Page for shorten links using HTML/CSS/JavaScript and TailWindCSS.",
    tags: ["JavaScript", "HTML", "TailwindCSS", "", "CSS"],
    frontend: "github.com/siddharthgosavi/TailwindCSS/tree/main/all-projects/Landing-Pages/shortly",
    backend: "",
    live: "",
    video: "",
    repo: "github.com/siddharthgosavi/TailwindCSS/tree/main/all-projects/Landing-Pages/shortly"
  },
  {
    image: ProjectImage4,
    name: "DjEvents",
    description: "Next.js website for DJ Events. This site uses Strapi as a backend. The repo for that is below.",
    tags: ["React", "Redux", "NextJs", "Strapi", "JWT", "HTML", "CSS"],
    frontend: "https://github.com/siddharthgosavi/dj-events-frontend",
    backend: "https://github.com/siddharthgosavi/dj-events-backend",
    live: "https://djeventsfrontend.vercel.app/",
    video: "",
    repo: "github.com/siddharthgosavi/dj-events-backend"
  }
];
