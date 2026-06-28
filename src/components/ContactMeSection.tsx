import ContactForm from "./ContactForm";
import { Mail, MapPin } from "lucide-react";

function ContactMeSection() {
  return (
    <section id="contactme" className="scroll-mt-24 bg-white py-20 text-slate-950 dark:bg-slate-950 dark:text-white md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build something useful.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
            Send the shape of the project, the pressure points, and what needs to be true when it ships.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="mailto:luiscaceresd97@gmail.com"
              className="flex items-center gap-3 transition hover:text-blue-300"
            >
              <Mail className="size-5 text-blue-700 dark:text-blue-300" />
              luiscaceresd97@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-blue-700 dark:text-blue-300" />
              Remote product engineering
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMeSection;
