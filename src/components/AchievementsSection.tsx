import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedCounter } from './AnimatedCounter';
const STATS = [
{
  value: 92,
  suffix: '+',
  label: 'Test Cases Designed'
},
{
  value: 20,
  suffix: '+',
  label: 'Bugs Reported'
},
{
  value: 224,
  suffix: '',
  label: 'Regression Tests Executed'
},
{
  value: 8,
  suffix: '',
  label: 'Internship Stages'
},
{
  value: 4,
  suffix: '',
  label: 'Chained API Flows'
},
{
  value: 50,
  suffix: '',
  label: 'Virtual Users Load Tested'
}];

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      className="bg-charcoal dark:bg-black py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sand mb-3">
            By the Numbers
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quantified quality work
          </h2>
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
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-2 gap-5 md:grid-cols-3">
          
          {STATS.map((s) =>
          <motion.div
            key={s.label}
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            
              <AnimatedCounter
              value={s.value}
              suffix={s.suffix}
              className="font-heading text-4xl font-bold text-sand sm:text-5xl" />
            
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>);

}