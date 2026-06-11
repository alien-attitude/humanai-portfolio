import { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardListIcon,
  TerminalIcon,
  ActivityIcon,
  GitBranchIcon } from
'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
interface SkillGroup {
  icon: ComponentType<{
    className?: string;
  }>;
  title: string;
  skills: string[];
}
const GROUPS: SkillGroup[] = [
{
  icon: ClipboardListIcon,
  title: 'Testing Skills',
  skills: [
  'Test Planning',
  'Test Case Design',
  'Functional Testing',
  'Regression Testing',
  'Exploratory Testing',
  'Risk-Based Testing',
  'Defect Lifecycle Management']

},
{
  icon: TerminalIcon,
  title: 'API & Automation',
  skills: [
  'Postman',
  'Newman',
  'REST APIs',
  'Collection Variables',
  'Chained API Flows']

},
{
  icon: ActivityIcon,
  title: 'Performance Testing',
  skills: [
  'k6',
  'Lighthouse',
  'Load Testing',
  'Stress Testing',
  'Spike Testing']

},
{
  icon: GitBranchIcon,
  title: 'DevOps & CI/CD',
  skills: ['GitHub Actions', 'CI Pipelines', 'Automated Regression Testing']
}];

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      className="bg-white dark:bg-charcoal/95 py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A toolkit built across the full testing lifecycle"
          subtitle="Acquired and applied hands-on during eight stages of structured QA work on Anvila." />
        

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true
          }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24
                  },
                  show: {
                    opacity: 1,
                    y: 0
                  }
                }}
                className="flex flex-col rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-6 shadow-soft transition-transform hover:-translate-y-1">
                
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/30 text-brown">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-charcoal dark:text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) =>
                  <li
                    key={s}
                    className="rounded-lg bg-white dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-charcoal/70 dark:text-white/70 ring-1 ring-charcoal/5 dark:ring-white/10">
                    
                      {s}
                    </li>
                  )}
                </ul>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </SectionWrapper>);

}