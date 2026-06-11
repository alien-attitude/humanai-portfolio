import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
const QUOTES = [
'Before this internship I could test software. After it, I understand how software fails.',
'Quality engineering is not about finding bugs. It is about making the cost of failure visible before anyone else has to pay it.'];

export function PhilosophySection() {
  return (
    <SectionWrapper
      id="philosophy"
      className="bg-softgray dark:bg-charcoal py-20 sm:py-28">
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-8">
          QA Philosophy
        </span>

        <div className="space-y-10">
          {QUOTES.map((q, i) =>
          <motion.blockquote
            key={i}
            initial={{
              opacity: 0,
              y: 28
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
              duration: 0.7,
              delay: i * 0.15
            }}
            className="relative">
            
              <QuoteIcon
              aria-hidden="true"
              className="mx-auto mb-4 h-8 w-8 text-brown/40" />
            
              <p className="font-heading text-2xl font-medium leading-snug text-charcoal dark:text-white sm:text-3xl">
                "{q}"
              </p>
            </motion.blockquote>
          )}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-brown/40" />
          <span className="font-heading text-sm font-semibold text-charcoal/70 dark:text-white/70">
            Maureen K. Obiekwe
          </span>
          <span className="h-px w-12 bg-brown/40" />
        </div>
      </div>
    </SectionWrapper>);

}