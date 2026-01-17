import React from 'react';
import { AUTHORS, AFFILIATIONS, LINKS, PROJECT_INFO, IMAGES } from '../constants';
import { Github, FileText, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Overview Image inserted before title */}
      <div className="mb-8 flex justify-center">
        <img
          src={IMAGES.teaser}
          alt="Project Overview"
          className="rounded-xl shadow-sm border border-gray-100 w-full h-auto object-contain"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
        <span className="text-brand-600">{PROJECT_INFO.title}</span>: {PROJECT_INFO.subtitle}
      </h1>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg text-gray-700 mb-4">
          {AUTHORS.map((author, idx) => (
            <span key={idx} className="whitespace-nowrap">
              {author.name}
              <sup className="ml-0.5 text-sm text-gray-500">{author.affiliation}</sup>
              {author.isCoFirst && <sup className="ml-0.5 text-gray-500">*</sup>}
              {author.isCorresponding && <sup className="ml-0.5 text-gray-500">†</sup>}
              {idx < AUTHORS.length - 1 && ","}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500 space-y-1">
          {AFFILIATIONS.map((aff, idx) => (
            <div key={idx}>{aff}</div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-400">
          * Co-first authors &nbsp; † Corresponding authors
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href={LINKS.paper}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          <FileText className="mr-2 h-5 w-5" />
          Paper
        </a>
        <a
          href={LINKS.code}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors"
        >
          <Github className="mr-2 h-5 w-5" />
          Code
        </a>
      </div>
    </section>
  );
};