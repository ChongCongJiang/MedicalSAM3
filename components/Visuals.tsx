import React from 'react';
import { IMAGES } from '../constants';

// Using placeholder colored blocks to represent segmentation masks concept
// In a real deployment, these would be actual image assets from the assets folder
const ImagePlaceholder: React.FC<{ label: string, color: string }> = ({ label, color }) => (
  <div className={`aspect-square w-full ${color} rounded-lg flex items-center justify-center relative overflow-hidden group`}>
    <span className="text-white font-bold opacity-50 group-hover:opacity-100 transition-opacity text-sm text-center px-2">
      {label}
    </span>
  </div>
);

export const Visuals: React.FC = () => {
  // Utilizing the centralized images constant
  const rows = [
    { name: "Retinal Vessels", gt: "bg-gray-900", sam3: "bg-gray-200", ours: "bg-brand-600", img: IMAGES.visuals.row1 },
    { name: "Colon Polyps", gt: "bg-gray-900", sam3: "bg-gray-200", ours: "bg-brand-600", img: IMAGES.visuals.row2 },
    { name: "Skin Lesion", gt: "bg-gray-900", sam3: "bg-gray-800", ours: "bg-brand-600", img: IMAGES.visuals.row3 },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qualitative Comparison</h2>
      
      <div className="grid grid-cols-4 gap-4 mb-4 text-center font-semibold text-gray-600 text-sm">
        <div>Input / Target</div>
        <div>Ground Truth</div>
        <div>SAM 3 (Text Only)</div>
        <div>Medical SAM3 (Ours)</div>
      </div>

      <div className="space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden relative">
               <img 
                 src={row.img} 
                 alt="Original" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-80"
               />
               <span className="absolute bottom-1 left-1 text-[10px] bg-white/80 px-1 rounded shadow-sm backdrop-blur-sm">{row.name}</span>
            </div>
            
            <ImagePlaceholder label="GT" color="bg-black" />
            
            {/* SAM3 Failure Case Representation */}
            <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 p-2">
                <div className="text-xs text-gray-400 text-center">
                    Failed or <br/>Over-segmented
                </div>
            </div>

            {/* Our Success Case */}
            <div className="relative aspect-square rounded-lg overflow-hidden group">
                 <img 
                 src={row.img}
                 alt="Original" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
               />
               <div className="absolute inset-0 bg-brand-500 mix-blend-multiply opacity-60"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-white font-bold drop-shadow-md group-hover:scale-110 transition-transform duration-300">Precise Mask</span>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
        <strong>Figure 4:</strong> Visual comparisons showing Medical SAM3's ability to localize thin structures (vessels) and ambiguous lesions where standard SAM3 typically fails or produces empty masks without box prompts.
      </p>
    </section>
  );
};