import React from 'react';
import { IMAGES } from '../constants';

export const Methodology: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Methodology</h2>

      {/* Methodology Figure */}
      <div className="mb-8 flex justify-center">
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm w-full">
            <img
            src={IMAGES.methodology}
            alt="Medical SAM3 Methodology Architecture"
            className="w-full h-auto rounded-lg"
            />
        </div>
      </div>

      <p className="text-gray-600 text-base text-center max-w-4xl mx-auto leading-relaxed">
        <strong>Figure: Medical SAM3 Architecture.</strong> The framework integrates a Prompt Encoder and Image Encoder to process text prompts and image inputs respectively. A Detector identifies masks in the current frame, while a Tracker propagates masks from previous frames (using a Memory Bank for temporal context). The outputs are combined to produce the final segmentation.
      </p>
    </section>
  );
};