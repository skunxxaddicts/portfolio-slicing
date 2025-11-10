'use client';

import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/ui/navbar';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollAttempted, setScrollAttempted] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (!scrollAttempted && window.scrollY > 10) {
        // First scroll detected - trigger animation and prevent scroll
        e.preventDefault();
        setScrollAttempted(true);
        setIsAnimating(true);
        setHasScrolled(true);

        // Keep page at top
        window.scrollTo(0, 0);

        // After animation completes (2 seconds - badge is last at 1.2s delay + 0.8s duration), allow scrolling
        setTimeout(() => {
          setIsAnimating(false);
        }, 2000);
      } else if (isAnimating) {
        // Still animating - prevent scroll
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!scrollAttempted || isAnimating) {
        e.preventDefault();
        if (!scrollAttempted) {
          setScrollAttempted(true);
          setIsAnimating(true);
          setHasScrolled(true);

          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollAttempted, isAnimating]);

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen lg:h-screen overflow-hidden bg-[#A53860]/98"
    >
      {/* Background Layer with 227.svg */}
      {/* Mobile */}
      <div
        className="absolute lg:hidden"
        style={{
          top: '-1px',
          left: '-290px',
          width: '1780px',
          height: '890px',
          mixBlendMode: 'luminosity',
          opacity: 0.06,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/227.svg"
          alt="Background Layer"
          width={1780}
          height={890}
          className="w-full h-full"
        />
      </div>
      {/* Desktop */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: '-1px',
          left: '-200px',
          width: '2138px',
          height: '1069px',
          mixBlendMode: 'luminosity',
          opacity: 0.06,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/227.svg"
          alt="Background Layer"
          width={2138}
          height={1069}
          className="w-full h-full"
        />
      </div>

      {/* Navbar */}
      <div className="absolute left-4 right-4 lg:left-1/2 lg:right-auto top-8 z-20 lg:-translate-x-1/2">
        <Navbar />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {/* Main Content Grid */}
        <div className="relative mx-auto h-full w-full max-w-[1440px] px-4 lg:px-16 xl:px-[120px]">
          {/* Left Side - Tech Stack Icons - Hidden on mobile */}
          <div className="absolute bottom-[507px] left-16 xl:left-[120px] hidden lg:flex h-[408px] w-[113px] flex-col items-center justify-center gap-[22px] rounded-full border-2 border-primary-300 bg-transparent px-[21.5px] py-[34px]">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-primary-300">
              <Image
                src="/images/JS.svg"
                alt="JavaScript"
                width={51}
                height={51}
              />
            </div>
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-primary-300">
              <Image src="/images/CSS.svg" alt="CSS" width={35} height={41} />
            </div>
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-primary-300">
              <Image
                src="/images/HTML5.svg"
                alt="HTML5"
                width={40}
                height={40}
              />
            </div>
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-primary-300">
              <Image
                src="/images/REACT.svg"
                alt="React"
                width={44}
                height={40}
              />
            </div>
          </div>

          {/* Center - Title & Image - Desktop */}
          <div className="absolute left-1/2 top-1/2 hidden w-[658px] -translate-x-1/2 -translate-y-[calc(60%)] flex-col items-center lg:flex">
            {/* Profile Image */}
            <motion.div
              className="absolute top-[52px] z-10"
              initial={{ y: 400, scale: 0.3, opacity: 0 }}
              animate={hasScrolled ? { y: 0, scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Image
                src="/images/hero.svg"
                alt="Hero"
                width={610}
                height={735}
              />
            </motion.div>

            {/* Main Title - Overlaying Image */}
            <div className="relative mb-[38px] mt-5">
              <Image
                src="/images/frontend.svg"
                alt="Frontend Developer"
                width={658}
                height={398}
              />

              <div className="absolute left-0 top-0 z-20">
                <Image
                  src="/images/developer.svg"
                  alt="Developer"
                  width={658}
                  height={398}
                />
              </div>

              <motion.div
                className="absolute left-[-82px] top-[-36px] z-20"
                initial={{ y: -200, opacity: 0 }}
                animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <Image
                  src="/images/Junior.svg"
                  alt="Junior"
                  width={202}
                  height={142}
                />
              </motion.div>

              <motion.div
                className="absolute left-[-100px] top-[136px] -z-10"
                initial={{ x: 200, y: -200, opacity: 0, rotate: -180 }}
                animate={
                  hasScrolled ? { x: 0, y: 0, opacity: 1, rotate: 0 } : {}
                }
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              >
                <Image
                  src="/images/metallica.svg"
                  alt="Metallica"
                  width={200}
                  height={241}
                />
              </motion.div>

              <motion.div
                className="absolute right-[-10px] top-[500px] -z-10"
                initial={{ x: -200, y: -200, opacity: 0, rotate: -120 }}
                animate={
                  hasScrolled ? { x: 0, y: 0, opacity: 1, rotate: 58 } : {}
                }
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/images/metallica.svg"
                  alt="Metallica2"
                  width={200}
                  height={241}
                />
              </motion.div>
            </div>
          </div>

          {/* Center - Title & Image - Mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex w-full max-w-full flex-col items-center lg:hidden">
            {/* Profile Image */}
            <motion.div
              className="relative z-10 ml-5"
              initial={{ y: 300, scale: 0.3, opacity: 0 }}
              animate={hasScrolled ? { y: 0, scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Image
                src="/images/hero.svg"
                alt="Hero"
                width={610}
                height={735}
                className="w-[372px] h-[450px]"
              />
            </motion.div>

            {/* Mobile Title Overlay */}
            <div className="absolute bottom-[157px] left-0 right-0 flex flex-col items-center">
              {/* Metallica Left */}
              <motion.div
                className="absolute left-[-26px] top-[110px] -z-10"
                initial={{ x: 150, y: -150, opacity: 0, rotate: -160 }}
                animate={
                  hasScrolled ? { x: 0, y: 0, opacity: 1, rotate: 22 } : {}
                }
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              >
                <Image
                  src="/images/metallica.svg"
                  alt="Metallica"
                  width={75}
                  height={75}
                />
              </motion.div>

              {/* Metallica Right */}
              <motion.div
                className="absolute right-[-22px] top-[250px] -z-10"
                initial={{ x: -150, y: -150, opacity: 0, rotate: -180 }}
                animate={
                  hasScrolled ? { x: 0, y: 0, opacity: 1, rotate: 0 } : {}
                }
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/images/metallica.svg"
                  alt="Metallica2"
                  width={130}
                  height={130}
                />
              </motion.div>

              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="-mb-12 -translate-x-31 translate-y-2 z-20"
              >
                <Image
                  src="/images/Junior.svg"
                  alt="Junior"
                  width={116}
                  height={81}
                />
              </motion.div>
              <Image
                src="/images/frontend.svg"
                alt="Frontend"
                width={375}
                height={227}
              />
              <Image
                src="/images/developer.svg"
                alt="Developer"
                width={375}
                height={227}
                className="absolute bottom-0 z-30"
              />
            </div>
          </div>

          {/* Left Content - Top on mobile, Bottom Left on desktop */}
          <div className="absolute top-[100px] lg:top-auto lg:bottom-[90px] left-0 right-0 lg:left-16 xl:left-[120px] lg:right-auto px-4 lg:px-0 space-y-3 lg:space-y-6 lg:max-w-[400px] lg:py-18">
            {/* Microphone Button */}
            <a
              href="https://wa.me/6285156094033"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[48px] lg:h-[63px] w-[48px] lg:w-[63px] items-center justify-center rounded-full border-2 border-primary-300 backdrop-blur-sm transition-all hover:bg-secondary-100"
            >
              <Image
                src="/images/Mic.svg"
                alt="Microphone"
                width={19}
                height={27}
              />
            </a>

            {/* Greeting */}
            <motion.h2
              className="text-md lg:text-xl font-bold lg:text-bold leading-tight text-white"
              initial={{ opacity: 0 }}
              animate={hasScrolled ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              Hi, I&apos;m Edwin Anderson
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm lg:text-md font-medium leading-relaxed text-white lg:w-[500px]"
              initial={{ opacity: 0 }}
              animate={hasScrolled ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            >
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </motion.p>
          </div>

          {/* Right Side - Stats - Below content on mobile, right side on desktop */}
          <div className="absolute left-0 right-0 lg:left-auto lg:right-16 xl:right-[120px] top-[300px] lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:space-y-1 lg:block">
            <div className="relative grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-1 px-4 lg:px-0">
              <div className="pb-3 lg:pb-8 text-left lg:border-b lg:border-primary-300 lg:border-r-0 border-r border-primary-300">
                <div className="text-display-md lg:text-display-2xl font-bold leading-tight text-white">
                  2+
                </div>
                <div className="text-xs lg:text-md font-semibold text-white">
                  Years Experience
                </div>
              </div>
              <div className="pb-3 lg:pb-8 pl-4 lg:pl-0 text-left lg:border-b lg:border-primary-300">
                <div className="text-display-md lg:text-display-2xl font-bold leading-tight text-white">
                  99%
                </div>
                <div className="text-xs lg:text-md font-semibold text-white">
                  Client Satisfaction
                </div>
              </div>
              <div className="pb-3 lg:pb-8 text-left lg:border-b lg:border-primary-300 lg:border-r-0 border-r border-primary-300">
                <div className="text-display-md lg:text-display-2xl font-bold leading-tight text-white">
                  3
                </div>
                <div className="text-xs lg:text-md font-semibold text-white">
                  Project Delivered
                </div>
              </div>
              <div className="pb-3 lg:pb-8 pl-4 lg:pl-0 text-left">
                <div className="text-display-md lg:text-display-2xl font-bold leading-tight text-white">
                  50
                </div>
                <div className="text-xs lg:text-md font-semibold text-white">
                  Clients Worldwide
                </div>
              </div>

              {/* Contact Button */}
              <div className="col-span-2 flex justify-center lg:col-span-1 lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="group h-12 lg:h-auto w-[361px] lg:w-auto lg:min-w-[222px]"
                  asChild
                >
                  <a href="#contact">
                    Contact Me
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 lg:h-10 w-8 lg:w-10 items-center justify-center rounded-full bg-black">
                      <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </Button>
              </div>

              {/* Available for Hire Badge - Mobile */}
              <div className="col-span-2 flex justify-center lg:hidden">
                <motion.div
                  className="flex mt-8 items-center gap-2 rounded-full bg-primary-400 px-4 py-2"
                  initial={{ y: -100, opacity: 0 }}
                  animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <div className="h-[8px] w-[8px] rounded-full bg-[#E26190]" />
                  <span className="text-display-sm font-medium text-white whitespace-nowrap">
                    Available for Hire
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Available for Hire Badge - Desktop */}
          <motion.div
            className="absolute top-[220px] left-[623px] hidden lg:flex w-[195px] h-[38px] items-center gap-[6px] rounded-full bg-primary-400 px-4 py-1"
            initial={{ y: -100, opacity: 0 }}
            animate={hasScrolled ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className="h-4 w-4 rounded-full bg-[#E26190]" />
            <span className="text-md font-semibold text-white whitespace-nowrap">
              Available for Hire
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex h-[24px] lg:h-auto w-[93px] lg:w-auto items-center gap-1 lg:gap-2">
        <motion.p
          className="text-display-xs lg:text-md font-semibold text-white whitespace-nowrap"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/images/Mouse.svg"
            alt="Scroll"
            width={32}
            height={48}
            className="w-[20px] lg:w-[32px] h-[20px] lg:h-[48px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
