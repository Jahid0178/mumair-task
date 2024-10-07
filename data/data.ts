import UIUX from "@/public/images/ui-ux.png";
import WebDesign from "@/public/images/web-design.png";
import AppDesign from "@/public/images/app-design.png";
import GraphicDesign from "@/public/images/graphics-design.png";
import {
  HeaderLinksType,
  ServiceType,
  SkillType,
  SocialLinkType,
} from "@/typescript/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const headerLinks: HeaderLinksType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "/about-me",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
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
