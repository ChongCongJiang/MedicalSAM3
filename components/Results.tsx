import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { INTERNAL_DATA, EXTERNAL_DATA } from '../constants';

export const Results: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">State-of-the-Art Performance</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* LEFT COLUMN: CHARTS (Takes up 3/5 width) */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-8">

            {/* Chart 1: Internal Validation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center self-start z-10 relative">
                 <span className="w-2 h-8 bg-indigo-500 rounded mr-3"></span>
                 Internal Validation
              </h3>
              <div className="h-[400px] w-full transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer origin-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={INTERNAL_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="SAM 3"
                      dataKey="SAM3"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      fill="#cbd5e1"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Medical SAM3"
                      dataKey="MedicalSAM3"
                      stroke="#4f46e5"
                      strokeWidth={3}
                      fill="#6366f1"
                      fillOpacity={0.5}
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#334155' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: External Validation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center self-start z-10 relative">
                <span className="w-2 h-8 bg-brand-600 rounded mr-3"></span>
                External Validation
              </h3>
              <div className="h-[350px] w-full transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer origin-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={EXTERNAL_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="SAM 3"
                      dataKey="SAM3"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      fill="#cbd5e1"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Medical SAM3"
                      dataKey="MedicalSAM3"
                      stroke="#0284c7"
                      strokeWidth={3}
                      fill="#0ea5e9"
                      fillOpacity={0.5}
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#334155' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SUMMARY (Takes up 2/5 width) */}
          <div className="lg:col-span-2 space-y-8 sticky top-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gray-900 rounded mr-3"></span>
                Performance Summary
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-brand-700 mb-3">Significant External Generalization</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    On 7 external datasets (TN3K, HC18, CVC, ETIS, PH2, CHASE, STARE) which were unseen during training, Medical SAM3 achieves superior segmentation accuracy, significantly outperforming the vanilla SAM3 baseline. The blue area in the radar chart demonstrates the model's robust zero-shot transfer capabilities across different domains.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-bold text-indigo-700 mb-3">Comprehensive Internal Mastery</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Across 10 diverse internal validation tasks spanning various modalities (Retina, Pathology, Ultrasound, etc.), Medical SAM3 (purple area) consistently covers a larger area than SAM3, indicating a comprehensive improvement in domain-specific medical understanding.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-4">Improvement Overview (Avg. Dice)</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 text-base font-medium">External Tasks</span>
                    <span className="text-lg font-bold text-brand-600">11.9% → 73.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                    <div className="bg-brand-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 text-base font-medium">Internal Tasks</span>
                    <span className="text-lg font-bold text-indigo-600">54.0% → 77.0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '77%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 text-base italic">
              "The radar charts highlight Medical SAM3's capability to maintain high performance across varied medical imaging tasks, eliminating the 'performance collapse' often seen in general-purpose models."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};