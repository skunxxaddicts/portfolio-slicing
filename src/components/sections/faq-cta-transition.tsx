'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function FAQCTATransition({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('relative hidden lg:block', className)} {...props}>
      {/* Man Illustration - Desktop only, positioned to span FAQ and CTA */}
      <motion.div
        className="absolute right-1/4 -translate-x-1/4 top-1 -translate-y-1/5 z-30"
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/man.svg"
          alt="Contact illustration"
          width={193}
          height={71}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

export default FAQCTATransition;
