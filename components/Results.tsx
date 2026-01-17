import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { INTERNAL_DATA_DICE, EXTERNAL_DATA_DICE, INTERNAL_DATA_IOU, EXTERNAL_DATA_IOU } from '../constants';

export const Results: React.FC = () => {
  const [metric, setMetric] = useState<'dice' | 'iou'>('dice');

  const internalData = metric === 'dice' ? INTERNAL_DATA_DICE : INTERNAL_DATA_IOU;
  const externalData = metric === 'dice' ? EXTERNAL_DATA_DICE : EXTERNAL_DATA_IOU;

  // Calculate averages for the summary
  const calculateAvg = (data: any[], key: string) => {
    const sum = data.reduce((acc, curr) => acc + curr[key], 0);
    return (sum / data.length).toFixed(1);
  };

  const avgInternalSam3 = calculateAvg(internalData, 'SAM3');
  const avgInternalMedSam3 = calculateAvg(internalData, 'MedicalSAM3');

  const avgExternalSam3 = calculateAvg(externalData, 'SAM3');
  const avgExternalMedSam3 = calculateAvg(externalData, 'MedicalSAM3');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER SECTION: Centered Title & Toggle (Moved OUTSIDE the box) */}
        <div className="flex flex-col items-center justify-center mb-10 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Performance</h2>

          {/* METRIC TOGGLE */}
          <div className="bg-gray-100 p-1 rounded-lg inline-flex shadow-inner border border-gray-200">
            <button
              onClick={() => setMetric('dice')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                metric === 'dice' 
                  ? 'bg-white text-brand-600 shadow-sm ring-1 ring-gray-200' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dice Score
            </button>
            <button
              onClick={() => setMetric('iou')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                metric === 'iou' 
                  ? 'bg-white text-brand-600 shadow-sm ring-1 ring-gray-200' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              IoU Score
            </button>
          </div>
        </div>

        {/* Main Container Box: Now wraps ONLY the Charts and Summary */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* LEFT COLUMN: CHARTS (Takes up 3/5 width) */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-8">

              {/* Chart 1: Internal Validation */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center self-start z-10 relative">
                   <span className="w-2 h-8 bg-indigo-500 rounded mr-3"></span>
                   Internal Validation
                </h3>
                <div className="h-[400px] w-full transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer origin-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={internalData}>
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
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center self-start z-10 relative">
                  <span className="w-2 h-8 bg-brand-600 rounded mr-3"></span>
                  External Validation
                </h3>
                <div className="h-[350px] w-full transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer origin-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={externalData}>
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
                    <h4 className="text-lg font-bold text-brand-700 mb-3">Significant Generalization Gains</h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Medical SAM3 demonstrates consistent superiority across both internal and external datasets.
                      Whether measured by <strong>Dice</strong> (overlap) or <strong>IoU</strong> (intersection over union),
                      our model significantly outperforms the vanilla SAM3 baseline, particularly in unseen external domains where zero-shot capability is critical.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs text-gray-500 uppercase tracking-wide font-bold">
                        Average {metric === 'dice' ? 'Dice Score' : 'IoU Score'}
                      </span>
                      <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600 font-mono">
                        {metric.toUpperCase()}
                      </span>
                    </div>

                    {/* External Bar */}
                    <div className="mb-6">
                      <div className="flex items-end justify-between mb-2">
                        <span className="text-gray-700 font-medium">External Tasks</span>
                        <div className="text-right">
                          <span className="text-gray-400 text-sm line-through mr-2">{avgExternalSam3}%</span>
                          <span className="text-xl font-bold text-brand-600">{avgExternalMedSam3}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
                        <div className="bg-gray-400 h-full opacity-50" style={{ width: `${avgExternalSam3}%` }}></div>
                        <div className="bg-brand-600 h-full" style={{ width: `${Number(avgExternalMedSam3) - Number(avgExternalSam3)}%` }}></div>
                      </div>
                      <div className="mt-1 text-right text-xs text-green-600 font-semibold">
                        +{ (Number(avgExternalMedSam3) - Number(avgExternalSam3)).toFixed(1) }% Improvement
                      </div>
                    </div>

                    {/* Internal Bar */}
                    <div>
                      <div className="flex items-end justify-between mb-2">
                        <span className="text-gray-700 font-medium">Internal Tasks</span>
                        <div className="text-right">
                          <span className="text-gray-400 text-sm line-through mr-2">{avgInternalSam3}%</span>
                          <span className="text-xl font-bold text-indigo-600">{avgInternalMedSam3}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
                        <div className="bg-gray-400 h-full opacity-50" style={{ width: `${avgInternalSam3}%` }}></div>
                        <div className="bg-indigo-600 h-full" style={{ width: `${Number(avgInternalMedSam3) - Number(avgInternalSam3)}%` }}></div>
                      </div>
                       <div className="mt-1 text-right text-xs text-green-600 font-semibold">
                        +{ (Number(avgInternalMedSam3) - Number(avgInternalSam3)).toFixed(1) }% Improvement
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Robustness Across Metrics</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The gap between SAM3 and Medical SAM3 remains substantial regardless of the metric used.
                      {metric === 'iou'
                        ? ' Even with the stricter IoU metric, Medical SAM3 maintains high boundary precision.'
                        : ' The high Dice scores reflect excellent volumetric overlap with ground truth masks.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};