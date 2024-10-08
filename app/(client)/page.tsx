import React from "react";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import ProjectsSection from "./_components/ProjectsSection";
import TestimonialSection from "./_components/TestimonialSection";
import CTASection from "./_components/CTASection";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default page;
