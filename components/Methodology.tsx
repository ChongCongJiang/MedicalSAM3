import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Universal Prompt-Driven Segmentation</h2>
      
      {/* Concept Image / Teaser */}
      <div className="mb-12">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="bg-gray-100 p-2 text-xs text-center text-gray-500 font-mono">
            Figure 1: Overview of Universal Medical Image Segmentation
          </div>
          {/* Creating a CSS-based schematic representation of Figure 1 */}
          <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 bg-white">
            <div className="flex-1 space-y-4">
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-sm mb-2 text-center">Input Modalities</h3>
              <div className="grid grid-cols-3 gap-2">
                 {['Ultrasound', 'Laparoscopy', 'Fundus', 'CT', 'Pathology', 'Dermoscopy'].map((mod, i) => (
                   <div key={i} className="aspect-square bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-medium relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gray-300 group-hover:bg-brand-100 transition-colors"></div>
                     <span className="relative z-10">{mod}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-gray-400">
               <div className="text-2xl font-bold">+</div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-sm mb-2 text-center">Text Prompts</h3>
              <div className="space-y-2">
                {['Fetal Head', 'Liver', 'Retinal Vessel', 'Lung Nodule'].map((txt, i) => (
                  <div key={i} className="bg-orange-50 border border-orange-200 text-orange-800 px-3 py-1.5 rounded-md text-sm text-center shadow-sm">
                    💬 "{txt}"
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-brand-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>

            <div className="flex-1 text-center">
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 text-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center h-full min-h-[160px]">
                <div className="text-4xl mb-2">🧬</div>
                <h3 className="text-xl font-bold">Medical SAM3</h3>
                <p className="text-xs text-brand-100 mt-2">Foundation Model</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm text-center max-w-3xl mx-auto">
          Medical SAM3 unifies diverse medical imaging modalities—ranging from radiology (CT, MRI, X-Ray) to optical imaging (Fundus, Dermoscopy) and pathology—into a single framework driven purely by text prompts, without requiring bounding boxes.
        </p>
      </div>
    </section>
  );
};