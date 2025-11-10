'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'Do you work on freelance or remote projects?',
    answer:
      "Yes! I work with clients remotely from all over the world. I'm experienced in asynchronous communication and use modern collaboration tools to ensure smooth project delivery regardless of time zones.",
  },
  {
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely! I specialize in translating design files from Figma, Sketch, Adobe XD, and other design tools into clean, maintainable, and responsive code. I pay close attention to every detail to ensure pixel-perfect implementation.',
  },
  {
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I work seamlessly with backend developers and cross-functional teams. I have experience integrating with REST APIs, GraphQL, and various backend technologies. Clear communication and collaboration are key parts of my workflow.',
  },
  {
    question: 'Are you available for full-time roles?',
    answer:
      "I'm open to discussing both freelance projects and full-time opportunities. Feel free to reach out to discuss your specific needs and we can explore the best working arrangement.",
  },
];

export function FAQ({
  title = "Let's Clear Things Up",
  subtitle = "I've answered a few questions that usually come up when working with a frontend developer like me.",
  faqs = defaultFAQs,
  className,
  ...props
}: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<string>('item-0');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      className={cn('w-full bg-neutral-100', className)}
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[120px] py-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <motion.div
            className="mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="mb-4 text-display-3xl lg:text-display-xl font-bold text-neutral-950 leading-tight">
              {title}
            </h2>
            <p className="text-sm lg:text-md font-regular lg:font-medium text-neutral-950 leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={openIndex}
            onValueChange={setOpenIndex}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    'py-2',
                    index < faqs.length - 1 && 'border-b border-neutral-300'
                  )}
                >
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-2 lg:gap-4">
                    <div className="flex items-start gap-3 lg:gap-6">
                      <span className="text-lg lg:text-display-xs font-semibold text-neutral-950 min-w-[32px] lg:min-w-[40px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg lg:text-display-xs font-semibold text-neutral-950 text-left">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={cn(
                        'flex items-center justify-center h-8 lg:h-12 w-8 lg:w-12 rounded-full shrink-0 transition-colors',
                        openIndex === `item-${index}`
                          ? 'bg-primary-300'
                          : 'bg-white border-2 border-neutral-300'
                      )}
                      aria-label="Toggle"
                    >
                      <Image
                        src={
                          openIndex === `item-${index}`
                            ? '/images/plus.svg'
                            : '/images/minus.svg'
                        }
                        alt={
                          openIndex === `item-${index}` ? 'Expand' : 'Collapse'
                        }
                        width={16}
                        height={16}
                        className="lg:w-5 lg:h-5"
                      />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[47px] lg:pl-[88px] pr-12 lg:pr-16 pt-1 text-sm lg:text-md font-medium text-neutral-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
