import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const LandingSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 text-slate-950 dark:bg-slate-950 dark:text-white md:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-12 md:min-h-[720px] md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Software for hard product problems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            AI agents, commerce, booking systems, and operational tools built end to end.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contactme"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-600 active:translate-y-px"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 text-sm font-semibold text-slate-950 transition hover:border-blue-700 hover:text-blue-700 active:translate-y-px dark:border-white/20 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              View work
              <ArrowDownRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.8)] dark:border-white/10 dark:bg-white/5">
            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[280px] bg-slate-900 sm:min-h-[420px]">
                <img
                  src="/ProfilePic.jpeg"
                  alt="Luis Caceres"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex min-h-[300px] flex-col justify-between bg-slate-950 p-6 text-white sm:min-h-[420px]">
                <div>
                  <p className="text-sm font-medium text-blue-300">Luis Caceres</p>
                  <p className="mt-3 max-w-[18rem] text-2xl font-semibold tracking-tight">
                    Senior full-stack engineer focused on shipping real product systems.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="rounded-md border border-white/10 p-3">
                    AI agents, commerce, bookings, dashboards
                  </div>
                  <div className="rounded-md border border-white/10 p-3">
                    React, Next.js, Supabase, Postgres, Vercel
                  </div>
                  <a
                    href="https://github.com/luiscaceresd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200"
                  >
                    GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection; 
