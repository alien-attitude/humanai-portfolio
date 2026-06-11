import { ComponentType} from 'react';
import { motion } from 'framer-motion';
import {
  PlugZapIcon,
  KeyRoundIcon,
  TimerIcon,
  GaugeIcon,
  BanIcon } from
'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
type Severity = 'Critical' | 'High' | 'Medium' | 'Blocker';
interface Finding {
  num: string;
  icon: ComponentType<{
    className?: string;
  }>;
  title: string;
  severity: Severity;
  impact: string;
  details: string[];
}
const SEVERITY_STYLES: Record<Severity, string> = {
  Critical: 'bg-red-500/10 text-red-600 dark:text-red-400 ring-red-500/20',
  High: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-orange-500/20',
  Medium:
  'bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20',
  Blocker:
  'bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-purple-500/20'
};
const FINDINGS: Finding[] = [
{
  num: '01',
  icon: PlugZapIcon,
  title: 'API Contract Mismatch',
  severity: 'Critical',
  impact: 'Silently broke every JSON-based test environment',
  details: [
  'The /api/v1/personas/generate endpoint required form-data — not JSON',
  'Field name was "prompt", not "description"',
  'JSON requests failed silently with no user feedback']

},
{
  num: '02',
  icon: KeyRoundIcon,
  title: 'JWT Location Discovery',
  severity: 'High',
  impact: 'Auth chains failed until token extraction was corrected',
  details: [
  'JWT token lived in the login response body — not in cookies',
  'Postman scripts had to extract and pass it as a collection variable']

},
{
  num: '03',
  icon: TimerIcon,
  title: 'Performance Bottleneck',
  severity: 'Critical',
  impact: 'Login latency degraded user experience under load',
  details: [
  'Login endpoint registered p95 ≈ 7 seconds under k6 load',
  'Confirmed as server-side via GitHub Actions CI run data']

},
{
  num: '04',
  icon: GaugeIcon,
  title: 'Landing Page Performance Issue',
  severity: 'Medium',
  impact: 'Reduced perceived responsiveness on first load',
  details: [
  'Lighthouse flagged elevated Total Blocking Time on the landing page',
  'Audits run in incognito to remove extension interference']

},
{
  num: '05',
  icon: BanIcon,
  title: 'Blocked Requirements',
  severity: 'Blocker',
  impact: '4 test cases could not be executed',
  details: [
  'Forgot / reset password pages were never built',
  'Blocked TC-051, TC-053, TC-067, and TC-068']

}];

export function CriticalDiscoveries() {
  return (
    <SectionWrapper
      id="findings"
      className="bg-white dark:bg-charcoal/95 py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Critical Discoveries"
          subtitle="The findings that mattered most — and what they cost if left unchecked." />
        

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
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          
          {FINDINGS.map((f) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.num}
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
                className="flex flex-col rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-6 shadow-soft transition-transform sm:hover:-translate-y-1">
                
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-white/10 text-brown shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${SEVERITY_STYLES[f.severity]}`}>
                    
                    {f.severity}
                  </span>
                </div>
                <p className="mt-4 font-heading text-sm font-semibold text-brown">
                  Finding #{f.num}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-charcoal dark:text-white">
                  {f.title}
                </h3>
                <ul className="mt-3 flex-1 space-y-2">
                  {f.details.map((d) =>
                  <li
                    key={d}
                    className="flex gap-2 text-sm text-charcoal/60 dark:text-white/60">
                    
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown" />
                      {d}
                    </li>
                  )}
                </ul>
                <p className="mt-4 rounded-lg bg-white dark:bg-white/10 px-3 py-2 text-xs font-medium text-charcoal/70 dark:text-white/70">
                  <span className="text-brown">Impact: </span>
                  {f.impact}
                </p>
              </motion.article>);

          })}
        </motion.div>
      </div>
    </SectionWrapper>);

}