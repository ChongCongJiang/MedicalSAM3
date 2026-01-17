import React from 'react';
import { AUTHORS, AFFILIATIONS, LINKS, PROJECT_INFO, IMAGES } from '../constants';
import { Github, FileText, Wand2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const isPdf = IMAGES.teaser.toLowerCase().endsWith('.pdf');

  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">

      {/* BACKGROUND DECORATION START */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        {/* Dot Pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Top Gradient Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-100/40 blur-[100px] rounded-full pointer-events-none opacity-60"></div>
      </div>
      {/* BACKGROUND DECORATION END */}

      <div className="max-w-5xl mx-auto">
        {/* Overview Image inserted before title */}
        <div className="mb-10 flex justify-center">
          <div className="w-full transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer rounded-2xl overflow-hidden border border-gray-200/60 shadow-lg bg-white/50 backdrop-blur-sm">
            {isPdf ? (
              <div className="relative w-full h-[500px] sm:h-[600px]">
                {/* PDF Embed */}
                <embed
                  src={IMAGES.teaser}
                  type="application/pdf"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
            ) : (
              <img
                src={IMAGES.teaser}
                alt="Project Overview"
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </div>

        <h1 className="mb-8">
          <span className="block text-5xl sm:text-6xl font-bold tracking-tight text-brand-600 mb-4 drop-shadow-sm">
            {PROJECT_INFO.title}
          </span>
          <span className="block text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            {PROJECT_INFO.subtitle}
          </span>
        </h1>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg text-gray-700 mb-4 font-medium">
            {AUTHORS.map((author, idx) => (
              <span key={idx} className="whitespace-nowrap hover:text-brand-600 transition-colors cursor-default">
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
          <div className="mt-3 text-xs text-gray-400">
            * Co-first authors &nbsp; † Corresponding authors
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={LINKS.paper}
            className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gray-900 hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Paper
          </a>
          <a
            href={LINKS.code}
            className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Code
          </a>
          <a
            href={LINKS.demo}
            className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
          >
            <Wand2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Interactive Demo
          </a>
        </div>
      </div>
    </section>
  );
};