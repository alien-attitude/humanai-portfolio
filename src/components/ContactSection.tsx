import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
  CheckCircle2Icon,
  SendIcon } from
'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
interface FormState {
  name: string;
  email: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}
const CHANNELS = [
{
  icon: MailIcon,
  label: 'Email',
  value: 'obiekwekosi32@gmail.com',
  href: 'obiekwekosi32@gmail.com'
},
{
  icon: LinkedinIcon,
  label: 'LinkedIn',
  value: '/in/maureenobiekwe',
  href: 'https://www.linkedin.com/in/maureen-obiekwe'
},
{
  icon: GithubIcon,
  label: 'GitHub',
  value: '@maureenobiekwe',
  href: 'https://github.com/maureenobiekwe'
}];

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}
export function ContactSection() {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange =
  (field: keyof FormState) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({
      ...v,
      [field]: e.target.value
    }));
    if (errors[field])
    setErrors((prev) => ({
      ...prev,
      [field]: undefined
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };
  return (
    <SectionWrapper
      id="contact"
      className="bg-white dark:bg-charcoal/95 py-20 sm:py-24">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk about quality"
          subtitle="Open to QA Engineer, Test Engineer, and Junior SDET roles." />
        

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-4 transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
                  
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/30 text-brown">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-charcoal/45 dark:text-white/45">
                      {c.label}
                    </span>
                    <span className="block text-sm font-medium text-charcoal dark:text-white">
                      {c.value}
                    </span>
                  </span>
                </a>);

            })}
            <a
              href='/public/resume.pdf' download="Maureen_Obiekwe_cv"
              className="flex items-center justify-center gap-2 rounded-2xl bg-charcoal dark:bg-white px-4 py-4 text-sm font-semibold text-white dark:text-charcoal transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
              
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-softgray dark:bg-white/5 p-6 shadow-soft sm:p-8">
            {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="flex h-full flex-col items-center justify-center py-10 text-center"
              role="status">
              
                <CheckCircle2Icon className="h-12 w-12 text-emerald-500" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal dark:text-white">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-charcoal/60 dark:text-white/60">
                  Thanks, {values.name.split(' ')[0]}. I'll get back to you as
                  soon as I can.
                </p>
                <button
                onClick={() => {
                  setSubmitted(false);
                  setValues({
                    name: '',
                    email: '',
                    message: ''
                  });
                }}
                className="mt-6 rounded-xl border border-charcoal/15 dark:border-white/20 px-5 py-2.5 text-sm font-semibold text-charcoal dark:text-white transition-colors hover:border-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-brown">
                
                  Send another message
                </button>
              </motion.div> :

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field
                id="name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
                error={errors.name}
                placeholder="Jane Recruiter" />
              
                <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
                placeholder="jane@company.com" />
              
                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal dark:text-white">
                  
                    Message
                  </label>
                  <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                  errors.message ? 'message-error' : undefined
                  }
                  placeholder="Tell me about the role or just say hello…"
                  className={`mt-1.5 w-full resize-none rounded-xl border bg-white dark:bg-charcoal/60 px-4 py-3 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brown ${errors.message ? 'border-red-400' : 'border-charcoal/10 dark:border-white/15'}`} />
                
                  {errors.message &&
                <p
                  id="message-error"
                  className="mt-1.5 text-xs text-red-500">
                  
                      {errors.message}
                    </p>
                }
                </div>
                <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brown px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal dark:focus-visible:ring-white">
                
                  <SendIcon className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </SectionWrapper>);

}
interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}
function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-charcoal dark:text-white">
        
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-xl border bg-white dark:bg-charcoal/60 px-4 py-3 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brown ${error ? 'border-red-400' : 'border-charcoal/10 dark:border-white/15'}`} />
      
      {error &&
      <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      }
    </div>);

}