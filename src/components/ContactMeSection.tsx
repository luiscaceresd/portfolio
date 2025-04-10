import React from "react";
import ContactForm from "./ContactForm";
import { Mail } from "lucide-react";

function ContactMeSection() {
  return (
    <section id="contactme" className="w-full relative py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center
                      bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
      
      <div className="relative w-full max-w-4xl px-6 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-blue-100/80 dark:bg-blue-900/30">
            <Mail className="size-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold text-slate-800 dark:text-blue-100">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Form container with shadow */}
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl dark:shadow-blue-900/10">
          <ContactForm />
        </div>

        {/* Additional contact info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Prefer email? Contact me directly at <a href="mailto:luisdeveloper97@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">luisdeveloper97@outlook.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
