import { motion } from 'framer-motion';
import {
  TargetIcon,
  AwardIcon,
  TestTubeIcon,
  ShieldIcon,
  RadarIcon,
  BugPlayIcon,
  GitMergeIcon,
  CrownIcon } from
'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
const GOALS = [
{
  icon: TargetIcon,
  title: 'Become an SDET',
  note: 'Write tests, not just run them.'
},
{
  icon: AwardIcon,
  title: 'ISTQB Certification',
  note: 'Formalise the foundations.'
},
{
  icon: TestTubeIcon,
  title: 'Cypress Automation Projects',
  note: 'End-to-end UI automation.'
},
{
  icon: ShieldIcon,
  title: 'Security Testing',
  note: 'Test for what attackers find.'
},
{
  icon: RadarIcon,
  title: 'Master OWASP ZAP',
  note: 'Automated security scanning.'
},
{
  icon: BugPlayIcon,
  title: 'Learn Burp Suite',
  note: 'Deep manual security testing.'
},
{
  icon: GitMergeIcon,
  title: 'Open Source QA Tools',
  note: 'Contribute back to the community.'
},
{
  icon: CrownIcon,
  title: 'Lead Test Automation',
  note: 'For API-first products.'
}];

export function FutureRoadmap() {
  return (
    <SectionWrapper
      id="future"
      className="bg-white dark:bg-charcoal/95 py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where I'm Going Next"
          subtitle="A deliberate path from QA Engineer toward leading test automation for API-first products." />
        

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true
          }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.07
              }
            }
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {GOALS.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.li
                key={g.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10
                  },
                  show: {
                    opacity: 1,
                    y: 0
                  }
                }}
                className="relative rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-5 transition-transform sm:hover:-translate-y-1">
                
                <span className="absolute right-4 top-4 font-heading text-xs font-bold text-brown/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/30 text-brown">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold text-charcoal dark:text-white">
                  {g.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/55 dark:text-white/55">
                  {g.note}
                </p>
              </motion.li>);

          })}
        </motion.ol>
      </div>
    </SectionWrapper>);
}