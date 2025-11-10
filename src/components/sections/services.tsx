'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ServicesProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  sections?: ServiceSection[];
}

interface ServiceSection {
  title: string;
  icon?: React.ReactNode;
  items: string[];
  variant: 'primary' | 'secondary';
}

const defaultSections: ServiceSection[] = [
  {
    title: 'With Me',
    icon: (
      <Image
        src="/images/hero.svg"
        alt="Web Dev"
        width={100}
        height={100}
        className="rounded-full h-20 w-20 lg:h-[100px] lg:w-[100px]"
      />
    ),
    variant: 'primary',
    items: [
      'React Expert',
      'Precise Website Implementation',
      'Typescript Proficiency',
      'Clean, Maintainable Code',
      'Responsive Website Development',
      'Performance Optimization',
      'UI Design Proficiency (Figma)',
    ],
  },
  {
    title: 'Another Talent',
    icon: (
      <Image
        src="/images/talent.svg"
        alt="Another Talent"
        width={100}
        height={100}
        className="rounded-full h-20 w-20 lg:h-[100px] lg:w-[100px]"
      />
    ),
    variant: 'secondary',
    items: [
      'Basic React Knowledge',
      'Inconsistent Design Translation',
      'Little to No TypeScript Knowledge',
      'Unstructured Code',
      'Inconsistent Responsiveness',
      'Slow and Heavy Websites',
      'No Design Skills',
    ],
  },
];

export function Services({
  title = 'More Than Just Code',
  subtitle = 'We care about design, performance, and user experience all in one.',
  sections = defaultSections,
  className,
  ...props
}: ServicesProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skill" className={cn('w-full bg-white', className)} {...props} ref={ref}>
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:px-8 xl:px-[120px]">
        {/* Title */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-display-3xl sm:text-display-xl font-bold text-gray-900 leading-[1.3] sm:leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-md font-medium text-neutral-950 mt-4">
            {subtitle}
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={cn(
                'w-full max-w-[391px] sm:max-w-[588px] h-[494px] sm:h-[620px] rounded-2xl p-6 sm:p-8 mx-auto',
                section.variant === 'primary'
                  ? 'bg-secondary-100 text-white'
                  : 'bg-white border border-neutral-300 text-gray-900'
              )}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.2,
                ease: 'easeOut',
              }}
            >
              {/* Title */}
              <h3
                className={cn(
                  'mb-4 sm:mb-6 text-center text-md lg:text-lg font-bold mt-4',
                  section.variant === 'primary'
                    ? 'text-neutral-950'
                    : 'text-gray-900'
                )}
              >
                {section.title}
              </h3>

              {/* Icon */}
              {section.icon && (
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="flex h-20 lg:h-[100px] w-20 lg:w-[100px] mt-4 items-center justify-center rounded-full bg-primary-300 overflow-hidden">
                    {section.icon}
                  </div>
                </div>
              )}

              {/* Items List */}
              <ul className="space-y-3 sm:space-y-4 flex flex-col items-center">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 mt-1">
                    {section.variant === 'primary' ? (
                      <Check className="h-6 sm:h-6 w-6 sm:w-6 shrink-0 text-neutral-950" />
                    ) : (
                      <X className="h-6 sm:h-6 w-6 sm:w-6 shrink-0 text-red-500" />
                    )}
                    <span
                      className={cn(
                        'text-md font-semibold sm:text-lg md:text-lg',
                        section.variant === 'primary'
                          ? 'text-neutral-950'
                          : 'text-gray-700'
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
