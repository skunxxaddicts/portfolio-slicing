'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyrightText?: string;
}

interface SocialLink {
  name: string;
  href: string;
  iconSrc: string;
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/', iconSrc: '/images/facebook.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/', iconSrc: '/images/instagram.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', iconSrc: '/images/linkedin.svg' },
  { name: 'TikTok', href: 'https://www.tiktok.com/', iconSrc: '/images/tiktok.svg' },
];

export function Footer({
  copyrightText,
  className,
  ...props
}: FooterProps) {
  const copyright = copyrightText || '© 2025 Edwin Anderson. All rights reserved.';

  return (
    <footer
      className={cn(
        'w-full bg-[#0A0D12]',
        className
      )}
      {...props}
    >
      {/* Mobile Layout */}
      <div className="w-[393px] h-[152px] mx-auto flex flex-col justify-start pt-12 pr-5 pb-16 pl-5 lg:hidden">
        {/* Social Links */}
        <div className="flex gap-5 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-colors hover:bg-neutral-800"
              aria-label={link.name}
            >
              <Image
                src={link.iconSrc}
                alt={link.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs font-normal text-neutral-25">
          {copyright}
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:w-[1440px] lg:h-[88px] lg:mx-auto lg:items-center lg:justify-between lg:pt-12 lg:pb-12 lg:px-[120px]">
        {/* Copyright */}
        <p className="text-base font-normal text-neutral-25">
          {copyright}
        </p>

        {/* Social Links */}
        <div className="flex gap-5 -mr-24">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-colors hover:bg-neutral-800"
              aria-label={link.name}
            >
              <Image
                src={link.iconSrc}
                alt={link.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
