import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
interface Artifact {
  category: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}
const ARTIFACTS: Artifact[] = [
{
  category: 'Test Planning',
  title: 'MVP Test Plan',
  description:
  'Scope, risk areas, and coverage strategy derived directly from the Anvila PRD.',
  tech: ['PRD Analysis', 'Risk-Based Testing'],
  link: 'https://docs.google.com/document/d/18tTk4PZT2afN2N4xyB1gN-FeHTK0pmBxR4AhlT-ktvU/edit?tab=t.0'
},
{
  category: 'Test Design',
  title: '92 Auth Test Cases',
  description:
  'Registration, login, token validation, and edge-case inputs designed from scratch.',
  tech: ['Test Case Design', 'Spreadsheet'],
  link: 'https://docs.google.com/spreadsheets/d/1Er1IRWFdcj09jjpYFSaAmAd89qN5Us6rq76y4PlzBZs/edit?gid=0#gid=0'
},
{
  category: 'Tracking',
  title: 'Validation Tracker',
  description:
  'Field-level input validation matrix mapping rules to expected outcomes.',
  tech: ['Validation', 'Traceability'],
  link: 'https://docs.google.com/spreadsheets/d/1Er1IRWFdcj09jjpYFSaAmAd89qN5Us6rq76y4PlzBZs/edit'
},
{
  category: 'Bug Reporting',
  title: 'Stage 6 Bug Report',
  description:
  'Structured exploratory findings across functional, UI/UX, and validation defects.',
  tech: ['Jam.dev', 'Cross-Browser'],
  link: 'https://docs.google.com/spreadsheets/d/1ztu8ehRV8C0TJfDVFrSjEdH4-3pxlvpDaXLEkauzoKA/edit?usp=sharing&urp=gmail_link'
},
{
  category: 'Bug Reporting',
  title: 'Tickets Tracker',
  description:
  'Defect lifecycle log linking test cases to reports and resolution status.',
  tech: ['Defect Lifecycle'],
  link: 'https://docs.google.com/spreadsheets/d/1Er1IRWFdcj09jjpYFSaAmAd89qN5Us6rq76y4PlzBZs/edit'
},
{
  category: 'API Testing',
  title: 'Postman Collection',
  description:
  '14-request collection with 4 chained flows and collection-variable token passing.',
  tech: ['Postman', 'REST APIs'],
  link: 'https://www.postman.com/human-ai-maureen-3912981/anvila/request/n3whvr4/anvila-regression-suite?action=share&creator=55202040&ctx=documentation&active-environment=55202040-3ec90328-a2c0-454f-b2fd-cb2b4cdb8f49'
},
{
  category: 'Performance',
  title: 'k6 Scripts',
  description:
  'Load, stress, and spike scripts — 50 VUs sustained against the login endpoint.',
  tech: ['k6', 'JavaScript'],
  link: 'https://github.com/maureenobiekwe/k6script'
},
{
  category: 'Performance',
  title: 'Performance Report',
  description:
  'p95 latency analysis isolating the server-side login bottleneck via CI data.',
  tech: ['k6', 'GitHub Actions'],
  link: 'https://docs.google.com/document/d/15qusHGrzjYGImeGzqFwIV21wSxvsvYfhfqWgm53XCMI/edit?tab=t.0#heading=h.8cibjx3kiqj1'
},
{
  category: 'Performance',
  title: 'Lighthouse Reports',
  description:
  'Incognito audits flagging Total Blocking Time on the landing page.',
  tech: ['Lighthouse'],
  link: 'https://docs.google.com/document/d/15qusHGrzjYGImeGzqFwIV21wSxvsvYfhfqWgm53XCMI/edit?tab=t.0#heading=h.8cibjx3kiqj1'
},
{
  category: 'Automation',
  title: 'Newman CI Workflow',
  description:
  'Newman + htmlextra reporter integrated into GitHub Actions for regression runs.',
  tech: ['Newman', 'GitHub Actions'],
  link: 'https://github.com/maureenobiekwe/k6script'
},
{
  category: 'Automation',
  title: 'MVP Coverage Summary',
  description:
  'Final report covering 8 functional areas and ~224 executed test cases.',
  tech: ['Reporting', 'Coverage'],
  link: 'https://docs.google.com/document/d/1E0m6MRvm5W7tR0YQzGCoH2HqCeqaNuJ7n-ilCg7vFaU/edit?tab=t.0#heading=h.82t1zggmyovv'
}];

export function ArtifactsShowcase() {
  return (
    <SectionWrapper
      id="artifacts"
      className="bg-softgray dark:bg-charcoal py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="QA Artifacts Showcase"
          subtitle="The deliverables behind each stage — from planning documents to CI automation workflows." />
        

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true
          }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.06
              }
            }
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {ARTIFACTS.map((a) =>
          <motion.article
            key={a.title}
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
            className="flex flex-col rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-soft transition-transform sm:hover:-translate-y-1">
            
              <span className="self-start rounded-full bg-sand/30 px-2.5 py-1 text-xs font-semibold text-brown">
                {a.category}
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold text-charcoal dark:text-white">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/55 dark:text-white/55">
                {a.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.tech.map((t) =>
              <span
                key={t}
                className="rounded-md bg-softgray dark:bg-white/10 px-2 py-0.5 text-[11px] font-medium text-charcoal/60 dark:text-white/60">
                
                    {t}
                  </span>
              )}
              </div>
              <a
              href={a.link}
              target="_blank"
              rel={"noopener noreferrer"}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brown transition-colors hover:text-charcoal dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brown rounded"
              aria-label={`View artifact: ${a.title}`}>
              
                View Artifact
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </motion.article>
          )}
        </motion.div>
      </div>
    </SectionWrapper>);

}