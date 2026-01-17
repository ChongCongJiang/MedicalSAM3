import React from 'react';

export const Abstract: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Title moved outside the box */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Abstract</h2>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <p className="text-gray-800 text-lg leading-relaxed text-justify font-normal">
          Promptable segmentation foundation models such as SAM3 have demonstrated strong generalization capabilities through interactive and concept-based prompting. However, their direct applicability to medical image segmentation remains limited by severe domain shifts, the absence of privileged spatial prompts, and the need to reason over complex anatomical and volumetric structures.
          <br /><br />
          Here we present <strong className="text-brand-600 font-semibold">Medical SAM3</strong>, a foundation model for universal prompt-driven medical image segmentation, obtained by fully fine-tuning SAM3 on large-scale, heterogeneous 2D and 3D medical imaging datasets with paired segmentation masks and text prompts.
          <br /><br />
          Through a systematic analysis of vanilla SAM3, we observe that its performance degrades substantially on medical data, with its apparent competitiveness largely relying on strong geometric priors such as ground-truth-derived bounding boxes. These findings motivate full model adaptation beyond prompt engineering alone. By fine-tuning SAM3’s model parameters on 33 datasets spanning 10 medical imaging modalities, Medical SAM3 acquires robust domain-specific representations while preserving prompt-driven flexibility. Extensive experiments across organs, imaging modalities, and dimensionalities demonstrate consistent and significant performance gains, particularly in challenging scenarios characterized by semantic ambiguity, complex morphology, and long-range 3D context. Our results establish Medical SAM3 as a universal, text-guided segmentation foundation model for medical imaging and highlight the importance of holistic model adaptation for achieving robust prompt-driven segmentation under severe domain shift.
        </p>
      </div>
    </section>
  );
};