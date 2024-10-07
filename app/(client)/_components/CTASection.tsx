import React from "react";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import ContactForm from "@/components/ContactForm/ContactForm";

const CTASection = () => {
  return (
    <section className="pb-[140px]">
      <div className="container">
        <SectionHeading
          title="Lets Design Together"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          className="text-center mb-12"
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default CTASection;
