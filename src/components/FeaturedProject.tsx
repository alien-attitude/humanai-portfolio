import { motion } from 'framer-motion';
import {
  SparklesIcon,
  FileCode2Icon,
  GithubIcon,
  UserIcon,
  ArrowRightIcon } from
'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
const RESPONSIBILITIES = [
'Test Planning',
'Test Design',
'API Testing',
'Exploratory Testing',
'Performance Testing',
'Regression Automation',
'Defect Tracking'];

const WORKFLOW = [
{
  label: 'Plain-English Prompt',
  icon: SparklesIcon
},
{
  label: 'Generation Engine',
  icon: FileCode2Icon
},
{
  label: 'Markdown Package',
  icon: FileCode2Icon
},
{
  label: 'Publish to GitHub',
  icon: GithubIcon
}];

export function FeaturedProject() {
  return (
    <SectionWrapper
      id="projects"
      className="bg-softgray dark:bg-charcoal py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Case Study"
          title="Anvila — AI Agent Scaffolding Platform"
          subtitle="Users describe an AI agent in plain English; the system generates a structured markdown package and publishes it to GitHub." />
        

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 p-7 shadow-soft">
            
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal dark:bg-white text-white dark:text-charcoal">
                <UserIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-charcoal/45 dark:text-white/45">
                  Role
                </p>
                <p className="font-heading text-base font-semibold text-charcoal dark:text-white">
                  Sole QA Engineer
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-charcoal/65 dark:text-white/65">
              Anvila includes user authentication, an agent generation engine, a
              public explore / registry feed, GitHub publishing integration,
              skill matching, a README generator, and a payments layer. Testing
              it meant a fast-moving codebase, incomplete features, a free-plan
              generation quota, and an API contract that diverged from REST
              conventions.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-charcoal/40 dark:text-white/40">
              Responsibilities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {RESPONSIBILITIES.map((r) =>
              <span
                key={r}
                className="rounded-full bg-sand/25 px-3 py-1 text-xs font-medium text-brown">
                
                  {r}
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 p-7 shadow-soft">
            
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 dark:text-white/40">
              Generation Workflow
            </p>
            <ol
              className="mt-5 space-y-3"
              aria-label="Anvila generation workflow">
              
              {WORKFLOW.map((step, i) => {
                const Icon = step.icon;
                const last = i === WORKFLOW.length - 1;
                return (
                  <li key={step.label}>
                    <div className="flex items-center gap-3 rounded-xl bg-softgray dark:bg-white/10 px-3 py-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sand/40 text-brown">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-charcoal dark:text-white">
                        {step.label}
                      </span>
                    </div>
                    {!last &&
                    <div
                      className="flex justify-center py-1"
                      aria-hidden="true">
                      
                        <ArrowRightIcon className="h-4 w-4 rotate-90 text-brown/60" />
                      </div>
                    }
                  </li>);

              })}
            </ol>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>);

}