import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaSlack,
  FaJira,
} from "react-icons/fa";
export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact me",
    link: "#contact",
  },
] as const;

import {
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiFigma,
  SiBootstrap,
  SiPostman,
  SiSwagger,
  SiNotion,
  SiTrello,
  SiAsana,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";

export const SKILL_DATA = [
  { skill_name: "React.js", icon: FaReact, color: "#61DAFB" },
  { skill_name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { skill_name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { skill_name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { skill_name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { skill_name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { skill_name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { skill_name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { skill_name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { skill_name: "Material UI", icon: SiMui, color: "#007FFF" },
  { skill_name: "Redux", icon: SiRedux, color: "#764ABC" },
  { skill_name: "React Query", icon: SiReactquery, color: "#FF4154" },
  { skill_name: "3D Animation", icon: MdAnimation, color: "#9c27b0" },
  { skill_name: "Agile / Scrum", icon: SiNotion, color: "#fff" },

  // 🛠️ Tools
  { skill_name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
  { skill_name: "GitHub", icon: FaGithub, color: "#fff" },
  { skill_name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { skill_name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
  { skill_name: "Slack", icon: FaSlack, color: "#E10098" },
  { skill_name: "Notion", icon: SiNotion, color: "#fff" },
  { skill_name: "Trello", icon: SiTrello, color: "#0052CC" },
  { skill_name: "Jira", icon: FaJira, color: "#0052CC" },
  { skill_name: "Asana", icon: SiAsana, color: "#F06A6A" },


  // ⚛️ Frameworks & Libraries

  { skill_name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { skill_name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { skill_name: "Docker", icon: SiDocker, color: "#2496ED" },
  { skill_name: "GraphQL", icon: SiGraphql, color: "#E10098" },
] as const;
type ProjectCardProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  skills?: string[]; 
  tools?: string[];  
};

export const PROJECTS: ProjectCardProps[] = [
  {
    title: "Mini Code Leader",
    description:
      "An engaging educational platform designed to introduce kids to coding through gamified lessons and interactive challenges. I led the front-end development, focusing on scalability, performance, accessibility, and creating an intuitive user experience for young learners.",
    image: "/projects/minicode.png",
    link: "https://www.minicodeleader.com/",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion","Gsap"],
  },
  {
    title: "RAK Government Project",
    description:
      "A digital transformation project automating essential services for Ras Al Khaimah government. I implemented secure, scalable solutions for document management, service requests, and public accessibility, ensuring usability, performance, and compliance with modern standards of e-government systems.",
    image: "/projects/rak.webp",
    link: "https://example.com",
    tools: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Deema – Website",
    description:
      "The public-facing Deema website crafted to attract merchants and customers. I built it with SEO optimization, responsive design, and performance improvements, ensuring seamless integration with Next.js, Tailwind CSS, and deployment workflows on Vercel for stability.",
    image: "/projects/deema-website.png",
    link: "https://deema.me",
    tools: ["Next.js", "Tailwind CSS", "Vercel", "Gsap", "Framer Motion","three.js"],
  },
  {
    title: "Deema – Customer Portal",
    description:
      "A customer-facing platform for Deema’s Buy Now, Pay Later system. I implemented account management, payment tracking, and offers exploration. The portal delivers an intuitive, responsive experience powered by React, Tailwind, Zustand, and React Query for state synchronization.",
    image: "/projects/deema-customer.png",
    link: "https://customer.deema.me/",
    tools: ["React", "Tailwind CSS", "React Query", "zustand","socket"],
  },
  {
    title: "Deema – Payment Portal",
    description:
      "A secure payment gateway designed for customers to complete transactions quickly and reliably. I developed real-time validation, encryption, and intuitive workflows, focusing on performance and user confidence, while leveraging React, Zustand, and React Query effectively.",
    image: "/projects/deema-payment.png",
    link: "https://pay.deema.me",
    tools: ["React", "Tailwind CSS", "React Query", "zustand"],
  },
  {
    title: "Deema – Admin Portal",
    description:
      "A robust admin dashboard enabling the management of users, merchants, and system operations. I built advanced analytics, data visualization, and role-based access features, ensuring a secure and efficient system backed by React, Material UI, Redux, and Chart.js.",
    image: "/projects/admin.png",
    link: "https://qa-new-admin.deema.me/auth/login",
    tools: ["React", "Material UI", "Chart.js", "REST APIs", "Redux"],
  },
  {
    title: "Deema – Merchant Portal",
    description:
      "A dedicated portal for merchants to manage products, view transactions, and integrate BNPL services. I optimized workflows for usability, scalability, and speed, leveraging React, Material UI, REST APIs, Redux, and Chart.js to create a seamless merchant experience.",
    image: "/projects/merchant.png",
    link: "https://qa-new-merchant.deema.me/auth/login",
    tools: ["React", "Material UI", "Chart.js", "REST APIs", "Redux"],
  },
  {
    title: "I Tabib",
    description:
      "A medical consultation application, where you can book a private appointment with doctors in any specialty you need. You can also upload your medical history within your profile and join the appointment with your doctor by text-chatting, audio-calling, or video-calling. Additionally there is a standalone application for doctors, allowing them to enter and attend their appointments, prescribe the appropriate medications for each patient, and follow up with the patient's medical history through the app.",
    image: "/projects/itabib.png",
    link: "https://itabib.darsoft.net/patient-ui/sign-in",
    tools: ["React", "Css", "Sass", "REST APIs", "Redux","socket"],
  },
] as const;
