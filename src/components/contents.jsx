import image from "./images/pricelessit.png";
import movies from "./images/moviedb.png";
import oyawi from "./images/oyawiorgs.png";
import chatcord from "./images/chatcord.png";
import ipadress from "./images/ipaddress.png";
import estaltech from "./images/estaltech.png";
import meety from "./images/meety.png";
import strapi from "./images/strapi.png";

// links import
import {
  FaEnvelope,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaCode,
} from "react-icons/fa";

const FullstackContent = [
  {
    content: "Building responsive Single-Page-Apps (SPA) & PWA in React.js",
  },
  {
    content: "Building SSR websites with Next.js",
  },
  {
    content: "Building responsive static websites using Next.js",
  },
  {
    content: "Building RESTful APIs in Nodejs",
  },
  {
    content: "Building beautifull wordpress websites in PHP",
  },
];

const Mobiledevelopment = [
  {
    content: "Building crossplatform applications in flutter and dart",
  },
  {
    content: "Building native android applications in kotlin and java",
  },
  {
    content: "Designing mobile applications UI using adobe XD",
  },
  {
    content: "Intergrating android and web application with firebase",
  },
];

const CloudContent = [
  {
    content: "Experience of working on multiple cloud platforms",
  },
  {
    content:
      "Hosting and maintaining websites on virtual machine instances along with integration of databases",
  },
  {
    content:
      "Building CI/CD pipelines for automated testing & deployment using Github Actions and Heroku",
  },
];

const Experiences = [
  {
    company: "Kindlegate Foundation(Volunteer)",
    image: image,
    position: "Frontend Developer",
    dates: "April 2024 - Date",
    description:
      "Develop and maintain web applications using React.js, TailwindCSS, and other modern Frontend Frameworks to create dynamic and responsive user interfaces.",
  },
  {
    company: "Edline Technologies Limited",
    image: image,
    position: "Frontend Engineer",
    dates: "September 2022 - Date",
    description:
      "I Developed and maintained web applications using React.js to create dynamic and responsive user interfaces.",
  },
  {
    company: "Nebulous Solutions Limited",
    image: image,
    position: "Software Engineer",
    dates: "April 2022 - August 2022",
    description:
      "As E-commerce Manager at Nebulous Solutions, I developed a responsive e-commerce platform using modern web technologies, optimized user experience through A/B testing (15% conversion increase), and implemented SEO strategies to boost traffic and revenue by 25%.",
  },
  {
    company: "Priceless IT solutions",
    image: image,
    position: "Frontend Developer",
    dates: "August 2021 - March 2022 ",
    description:
      "I worked as frontend web developer to design web based admin dashboards for mulitple apps using React, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
];

const PersonalProjects = [
  {
    name: "Movies Db",
    images: movies,
    description: "A movie listing app made with Reactjs and tmdb api.",
    link: "https://allanmovies.vercel.app/",
  },
  {
    name: "Shopit",
    images: strapi,
    description:
      "An Ecommerce website built using Strapi and NextJs and GraphQl",
    link: "https://github.com/Allan-1/shopit",
  },
  {
    name: "Meety",
    images: meety,
    description:
      "A google clone app made with webrtc and socket.io to video call.",
    link: "https://github.com/Allan-1/Google-meet-clone",
  },
  {
    name: "EstalTech",
    images: estaltech,
    description:
      "An ecommerce store to sell elecronics built using php and wordpress",
    link: "https://estaltech.com/",
  },
  {
    name: "Oyawi Organization",
    images: oyawi,
    description:
      "A non-governmental organization website built with wordpress and php",
    link: "https://oyawi.org/",
  },
  {
    name: "Ip Adress Tracker",
    images: ipadress,
    description: "It tracks the location and isp of an ip adress",
    link: "https://allanipadress.vercel.app",
  },
  {
    name: "Chatcord",
    images: chatcord,
    description: "A chatting room created using websockets and javascript",
    link: "https://allanchat.herokuapp.com",
  },
];

const Links = [
  {
    icons: FaCode,
    url: "/codes",
    name: "codes",
  },
  {
    icons: FaEnvelope,
    url: "mailto:omorodion.fortune@gmail.com",
    name: "mail",
  },
  {
    icons: FaInstagram,
    url: "https://www.instagram.com/amazing4tune/",
    name: "Instagram",
  },
  {
    icons: FaGithubSquare,
    url: "https://github.com/fortzy05",
    name: "Github",
  },
  {
    icons: FaLinkedin,
    url: "https://www.linkedin.com/in/fortune-omorodion/",
    name: "Linkedin",
  },
  {
    icons: FaTwitterSquare,
    url: "https://twitter.com/OmoFortunes",
    name: "Twitter",
  },
  {
    icons: FaMedium,
    url: "https://medium.com/@fortzy05",
    name: "Medium",
  },
];

export {
  FullstackContent,
  Mobiledevelopment,
  CloudContent,
  Experiences,
  PersonalProjects,
  Links,
};
