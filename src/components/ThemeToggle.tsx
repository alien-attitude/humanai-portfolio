import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function ThemeToggle({ className = '' }: {className?: string;}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 dark:border-white/15 bg-white/70 dark:bg-white/5 text-charcoal dark:text-white transition-colors hover:border-brown/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown ${className}`}>
      
      <motion.span
        key={theme}
        initial={{
          rotate: -90,
          opacity: 0
        }}
        animate={{
          rotate: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
        className="flex">
        
        {isDark ?
        <SunIcon className="h-[18px] w-[18px]" /> :

        <MoonIcon className="h-[18px] w-[18px]" />
        }
      </motion.span>
    </button>);

}