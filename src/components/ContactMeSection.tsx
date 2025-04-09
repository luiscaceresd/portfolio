import React from "react";
import ContactForm from "./ContactForm";

function ContactMeSection() {
  return (
    <section className="w-full min-h-screen py-16 flex flex-col items-center justify-center 
                        bg-white dark:bg-slate-950">
      <div className="w-full max-w-4xl px-4 py-8 md:py-16 flex flex-col items-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-blue-100 mb-4" 
            id="contactme-section">
          Contact me
        </h1>
        <div className="w-full max-w-3xl px-3 md:px-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
