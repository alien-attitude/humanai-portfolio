import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ShieldCheckIcon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';
const NAV_ITEMS = [
{
  id: 'home',
  label: 'Home'
},
{
  id: 'about',
  label: 'About'
},
{
  id: 'journey',
  label: 'Journey'
},
{
  id: 'skills',
  label: 'Skills'
},
{
  id: 'projects',
  label: 'Projects'
},
{
  id: 'artifacts',
  label: 'Artifacts'
},
{
  id: 'future',
  label: 'Future Goals'
},
{
  id: 'contact',
  label: 'Contact'
}];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((i) => i.id));
  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-charcoal/70 px-4 py-2.5 shadow-soft sm:px-6">
        
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
          
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sand text-charcoal">
            <ShieldCheckIcon className="h-4 w-4" />
          </span>
          <span className="font-heading text-sm font-semibold text-charcoal dark:text-white">
            HumanAI<span className="text-brown">.qa</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brown ${active ? 'text-charcoal dark:text-white' : 'text-charcoal/55 dark:text-white/55 hover:text-charcoal dark:hover:text-white'}`}>
                  
                  {item.label}
                  {active &&
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brown"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30
                    }} />

                  }
                </button>
              </li>);

          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 dark:border-white/15 text-charcoal dark:text-white lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
            
            {open ?
            <XIcon className="h-5 w-5" /> :

            <MenuIcon className="h-5 w-5" />
            }
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            y: -8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -8
          }}
          transition={{
            duration: 0.2
          }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/40 dark:border-white/10 bg-white/90 dark:bg-charcoal/90 p-3 shadow-soft lg:hidden">
          
            <ul className="grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) =>
            <li key={item.id}>
                  <button
                onClick={() => handleNav(item.id)}
                className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${activeId === item.id ? 'bg-sand/30 text-charcoal dark:text-white' : 'text-charcoal/70 dark:text-white/70 hover:bg-softgray dark:hover:bg-white/5'}`}>
                
                    {item.label}
                  </button>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}