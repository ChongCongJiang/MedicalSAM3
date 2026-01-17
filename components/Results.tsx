import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { RADAR_DATA_INTERNAL } from '../constants';

export const Results: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">State-of-the-Art Performance</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Medical SAM3 demonstrates consistent and significant performance gains across organs, imaging modalities, and dimensionalities compared to the vanilla SAM3 baseline.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Wrapper */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Internal Validation (Dice Score %)</h3>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA_INTERNAL}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  
                  <Radar
                    name="SAM 3"
                    dataKey="SAM3"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    fill="#94a3b8"
                    fillOpacity={0.1}
                  />
                  <Radar
                    name="Medical SAM3 (Ours)"
                    dataKey="MedicalSAM3"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    fill="#0ea5e9"
                    fillOpacity={0.4}
                  />
                  <Legend />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Substantial Gains on Medical Data</h3>
              <p className="text-gray-600">
                On internal validation tasks, Medical SAM3 improves average Dice score from <strong>54.0% to 77.0%</strong> (+23.0%). 
                The improvements are even more striking on external validation sets, jumping from <strong>11.9% to 73.9%</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Internal Dice Avg</div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-brand-600">77.0%</span>
                    <span className="text-sm text-green-600 font-medium mb-1">↑ 23.0%</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">vs 54.0% (SAM3)</div>
               </div>
               <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">External Dice Avg</div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-brand-600">73.9%</span>
                    <span className="text-sm text-green-600 font-medium mb-1">↑ 62.0%</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">vs 11.9% (SAM3)</div>
               </div>
            </div>

            <p className="text-sm text-gray-500 italic">
              "The most striking recovery occurs in endoscopic polyp segmentation (CVC and ETIS), where the baseline SAM3 suffers catastrophic failure due to weak text-visual alignment; in contrast, Medical SAM3 successfully grounds the target."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};