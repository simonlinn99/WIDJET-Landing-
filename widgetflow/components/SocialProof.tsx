import React from 'react';

export const SocialProof: React.FC = () => {
  const logos = [
    { name: 'Acme Corp', text: 'ACME' },
    { name: 'GlobalBank', text: 'GlobalBank' },
    { name: 'SaaS Inc', text: 'SaaS.io' },
    { name: 'Techno', text: 'Techno' },
    { name: 'BuildIt', text: 'BuildIt' },
  ];

  return (
    <section className="py-12 border-b border-slate-100 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">
            Trusted by 500+ companies generating 1M+ conversions daily
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text placeholders styled like logos for simplicity and no external assets */}
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
               <div className="h-8 w-8 bg-slate-200 rounded-md group-hover:bg-indigo-100 transition-colors"></div>
               <span className="text-xl font-bold text-slate-700 group-hover:text-indigo-900 transition-colors">{logo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};