import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}
export function SectionWrapper({
  id,
  children,
  className = '',
  ariaLabel
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial={{
        opacity: 0,
        y: 32
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`w-full ${className}`}>
      
      {children}
    </motion.section>);

}
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-12`}>
      
      {eyebrow &&
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-3">
          {eyebrow}
        </span>
      }
      <h2 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle &&
      <p className="mt-4 text-base sm:text-lg text-charcoal/60 dark:text-white/60 leading-relaxed">
          {subtitle}
        </p>
      }
    </div>);

}