'use client';

import * as React from 'react';
import Image from 'next/image';

interface MessageSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MessageSuccessModal({
  isOpen,
  onClose,
}: MessageSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-black/70">
      <div className="relative w-[361px] h-[381px] lg:w-[518px] lg:h-[449px] rounded-2xl bg-white shadow-2xl">
        {/* Envelope with Checkmark - Positioned to overflow top */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-24 z-10">
          <Image
            src="/images/Message-success.svg"
            alt="Message success"
            width={262}
            height={293}
            unoptimized
            className="w-[221px] h-[247px] lg:w-[262px] lg:h-[293px] object-contain mt-10"
          />
        </div>

        {/* Gradient Header */}
        <div className="relative h-[183px] lg:h-[225px] bg-[#F3B64C] rounded-t-2xl"></div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 lg:px-8 lg:py-8 text-center h-[198px] lg:h-[224px] bg-white rounded-b-2xl flex flex-col justify-center gap-4">
          <div>
            <h3 className="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold text-neutral-950">
              Got Your Message!
            </h3>
            <p className="text-sm lg:text-md text-neutral-700">
              Really appreciate you reaching out. I&apos;ll be in touch soon.
            </p>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="w-full h-[44px] lg:w-[454px] lg:h-[48px] lg:mt-4 rounded-full bg-primary-300 lg:text-sm font-bold text-white transition-colors hover:bg-primary-400 flex items-center justify-center gap-1"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageSuccessModal;
