import React, { useState } from 'react';
import { VISUAL_SCENARIOS } from '../constants';

export const Visuals: React.FC = () => {
  // Default to the middle one expanded for balance
  const [activeId, setActiveId] = useState<string>(VISUAL_SCENARIOS[2].id);

  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Qualitative Comparison</h2>
        {/* Description text removed */}
        <div className="mb-12"></div>

        {/* EXPANDING IMAGE GALLERY */}
        <div className="flex flex-col lg:flex-row h-[800px] w-full gap-3">
          {VISUAL_SCENARIOS.map((scenario) => {
            const isActive = activeId === scenario.id;

            return (
              <div
                key={scenario.id}
                onMouseEnter={() => setActiveId(scenario.id)}
                className={`
                  relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border
                  ${isActive 
                    ? 'lg:flex-[4] flex-[4] bg-white border-gray-200 shadow-2xl ring-1 ring-gray-100' 
                    : 'lg:flex-[0.5] flex-[1] bg-gray-50 border-gray-200 hover:bg-gray-100'}
                `}
              >
                {/* ACTIVE STATE: FULL GRID COMPARISON */}
                {isActive && (
                  <div className="absolute inset-0 p-6 flex flex-col animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-1.5 h-8 bg-brand-600 rounded mr-3"></span>
                      {scenario.label}
                    </h3>

                    <div className="flex-1 grid grid-cols-2 gap-6 h-full min-h-0">

                      {/* Original */}
                      <div className="flex flex-col h-full min-h-0">
                        <div className="relative flex-1 rounded-t-xl overflow-hidden border border-gray-200 border-b-0 group">
                          <img src={scenario.images.raw} alt="Raw" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-b-xl p-3 text-center text-sm font-semibold text-gray-700">
                          Input Image
                        </div>
                      </div>

                      {/* GT */}
                      <div className="flex flex-col h-full min-h-0">
                        <div className="relative flex-1 rounded-t-xl overflow-hidden border border-gray-200 border-b-0 group">
                          <img src={scenario.images.gt} alt="GT" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-green-50 border border-green-100 rounded-b-xl p-3 text-center text-sm font-semibold text-green-700">
                          Ground Truth
                        </div>
                      </div>

                      {/* SAM 3 */}
                      <div className="flex flex-col h-full min-h-0">
                        <div className="relative flex-1 rounded-t-xl overflow-hidden border border-red-100 border-b-0 group bg-gray-100">
                          <img src={scenario.images.sam3} alt="SAM3" className="w-full h-full object-cover grayscale opacity-90" />
                        </div>
                        <div className="bg-red-50 border border-red-100 rounded-b-xl p-3 text-center text-sm font-semibold text-red-700">
                          SAM 3
                        </div>
                      </div>

                      {/* Medical SAM3 */}
                      <div className="flex flex-col h-full min-h-0 shadow-lg shadow-brand-100/50 rounded-xl">
                        <div className="relative flex-1 rounded-t-xl overflow-hidden border-2 border-brand-500 border-b-0 group">
                          <img src={scenario.images.medsam3} alt="Medical SAM3" className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3 bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
                            OURS
                          </div>
                        </div>
                        <div className="bg-brand-600 border-2 border-brand-600 rounded-b-xl p-3 text-center text-sm font-bold text-white">
                          Medical SAM3
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* INACTIVE STATE: VERTICAL LABEL */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-400 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap group-hover:text-gray-600 transition-colors">
                      {scenario.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};