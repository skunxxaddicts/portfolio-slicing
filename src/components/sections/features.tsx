'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface FeaturesProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'primary' | 'secondary';
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <Image src="/images/HTML5.svg" alt="HTML5" width={35} height={35} />,
    title: 'HTML',
    description: 'Crafting semantic, accessible HTML structures.',
    variant: 'primary',
  },
  {
    icon: <Image src="/images/CSS.svg" alt="CSS" width={30} height={35} />,
    title: 'CSS',
    description: 'Crafting semantic, accessible HTML structures.',
    variant: 'secondary',
  },
  {
    icon: (
      <Image src="/images/JS.svg" alt="JavaScript" width={44} height={44} />
    ),
    title: 'Javascript',
    description: 'Crafting semantic, accessible HTML structures.',
    variant: 'primary',
  },
  {
    icon: <Image src="/images/REACT.svg" alt="React" width={38} height={34} />,
    title: 'React',
    description: 'Crafting semantic, accessible HTML structures.',
    variant: 'secondary',
  },
];

export function Features({
  title = 'Code, Design, and Everything In Between',
  subtitle = 'These are the technologies that power my workflow and bring ideas to life',
  features = defaultFeatures,
  className,
  ...props
}: FeaturesProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [zoomedCard, setZoomedCard] = React.useState<string | null>(null);
  const [zoomIndex, setZoomIndex] = React.useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrevious = () => {
    if (isMobile) {
      // Mobile: just navigate pages, no zoom
      if (currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
        setZoomedCard(null);
      }
    } else {
      // Desktop: cycle through all cards with zoom
      const nextIndex = (zoomIndex - 1 + features.length) % features.length;
      setZoomIndex(nextIndex);
      setZoomedCard(features[nextIndex].title);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      // Mobile: just navigate pages, no zoom
      if (currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);
        setZoomedCard(null);
      }
    } else {
      // Desktop: cycle through all cards with zoom
      const nextIndex = (zoomIndex + 1) % features.length;
      setZoomIndex(nextIndex);
      setZoomedCard(features[nextIndex].title);
    }
  };

  const canGoPrevious = isMobile ? currentPage > 0 : zoomIndex > 0;
  const canGoNext = isMobile
    ? currentPage < totalPages - 1
    : zoomIndex < features.length - 1;

  const visibleFeatures = isMobile
    ? features.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : features;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className={cn(
        'w-full bg-linear-to-b from-[#9E385E]/0 to-[#9E385E]/10',
        className
      )}
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 md:px-8 xl:px-[120px]">
        {/* Title */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="px-0">
            <h2 className="text-display-3xl sm:text-display-xl font-bold sm:font-bold text-neutral-950 leading-normal sm:leading-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-md sm:font-medium text-neutral-950 mt-2">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center overflow-visible py-4">
          {visibleFeatures.map((feature, index) => {
            const isZoomed = zoomedCard === feature.title;
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                style={{
                  zIndex: isZoomed ? 20 : 1,
                }}
                initial={{ opacity: 0, y: 50, scale: 1 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: isZoomed ? 1.3 : 1,
                      }
                    : { opacity: 0, y: 50, scale: 1 }
                }
                transition={{
                  opacity: { duration: 0.6, delay: 0.2 + index * 0.15 },
                  y: { duration: 0.6, delay: 0.2 + index * 0.15 },
                  scale: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                {/* Circular Icon */}
                <div
                  className={cn(
                    'mb-4 sm:mb-6 flex h-[281px] w-[160px] sm:w-[172.5px] md:w-[200px] lg:w-[215px] flex-col items-center rounded-full pt-10 sm:pt-0 sm:justify-center pointer-events-none',
                    feature.variant === 'primary'
                      ? 'bg-secondary-100 text-neutral-950'
                      : 'border border-neutral-300 bg-neutral-25 text-neutral-950',
                    feature.className
                  )}
                >
                  <div
                    className={cn(
                      'mb-2 sm:mb-2 flex h-15 sm:h-20 w-15 sm:w-20 items-center justify-center rounded-full',
                      feature.variant === 'primary'
                        ? 'bg-neutral-25'
                        : 'bg-neutral-200'
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-md lg:text-md mt-2 font-semibold lg:font-semibold text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-md mt-2 font-regular lg:font-regular text-neutral-800">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrow Navigation - Visible on all screens */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-transparent"
            aria-label="Previous features"
          >
            <Image
              src={
                canGoPrevious
                  ? '/images/arrow-right-black.svg'
                  : '/images/arrow-right-grey.svg'
              }
              alt="Previous"
              width={24}
              height={24}
              className="rotate-180"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-transparent mb-20"
            aria-label="Next features"
          >
            <Image
              src={
                canGoNext
                  ? '/images/arrow-right-black.svg'
                  : '/images/arrow-right-grey.svg'
              }
              alt="Next"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
