import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
interface Stage {
  range: string;
  title: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  discovery: string;
}
const STAGES: Stage[] = [
{
  range: 'Stages 1–3',
  title: 'Test Planning & Test Case Design',
  objective:
  'Translate the Anvila PRD and Core Design System into a structured test foundation.',
  activities: [
  'Analysed the PRD with no prior test documentation on the project',
  'Designed 92 auth test cases: registration, login, token validation, edge cases'],

  deliverables: ['MVP Test Plan', '92 Authentication Test Cases'],
  discovery:
  'A complete coverage map can be built even on a fast-moving, undocumented codebase.'
},
{
  range: 'Stages 4–5',
  title: 'API Testing & Exploratory Testing',
  objective:
  'Build a Postman collection for every endpoint and verify the real API contract.',
  activities: [
  'Built a Postman collection covering all Anvila API endpoints',
  'Filed 20+ bugs across functional, UI/UX, and validation categories'],

  deliverables: ['Postman Collection', '20+ Bug Reports'],
  discovery:
  'form-data vs JSON mismatch, JWT in response body (not cookies), correct generate path.'
},
{
  range: 'Stage 6',
  title: 'Full Exploratory Bug Hunt',
  objective:
  'Run a structured exploratory session across the staging environment.',
  activities: [
  'Tested registration, login, protected routes, generation form, and Explore feed',
  'Cross-browser verification on Chrome, Firefox, and Edge with Jam.dev recordings'],

  deliverables: ['Stage 6 Bug Report', 'Validation Tracker'],
  discovery:
  'Categorised defects across functional, UI/UX, and validation dimensions.'
},
{
  range: 'Stage 7',
  title: 'Performance & Load Testing',
  objective:
  'Quantify Anvila’s behaviour under load and isolate server-side bottlenecks.',
  activities: [
  'Wrote and ran k6 load (50 VUs), stress, and spike scripts',
  'Integrated k6 into GitHub Actions CI; ran Lighthouse in incognito'],

  deliverables: ['k6 Scripts', 'Performance Report', 'Lighthouse Reports'],
  discovery:
  'Login endpoint p95 ≈ 7s under load — a confirmed server-side bottleneck.'
},
{
  range: 'Stage 8',
  title: 'Regression Testing & CI Automation',
  objective:
  'Stand up an automated, deterministic regression suite inside the pipeline.',
  activities: [
  '14-request Postman collection with 4 chained flows + collection-variable token passing',
  'Integrated Newman + htmlextra reporter into GitHub Actions; ~224 cases executed'],

  deliverables: ['Newman CI Workflow', 'MVP Coverage Summary'],
  discovery:
  '4 blocked cases (TC-051/053/067/068) — forgot/reset password pages never built.'
}];

export function JourneyTimeline() {
  return (
    <SectionWrapper
      id="journey"
      className="bg-softgray dark:bg-charcoal py-20 sm:py-24">
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Journey"
          title="Eight Stages. One Platform. Complete QA Lifecycle."
          subtitle="From first requirements analysis to automated CI regression — every stage added a new layer." />
        

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sand via-brown/40 to-transparent sm:left-1/2" />
          
          <ol className="space-y-8">
            {STAGES.map((stage, i) =>
            <TimelineItem key={stage.range} stage={stage} index={i} />
            )}
          </ol>
        </div>
      </div>
    </SectionWrapper>);

}
function TimelineItem({ stage, index }: {stage: Stage;index: number;}) {
  const isRight = index % 2 === 1;
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-60px'
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`relative pl-12 sm:pl-0 sm:w-1/2 ${isRight ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12 sm:text-left'}`}>
      
      <span
        aria-hidden="true"
        className={`absolute left-2 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brown ring-4 ring-softgray dark:ring-charcoal sm:left-auto ${isRight ? 'sm:-left-[10px]' : 'sm:-right-[10px]'}`}>
        
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>

      <div className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-soft transition-transform hover:-translate-y-1">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-sand/30 px-3 py-1 text-xs font-semibold text-brown">
            {stage.range}
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal dark:text-white">
          {stage.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
          <span className="font-medium text-charcoal/80 dark:text-white/80">
            Objective:{' '}
          </span>
          {stage.objective}
        </p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 dark:text-white/40">
            Activities
          </p>
          <ul className="mt-2 space-y-1.5">
            {stage.activities.map((a) =>
            <li
              key={a}
              className="flex gap-2 text-sm text-charcoal/65 dark:text-white/65">
              
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown" />
                {a}
              </li>
            )}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {stage.deliverables.map((d) =>
          <span
            key={d}
            className="rounded-md bg-softgray dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-charcoal/70 dark:text-white/70">
            
              {d}
            </span>
          )}
        </div>

        <p className="mt-4 rounded-xl border-l-2 border-brown bg-sand/10 px-3 py-2 text-sm italic text-charcoal/70 dark:text-white/70">
          <span className="font-semibold not-italic text-brown">
            Key discovery —{' '}
          </span>
          {stage.discovery}
        </p>
      </div>
    </motion.li>);
}