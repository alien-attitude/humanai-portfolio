import { motion } from 'framer-motion';
import {
  SearchCheckIcon,
  ScanEyeIcon,
  LightbulbIcon,
  NetworkIcon } from
'lucide-react';
import { SectionWrapper } from './SectionWrapper';
const TRAITS = [
{
  icon: SearchCheckIcon,
  title: 'Detective Mindset',
  body: 'I approach software the way a detective approaches a case — patience, precision, and the instinct that something is always worth a second look.'
},
{
  icon: ScanEyeIcon,
  title: 'Attention to Detail',
  body: 'The most consequential bugs hide in the contracts between systems: a wrong field name, a misplaced token, a silent 202.'
},
{
  icon: LightbulbIcon,
  title: 'Curiosity',
  body: 'Every stage added a new layer — not just finding bugs, but understanding why they exist and what they reveal.'
},
{
  icon: NetworkIcon,
  title: 'System Thinking',
  body: 'From JWT auth flows and form-data API contracts to GitHub publishing pipelines and generation quotas.'
}];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="bg-white dark:bg-charcoal/95 py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-3">
              About Me
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal dark:text-white sm:text-4xl">
              I learned to think about software the way a detective thinks about
              a case.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/65 dark:text-white/65">
              <p>
                My name is{' '}
                <span className="font-semibold text-charcoal dark:text-white">
                  Kosisochukwu Maureen Obiekwe
                </span>
                . I am a QA Engineer who spent the Anvila internship learning to
                test with patience, precision, and an instinct that something is
                always worth a second look.
              </p>
              <p>
                Over eight stages I moved from{' '}
                <span className="font-medium text-charcoal dark:text-white">
                  writing 92 authentication test cases from scratch
                </span>{' '}
                all the way through to{' '}
                <span className="font-medium text-charcoal dark:text-white">
                  automating regression testing with Newman in GitHub Actions
                </span>
                . Each stage added a new layer to how I approach quality.
              </p>
              <p>
                I am building toward an SDET role specialising in API and
                backend testing — because the most interesting bugs live not in
                the UI, but in the contracts between systems. I want to be the
                engineer who catches those things before they reach production.
              </p>
            </div>
          </div>

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
            className="grid gap-4 sm:grid-cols-2">
            
            {TRAITS.map((t) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20
                    },
                    show: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-5 transition-transform hover:-translate-y-1">
                  
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/30 text-brown">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-charcoal dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/55 dark:text-white/55">
                    {t.body}
                  </p>
                </motion.div>);

            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>);

}