import React, { useState } from 'react';
import { VISUAL_SCENARIOS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Visuals: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(VISUAL_SCENARIOS[0].id);

  // Find the currently active scenario data
  const activeScenario = VISUAL_SCENARIOS.find(s => s.id === activeId) || VISUAL_SCENARIOS[0];

  return (
    <section className="py-20 bg-white border-t border-gray-100" id="visuals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Qualitative Comparison</h2>

        {/* 1. TAB NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {VISUAL_SCENARIOS.map((scenario) => {
            const isActive = activeId === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveId(scenario.id)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border
                  ${isActive 
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-300 hover:bg-gray-50'}
                `}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>

        {/* 2. IMAGE GALLERY DISPLAY */}
        <div className="animate-fade-in">
          {/* Header for the current scenario */}
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="w-2 h-8 bg-brand-600 rounded mr-3"></span>
              {activeScenario.label}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* COLUMN 1: INPUT */}
            <div className="group flex flex-col">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <img
                  src={activeScenario.images.raw}
                  alt="Input"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-200">
                  Input Image
                </span>
              </div>
            </div>

            {/* COLUMN 2: GT */}
            <div className="group flex flex-col">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-green-200 shadow-sm bg-green-50/30">
                <img
                  src={activeScenario.images.gt}
                  alt="Ground Truth"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  Ground Truth
                </span>
              </div>
            </div>

            {/* COLUMN 3: SAM 3 */}
            <div className="group flex flex-col opacity-90 hover:opacity-100 transition-opacity">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-red-200 shadow-sm bg-red-50/30 grayscale-[20%]">
                <img
                  src={activeScenario.images.sam3}
                  alt="SAM 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                  SAM 3
                </span>
              </div>
            </div>

            {/* COLUMN 4: OURS (Highlighted) */}
            <div className="group flex flex-col relative z-10">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-400 to-brand-600 rounded-[18px] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-brand-500 shadow-xl bg-white">
                <img
                  src={activeScenario.images.medsam3}
                  alt="Medical SAM3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg tracking-wide">
                  OURS
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-600 text-white text-sm font-bold shadow-md shadow-brand-200">
                  Medical SAM3
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};