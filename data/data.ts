import UIUX from "@/public/images/ui-ux.png";
import WebDesign from "@/public/images/web-design.png";
import AppDesign from "@/public/images/app-design.png";
import GraphicDesign from "@/public/images/graphics-design.png";
import {
  HeaderLinksType,
  ProjectType,
  ServiceType,
  SkillType,
  SocialLinkType,
  TestimonialType,
} from "@/typescript/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ProjectOne from "@/public/images/projects/project-1.png";
import ProjectTwo from "@/public/images/projects/project-2.png";
import ProjectThree from "@/public/images/projects/project-3.png";

export const headerLinks: HeaderLinksType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "#about-me",
  },
  {
    id: 3,
    name: "Services",
    path: "#services",
  },
  {
    id: 4,
    name: "Projects",
    path: "#projects",
  },
  {
    id: 5,
    name: "Testimonials",
    path: "#testimonials",
  },
  {
    id: 6,
    name: "Contact",
    path: "#contact",
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    id: 1,
    href: "#",
    icon: FaFacebook,
  },
  {
    id: 2,
    href: "#",
    icon: FaTwitter,
  },
  {
    id: 3,
    href: "#",
    icon: FaInstagram,
  },
  {
    id: 4,
    href: "#",
    icon: FaLinkedin,
  },
];

export const skills: SkillType[] = [
  {
    id: 1,
    name: "UX",
    percentage: 90,
  },
  {
    id: 2,
    name: "Website Design",
    percentage: 85,
  },
  {
    id: 3,
    name: "App Design",
    percentage: 95,
  },
  {
    id: 4,
    name: "Graphics Design",
    percentage: 92,
  },
];

export const services: ServiceType[] = [
  {
    id: 1,
    icon: UIUX,
    name: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 2,
    icon: WebDesign,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 3,
    icon: AppDesign,
    name: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 4,
    icon: GraphicDesign,
    name: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    image: ProjectOne,
    name: "AirCalling Landing Page Design",
    tag: "Web Design",
  },
  {
    id: 2,
    image: ProjectTwo,
    name: "Business Landing Page Design",
    tag: "UI/UX",
  },
  {
    id: 3,
    image: ProjectThree,
    name: "Ecom Web Page Design",
    tag: "App Design",
  },
  // {
  //   id: 4,
  //   image: ProjectOne,
  //   name: "Appstack Landing Page Design",
  //   tag: "App Design",
  // },
  // {
  //   id: 5,
  //   image: ProjectTwo,
  //   name: "Smash Logo Design",
  //   tag: "Graphics Design",
  // },
];
