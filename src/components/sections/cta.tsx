'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MessageErrorModal } from '@/components/ui/message-error-modal';
import { MessageSuccessModal } from '@/components/ui/message-success-modal';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  onFormSubmit?: (data: ContactFormData) => void;
}

const portfolioSvgs = [
  '/images/Portfolio1.svg',
  '/images/Portfolio2.svg',
  '/images/Portfolio3.svg',
];

export function CTA({
  title = "Let's Work Together",
  subtitle = "Have a project in mind or just want to say hi? Drop me a message — I'd love to hear from you.",
  onFormSubmit,
  className,
  ...props
}: CTAProps) {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [modalState, setModalState] = React.useState<
    'success' | 'error' | null
  >(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (onFormSubmit) {
        await onFormSubmit(formData);
      }
      // Show success modal
      setModalState('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Show error modal
      setModalState('error');
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className={cn('w-full bg-white py-20 lg:py-0', className)}
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[120px] -mt-12 sm:mt-2">
        <div className="grid gap-8 mt-2 lg:grid-cols-2 lg:gap-12">
          {/* Left: Content and Portfolio */}
          <motion.div
            className="space-y-8 lg:my-[120px]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Header */}
            <div>
              <h2 className="mb-4 text-display-3xl font-bold text-neutral-950 lg:text-display-xl">
                {title}
              </h2>
              <p className="text-sm font-medium text-neutral-950 lg:text-md lg:mr-1">
                {subtitle}
              </p>
            </div>

            {/* Portfolio Thumbnails - 3D Cards */}
            <div className="flex gap-4 items-center justify-start lg:gap-6">
              {portfolioSvgs.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[110px] h-[110px] lg:w-[142px] lg:h-[142px] transition-transform hover:scale-105"
                  style={{
                    transform: `perspective(1000px) rotateY(${
                      index === 0 ? '15deg' : index === 2 ? '-15deg' : '0deg'
                    }) rotateX(-5deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-md lg:rounded-2xl shadow-2xl">
                    <Image
                      src={image}
                      alt={`Portfolio preview ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Man Illustration + Contact Form */}
          <motion.div
            className="relative"
            style={{ perspective: '1000px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Man Illustration - Mobile only */}
            <motion.div
              className="relative z-10 mb-[-40px] mt-5 -translate-y-6 flex justify-center lg:hidden"
              initial={{ z: -200 }}
              whileInView={{ z: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image
                src="/images/man.svg"
                alt="Contact illustration"
                width={200}
                height={200}
                className="object-contain"
              />
            </motion.div>

            {/* Contact Form */}
            <div className="relative w-[361px] h-[456px] rounded-2xl bg-white p-6 shadow-[0_0_28px_rgba(0,0,0,0.1)] lg:w-[612px] lg:h-[504px] lg:rounded-4xl lg:p-8 lg:my-[120px]">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 lg:space-y-4 lg:gap-2"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-base font-semibold text-neutral-950"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-[328px] h-12 rounded-xl border border-neutral-300 bg-white px-2 py-2 text-base text-neutral-950 placeholder:text-neutral-600 transition-all lg:w-[548px] lg:px-5 focus:outline-none focus:border-gray-300/50"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-base font-semibold text-neutral-950"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-[328px] h-12 rounded-xl border border-neutral-300 bg-white px-2 py-2 text-base text-neutral-950 placeholder:text-neutral-600 transition-all lg:w-[548px] lg:px-5 [&:-webkit-autofill]:bg-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] focus:outline-none focus:border-gray-300/50"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-base font-semibold text-neutral-950"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-[329px] h-[134px] rounded-xl border border-neutral-300 bg-white px-2 py-2 text-base text-neutral-950 placeholder:text-neutral-600 resize-none transition-all lg:w-[548px] lg:px-5 focus:outline-none focus:border-gray-300/50"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-[329px] h-11 rounded-full bg-primary-300 px-2 py-2 text-base font-semibold text-white transition-colors hover:bg-primary-400 lg:w-[548px] lg:h-12"
                >
                  Let&apos;s Talk
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <MessageErrorModal
        isOpen={modalState === 'error'}
        onClose={() => setModalState(null)}
      />
      <MessageSuccessModal
        isOpen={modalState === 'success'}
        onClose={() => setModalState(null)}
      />
    </section>
  );
}

export default CTA;
