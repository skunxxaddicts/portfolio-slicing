'use client';

import * as React from 'react';
import Image from 'next/image';

interface MessageErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MessageErrorModal({ isOpen, onClose }: MessageErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-black/70">
      <div className="relative w-[361px] h-[381px] lg:w-[518px] lg:h-[449px] rounded-2xl bg-white shadow-2xl">
        {/* Envelope with X - Positioned to overflow top */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-24 z-10">
          <Image
            src="/images/Message-failed.svg"
            alt="Message failed"
            width={262}
            height={293}
            className="object-contain mt-10"
          />
        </div>

        {/* Gradient Header */}
        <div className="relative h-[183px] lg:h-[225px] bg-neutral-200 rounded-t-2xl"></div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 lg:px-8 lg:py-8 text-center h-[198px] lg:h-[224px] bg-white rounded-b-2xl flex flex-col justify-center gap-4">
          <div>
            <h3 className="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold text-neutral-950">
              Message Failed to Send
            </h3>
            <p className="text-sm lg:text-md text-neutral-700">
              Sorry about that. Please check your connection and try again.
            </p>
          </div>

          {/* Try Again Button */}
          <button
            onClick={onClose}
            className="w-full h-[44px] lg:w-[454px] lg:h-[48px] lg:mt-4 rounded-full bg-primary-300 lg:text-sm font-bold text-white transition-colors hover:bg-primary-400 flex items-center justify-center gap-1"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageErrorModal;
