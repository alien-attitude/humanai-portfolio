import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  MailIcon,
  BugIcon,
  ClipboardCheckIcon,
  GaugeCircleIcon,
  LayersIcon } from
'lucide-react';
const METRICS = [
{
  icon: ClipboardCheckIcon,
  value: '92',
  label: 'Test Cases Designed'
},
{
  icon: BugIcon,
  value: '20+',
  label: 'Bugs Reported'
},
{
  icon: GaugeCircleIcon,
  value: '224',
  label: 'Regression Tests Executed'
},
{
  icon: LayersIcon,
  value: '8',
  label: 'Internship Stages Completed'
}];

const PILLARS = [
'Test Planning',
'API Testing',
'Exploratory Testing',
'Performance Testing',
'Regression Automation'];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative w-full overflow-hidden bg-softgray dark:bg-charcoal pt-28 pb-20 sm:pt-32">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(196,154,108,0.25) 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }} />
      
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="inline-flex items-center gap-2 rounded-full border border-brown/30 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium text-brown">
            
            <span className="h-1.5 w-1.5 rounded-full bg-brown" />
            Anvila Internship · QA Engineering Track 2026
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 18
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.05
            }}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-charcoal dark:text-white sm:text-5xl lg:text-6xl">
            
            QA Engineer <span className="text-brown">|</span> Future SDET
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 18
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.12
            }}
            className="mt-4 text-lg font-medium text-charcoal/80 dark:text-white/80 sm:text-xl">
            
            "I uncover failures before users experience them."
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 18
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.18
            }}
            className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/60 dark:text-white/60">
            
            Across eight structured stages on Anvila, I moved from analysing a
            PRD and writing test cases from scratch to running CI-integrated
            Newman regression suites — covering test planning, API testing,
            exploratory testing, performance testing, and regression automation.
          </motion.p>

          <motion.ul
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.24
            }}
            className="mt-5 flex flex-wrap gap-2">
            
            {PILLARS.map((p) =>
            <li
              key={p}
              className="rounded-full bg-white/70 dark:bg-white/5 px-3 py-1 text-xs font-medium text-charcoal/70 dark:text-white/70 ring-1 ring-charcoal/5 dark:ring-white/10">
              
                {p}
              </li>
            )}
          </motion.ul>

          <motion.div
            initial={{
              opacity: 0,
              y: 18
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="mt-8 flex flex-wrap gap-3">
            
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-charcoal dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-charcoal shadow-soft transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
              
              View My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 dark:border-white/20 bg-white/60 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-charcoal dark:text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
              
              <MailIcon className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
          className="relative mx-auto w-full max-w-sm">
          
          <div className="relative rounded-3xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft-lg backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <img
                src="/maureen.png"
                alt="Avatar of Kosisochukwu Maureen Obiekwe"
                className="h-16 w-16 rounded-2xl ring-2 ring-brown/30" />
              
              <div>
                <p className="font-heading text-base font-semibold text-charcoal dark:text-white">
                  Maureen K. Obiekwe
                </p>
                <p className="text-sm text-charcoal/55 dark:text-white/55">
                  QA Engineer · "HumanAI"
                </p>
              </div>
            </div>

            <QaIllustration />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-4 sm:px-6">
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
          className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          
          {METRICS.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
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
                className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-1">
                
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/30 text-brown">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-heading text-3xl font-bold text-charcoal dark:text-white">
                  {m.value}
                </p>
                <p className="mt-1 text-sm text-charcoal/55 dark:text-white/55">
                  {m.label}
                </p>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}
function QaIllustration() {
  return (
    <div className="mt-6 rounded-2xl bg-softgray dark:bg-charcoal/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/45 dark:text-white/45">
          Regression Pipeline
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Passing
        </span>
      </div>
      <div className="space-y-2" aria-hidden="true">
        {[
        {
          label: 'Auth · Register',
          w: '100%'
        },
        {
          label: 'Auth · Login (JWT)',
          w: '100%'
        },
        {
          label: 'Personas · Generate',
          w: '92%'
        },
        {
          label: 'Explore · Feed',
          w: '100%'
        },
        {
          label: 'Newman CI Report',
          w: '88%'
        }].
        map((row, i) =>
        <div key={row.label} className="flex items-center gap-3">
            <span className="w-32 shrink-0 truncate text-[11px] text-charcoal/60 dark:text-white/60">
              {row.label}
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-charcoal/5 dark:bg-white/10">
              <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: row.w
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.1
              }}
              className="h-full rounded-full bg-brown" />
            
            </div>
          </div>
        )}
      </div>
    </div>);

}