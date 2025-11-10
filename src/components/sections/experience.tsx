'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  experiences?: Experience[];
}

interface Experience {
  role: string;
  company: string;
  period?: string;
  description: string;
  logo?: string;
  icon?: React.ReactNode;
}

const defaultExperiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Airbnb',
    period: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/images/airbnb.svg',
  },
  {
    role: 'Frontend Developer',
    company: 'Airtasker',
    period: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/images/airtasker.svg',
  },
  {
    role: 'Frontend Developer',
    company: 'Slack',
    period: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/images/slack.svg',
  },
];

export function Experience({
  title = 'Experiences That',
  subtitle = 'Shaped Me',
  experiences = defaultExperiences,
  className,
  ...props
}: ExperienceProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className={cn('w-full bg-neutral-950  text-white', className)}
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:px-8 xl:px-[120px]">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 -mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            <div className="px-2">
              <h2 className="text-display-3xl sm:text-display-xl md:text-4xl lg:text-5xl font-bold mb-2 leading-normal sm:leading-tight">
                {title}
              </h2>
              <h2 className="text-display-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal sm:leading-tight">
                <span className="text-secondary-100">{subtitle}</span>
                <span className="text-neutral-25">!</span>
              </h2>
            </div>
            <p className="text-sm lg:text-lg font-semibold lg:max-w-[400px] text-neutral-25 px-2 -py-1">
              From startups to side projects, every step has been a chance to
              learn, build, and level up.
            </p>
          </div>
        </motion.div>

        {/* Experiences List */}
        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 lg:grid lg:grid-cols-[200px_auto_1fr] lg:gap-8 lg:items-start pt-6 border-t border-neutral-800"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.2,
                ease: 'easeOut',
              }}
            >
              {/* Period and Role */}
              <div className="flex flex-col gap-2">
                {exp.period && (
                  <div className="text-sm font-medium text-neutral-400">{exp.period}</div>
                )}
                <div className="text-xl sm:text-2xl lg:text-xl font-bold text-neutral-25">{exp.role}</div>
              </div>

              {/* Company Logo in double bordered box */}
              {exp.logo && (
                <div className="flex items-center justify-center w-[122px] lg:w-[192px] h-[71px] lg:h-[112px] border border-neutral-800 rounded-2xl p-[5px] lg:p-2 gap-[5px] lg:gap-2 lg:ml-[100px]">
                  <div className="flex items-center justify-center w-[112px] lg:w-[176px] h-[61px] lg:h-[96px] border border-neutral-800 rounded-[10px] lg:rounded-2xl p-[15px] lg:p-6 gap-[5px] lg:gap-2">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={100}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="flex items-center lg:ml-[100px] lg:mr-[40px]">
                <p className="text-sm lg:text-md text-neutral-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
