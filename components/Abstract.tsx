import React from 'react';

export const Abstract: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Title moved outside the box */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Abstract</h2>

      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
        <p className="text-gray-800 text-lg leading-loose text-justify font-normal">
          Promptable segmentation foundation models such as SAM3 have demonstrated strong generalization capabilities through interactive and concept-based prompting. However, their direct applicability to medical image segmentation remains limited by severe domain shifts, the absence of privileged spatial prompts, and the need to reason over complex anatomical and volumetric structures.
          <br /><br />
          Here we present <strong className="text-brand-600 font-semibold">Medical SAM3</strong>, a foundation model for universal prompt-driven medical image segmentation, obtained by fully fine-tuning SAM3 on large-scale, heterogeneous 2D and 3D medical imaging datasets with paired segmentation masks and text prompts.
          <br /><br />
          Through a systematic analysis of vanilla SAM3, we observe that its performance degrades substantially on medical data, with its apparent competitiveness largely relying on strong geometric priors such as ground-truth-derived bounding boxes. By fine-tuning SAM3’s model parameters on 33 datasets spanning 10 medical imaging modalities, Medical SAM3 acquires robust domain-specific representations while preserving prompt-driven flexibility.
        </p>
      </div>
    </section>
  );
};