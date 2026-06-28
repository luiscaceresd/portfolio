import { Boxes, BrainCircuit, Code2, ShieldCheck, UsersRound } from 'lucide-react';
import './SkillsBanner.css';

const capabilities = [
  {
    icon: Code2,
    title: "Full-stack engineering",
    body: "TypeScript, React, Next.js, APIs, Postgres, Supabase."
  },
  {
    icon: Boxes,
    title: "Product systems",
    body: "Data models, roles, integrations, workflow surfaces."
  },
  {
    icon: BrainCircuit,
    title: "AI automation",
    body: "Agents, RAG, support flows, structured tool calling."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "Auth, monitoring, performance, deployment guardrails."
  },
  {
    icon: UsersRound,
    title: "Delivery",
    body: "From idea to production and ongoing iteration."
  }
];

const SkillsBanner = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50 text-slate-950 dark:border-white/10 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 md:grid-cols-5 md:divide-x md:divide-y-0 md:px-8 dark:divide-white/10">
        {capabilities.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-4 py-6 md:px-5">
            <Icon className="mt-1 size-6 shrink-0 text-blue-700 dark:text-blue-300" />
            <div>
              <h2 className="text-sm font-semibold text-slate-950 dark:text-white">{title}</h2>
              <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBanner; 
