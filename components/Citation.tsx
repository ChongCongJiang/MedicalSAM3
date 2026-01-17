import React from 'react';
import { BIBTEX } from '../constants';
import { Copy } from 'lucide-react';

export const Citation: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX);
    alert("Citation copied to clipboard!");
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Citation</h2>
      <div className="relative group">
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-white rounded-md shadow-sm border border-gray-200 text-gray-500 hover:text-brand-600 transition-colors opacity-0 group-hover:opacity-100"
          title="Copy BibTeX"
        >
          <Copy size={16} />
        </button>
        <pre className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner">
          {BIBTEX}
        </pre>
      </div>
    </section>
  );
};