import React from "react";
import Form from "@/components/ContactForm";
import DetailForm from "@/components/DetailPage";
import ContactContaint from "@/components/contact/ContactContaint";

const ContactUs = () => {
  return (
    <div>
      <ContactContaint />
      <div className="flex justify-center items-center ">
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
