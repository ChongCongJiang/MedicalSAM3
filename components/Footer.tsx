import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p className="mb-2">
          Project page for <strong>Medical SAM3</strong>.
        </p>
        <p>
          The code and model weights are available for research purposes.
        </p>
        <div className="mt-4">
           <a href="#" className="text-brand-600 hover:underline mx-2">Paper</a>
           &bull;
           <a href="https://github.com/AIM-Research-Lab/Medical-SAM3" className="text-brand-600 hover:underline mx-2">GitHub</a>
        </div>
      </div>
    </footer>
  );
};