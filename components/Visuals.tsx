import React from 'react';
import { IMAGES } from '../constants';

export const Visuals: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qualitative Comparison</h2>

      <div className="w-full flex justify-center">
        <img
          src={IMAGES.qualitativeComparison}
          alt="Qualitative Comparison: Image, GT, SAM 3, Medical SAM3"
          className="max-w-full h-auto rounded-xl shadow-lg border border-gray-200"
        />
      </div>

      <p className="text-center text-sm text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed">
        <strong>Figure 4:</strong> Visual comparisons showing Medical SAM3's ability to localize complex structures (e.g., thin vessels, irregular lesions) where standard SAM3 typically fails (producing empty masks, over-segmentation, or fractured regions) without box prompts.
      </p>
    </section>
  );
};