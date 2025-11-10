'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface PortfolioProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  projects?: Project[];
  viewAllLink?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

const defaultProjects: Project[] = [
  {
    title: 'Portfolio 1',
    description: 'Web Development',
    image: '/images/Portfolio1.svg',
    link: 'https://www.webprogramminghack.com/',
  },
  {
    title: 'Portfolio 2',
    description: 'Web Development',
    image: '/images/Portfolio2.svg',
    link: 'https://www.webprogramminghack.com/',
  },
  {
    title: 'Portfolio 3',
    description: 'Web Development',
    image: '/images/Portfolio3.svg',
    link: 'https://www.webprogramminghack.com/',
  },
];

export function Portfolio({
  title = 'Design to ',
  titleHighlight = 'Code Accuracy',
  subtitle = 'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
  projects = defaultProjects,
  viewAllLink = 'https://www.webprogramminghack.com/',
  className,
  ...props
}: PortfolioProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className={cn('w-full bg-transparent mb-8', className)}
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[120px] py-2 sm:py-20">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <h2 className="mb-3 sm:mb-4 text-display-3xl sm:text-display-xl md:text-display-xl lg:text-display-xl font-bold text-gray-900 leading-normal sm:leading-tight">
                {title}
                <span className="text-primary-300">{titleHighlight}</span>
              </h2>
              <p className="text-sm sm:text-md font-medium text-gray-600 leading-relaxed lg:max-w-[600px]">
                {subtitle}
              </p>
            </div>
            <a
              href={viewAllLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 w-full lg:w-[166px] h-[56px] pl-6 pr-3 rounded-full bg-white border border-neutral-300 text-sm text-md font-semibold text-gray-900 transition-colors hover:bg-secondary-100 lg:shrink-0"
            >
              <span>See All</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
                <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: 'easeOut',
              }}
            >
              {/* Best Portfolio Badge */}
              <div className="absolute top-7 -left-2 z-20">
                <div className="relative">
                  <Image
                    src="/images/tape.svg"
                    alt="Best Portfolio"
                    width={97}
                    height={29}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Image Card */}
              <div className="group relative w-[361px] lg:w-[387px] h-[361px] lg:h-[387px] flex items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 transition-all">
                <div className="relative w-[329px] lg:w-[355px] h-[329px] lg:h-[355px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                  />
                </div>
              </div>

              {/* Text Card */}
              <div className="group relative w-[361px] lg:w-[387px] h-[110px] lg:h-[118px] mb-2 p-6 bg-neutral-100 rounded-3xl">
                {/* Border line - positioned absolutely at center */}
                <div className="absolute left-6 right-[72px] top-1/2 -translate-y-1/2 h-px bg-neutral-300"></div>

                <div className="flex items-center justify-between gap-4 h-full relative z-10">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-4">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-300"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
