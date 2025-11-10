'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TestimonialsProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  rating?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
    author: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    image: '/images/sarah.svg',
    rating: 5,
  },
  {
    quote:
      'Edwin delivered exceptional quality work on our project. His attention to detail and ability to translate design into pixel-perfect code is outstanding.',
    author: 'Michael Jordan',
    role: 'Chicago Bulls',
    image: '/images/michael.png',
    rating: 5,
  },
  {
    quote:
      'Professional, reliable, and incredibly talented. Edwin transformed our vision into a beautiful, functional website that our users love.',
    author: 'Amy Lee',
    role: 'Evanesence',
    image: '/images/amy.jpeg',
    rating: 5,
  },
];

export function Testimonials({
  title = 'What They Say About Working With Me',
  subtitle = "Real words from clients, teammates, and mentors I've collaborated with on various projects.",
  testimonials = defaultTestimonials,
  className,
  ...props
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < testimonials.length - 1;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={cn('w-full bg-white mb-0', className)} {...props} ref={ref}>
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:px-8 xl:px-[120px]">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 px-2 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-3 sm:mb-4 mx-auto text-display-3xl sm:text-display-xl md:text-display-xl lg:text-display-xl font-bold text-neutral-950 leading-normal sm:leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-md font-medium text-neutral-950 leading-relaxed mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="relative mx-auto w-[353px] lg:w-[1200px] pb-19"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Background Cards - visible at bottom */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[21px] w-[95%] lg:w-[91%] h-[84%] lg:h-[83%] rounded-2xl lg:rounded-4xl bg-[#D4A0B3] z-10"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[42px] w-[85%] lg:w-[83%] h-[82%] lg:h-[83%] rounded-2xl lg:rounded-4xl bg-[#B76080]/20"></div>

          {/* Main Card */}
          <div className="relative z-20 w-full h-[478px] lg:h-[378px] flex flex-col justify-center rounded-2xl lg:rounded-4xl bg-primary-300 pt-8 pb-8 px-10">
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/star.svg"
                  alt="Star"
                  width={24}
                  height={24}
                />
              ))}
            </div>

            {/* Quote */}
            <div className="mb-8">
              <p className="text-lg sm:text-display-xs md:text-display-xs font-semibold leading-relaxed text-white text-center">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              {currentTestimonial.image ? (
                <div className="relative h-14 sm:h-16 w-14 sm:w-16 overflow-hidden rounded-full bg-white">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-white text-xl sm:text-2xl font-bold text-pink-600">
                  {currentTestimonial.author.charAt(0)}
                </div>
              )}

              <div className="text-center">
                <div className="font-bold text-white text-base sm:text-lg">
                  {currentTestimonial.author}
                </div>
                <div className="text-xs sm:text-sm text-white/80">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation - Completely separate from card */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 -mt-4 sm:-mt-0">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-transparent"
            aria-label="Previous testimonial"
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-transparent"
            aria-label="Next testimonial"
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

export default Testimonials;
