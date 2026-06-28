import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contactme" }
];

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:luiscaceresd97@gmail.com",
    label: "Email"
  },
  {
    icon: faGithub,
    url: "https://github.com/luiscaceresd",
    label: "GitHub"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/luiscaceresd/",
    label: "LinkedIn"
  }
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/88 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/84">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        <a href="#" className="flex items-center gap-3 text-slate-950 no-underline dark:text-white">
          <span className="flex size-9 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
            LC
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Luis Caceres
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Luis_Caceres_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:border-blue-700 hover:text-blue-700 dark:border-white/15 dark:text-white dark:hover:border-blue-300 dark:hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="text-xs" />
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {socials.map(({ icon, url, label }) => (
              <a
                key={url}
                href={url}
                target={url.startsWith("mailto:") ? undefined : "_blank"}
                rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-blue-300"
              >
                <FontAwesomeIcon icon={icon} className="text-base" />
              </a>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>

      <nav aria-label="Mobile navigation" className="border-t border-slate-200 px-4 py-2 dark:border-white/10 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 transition hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Luis_Caceres_Resume.pdf"
            className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm font-semibold text-slate-950 dark:border-white/15 dark:text-white"
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="text-xs" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
