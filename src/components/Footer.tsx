import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm">© {currentYear} Luis Caceres. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-blue-700 dark:hover:text-blue-300">Work</a>
          <a href="#contactme" className="hover:text-blue-700 dark:hover:text-blue-300">Contact</a>
          <a href="/resume.pdf" download="Luis_Caceres_Resume.pdf" className="hover:text-blue-700 dark:hover:text-blue-300">Resume</a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/luiscaceresd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 hover:text-blue-700 dark:hover:bg-white/10 dark:hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/luiscaceresd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 hover:text-blue-700 dark:hover:bg-white/10 dark:hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:luiscaceresd97@gmail.com"
            aria-label="Email"
            className="flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 hover:text-blue-700 dark:hover:bg-white/10 dark:hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
