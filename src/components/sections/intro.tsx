'use client';

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IntroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode;
  features?: Feature[];
}

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: <span className="text-display-3xl lg:text-[32px]">⚙️</span>,
    title: 'COMPONENT-BASED DEVELOPMENT',
    description:
      'Reusable, scalable code built with modern frameworks like React or Vue.',
  },
  {
    icon: <span className="text-display-3xl lg:text-[32px]">🎨</span>,
    title: 'PIXEL-PERFECT UI IMPLEMENTATION',
    description:
      'Translating design into high-fidelity user interfaces with attention to detail.',
  },
  {
    icon: <span className="text-display-3xl lg:text-[32px]">📱</span>,
    title: 'RESPONSIVE & ACCESSIBLE DESIGN',
    description:
      'Optimized layouts that work seamlessly across all screen sizes and devices.',
  },
];

const defaultTitle = (
  <>
    As frontend developers, we bring designs to life with{' '}
    <span className="text-[#B76080]">clean</span>,{' '}
    <span className="text-[#B76080]">responsive code</span> that blends
    creativity 🎨 with usability 🌟.
  </>
);

export function Intro({
  title = defaultTitle,
  features = defaultFeatures,
  className,
  ...props
}: IntroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={cn('w-full', className)} {...props} ref={ref}>
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 md:px-8 md:py-20 xl:px-[120px]">
        {/* Title */}
        <motion.div
          className="mb-6 px-2 text-center md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mx-auto max-w-4xl text-display-3xl font-medium leading-tight text-gray-900 lg:text-display-lg lg:font-medium">
            {title}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                'flex flex-col items-start text-left border-b border-neutral-300 pb-8 md:border-b-0 md:pb-0',
                index > 0 && 'md:border-l md:border-neutral-300 md:pl-6'
              )}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.2,
                ease: 'easeOut',
              }}
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex h-12 sm:h-16 lg:h-16 w-12 sm:w-16 lg:w-16 items-center justify-center rounded-full border border-neutral-300 text-gray-700">
                <div className="scale-75 sm:scale-100">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-display-lg lg:text-display-xs font-bold lg:font-bold uppercase tracking-wide text-gray-900 max-w-[200px] whitespace-nowrap lg:whitespace-normal">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-display-sm lg:text-md font-regular lg:font-regular text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
