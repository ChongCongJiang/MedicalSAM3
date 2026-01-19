import React from 'react';
import { LINKS } from '../constants';

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
           <a href={LINKS.paper} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-2">Paper</a>
           &bull;
           <a href={LINKS.code} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-2">Code</a>
           &bull;
           <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-2">Demo</a>
        </div>
      </div>
    </footer>
  );
};