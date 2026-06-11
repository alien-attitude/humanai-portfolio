import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  ArrowUpIcon,
  ShieldCheckIcon } from
'lucide-react';
const SOCIALS = [
{
  icon: LinkedinIcon,
  href: 'https://www.linkedin.com/in/maureen-obiekwe',
  label: 'LinkedIn'
},
{
  icon: GithubIcon,
  href: 'https://github.com/maureenobiekwe',
  label: 'GitHub'
},
{
  icon: MailIcon,
  href: 'obiekwekosi32@gmail.com',
  label: 'Email'
}];

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 600);
    handler();
    window.addEventListener('scroll', handler, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return (
    <footer className="w-full border-t border-charcoal/5 dark:border-white/10 bg-white dark:bg-charcoal py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sand text-charcoal">
            <ShieldCheckIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-charcoal dark:text-white">
              Maureen K. Obiekwe
            </p>
            <p className="text-xs text-charcoal/50 dark:text-white/50">
              QA Engineer · Future SDET
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 dark:border-white/15 text-charcoal/70 dark:text-white/70 transition-colors hover:border-brown hover:text-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
                
                <Icon className="h-4 w-4" />
              </a>);

          })}
        </div>

        <p className="text-xs text-charcoal/45 dark:text-white/45">
          © 2026 All Rights Reserved
        </p>
      </div>

      <AnimatePresence>
        {showTop &&
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{
            opacity: 0,
            scale: 0.8
          }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal shadow-soft-lg transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
          
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        }
      </AnimatePresence>
    </footer>);

}