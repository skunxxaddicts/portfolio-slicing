'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skill' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({
  items = defaultNavItems,
  className,
  ...props
}: NavbarProps) {
  const [activeItem, setActiveItem] = React.useState(
    items.find((item) => item.active)?.label || items[0]?.label
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [glowingItem, setGlowingItem] = React.useState<string | null>(null);

  const handleClick = (label: string) => {
    setActiveItem(label);
    setGlowingItem(label);

    // Remove glow after animation completes
    setTimeout(() => {
      setGlowingItem(null);
    }, 800);
  };

  return (
    <>
      <nav
        className={cn(
          'h-12 rounded-full bg-base-black/20 shadow-lg backdrop-blur-2xl',
          'flex w-full items-center justify-between px-6',
          'lg:w-[553px] lg:justify-center lg:gap-8 lg:px-8',
          className
        )}
        {...props}
      >
        {/* Desktop Nav Items */}
        <div className="hidden lg:contents">
          {items.map((item) => (
            <motion.a
              key={`desktop-${item.label}`}
              href={item.href}
              onClick={() => handleClick(item.label)}
              className={cn(
                'text-base font-medium transition-colors text-white/70 hover:text-white relative'
              )}
              animate={{
                textShadow:
                  glowingItem === item.label
                    ? [
                        '0 0 8px rgba(255, 255, 255, 0.8)',
                        '0 0 16px rgba(255, 255, 255, 1)',
                        '0 0 24px rgba(255, 255, 255, 0.8)',
                        '0 0 8px rgba(255, 255, 255, 0)',
                      ]
                    : '0 0 0px rgba(255, 255, 255, 0)',
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Nav Items */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Logo/Brand */}
          <a href="#" className="text-2xl font-bold text-white">
            Edwin
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-base-black/20 lg:hidden">
          <div className="absolute top-[19px] left-[17px] w-[361px] h-[812px] bg-transparent backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Edwin</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <motion.a
                  key={`mobile-${item.label}`}
                  href={item.href}
                  onClick={() => {
                    handleClick(item.label);
                    setIsOpen(false);
                  }}
                  className="text-md font-medium text-white transition-colors hover:text-white/80"
                  animate={{
                    textShadow:
                      glowingItem === item.label
                        ? [
                            '0 0 8px rgba(255, 255, 255, 0.8)',
                            '0 0 16px rgba(255, 255, 255, 1)',
                            '0 0 24px rgba(255, 255, 255, 0.8)',
                            '0 0 8px rgba(255, 255, 255, 0)',
                          ]
                        : '0 0 0px rgba(255, 255, 255, 0)',
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
