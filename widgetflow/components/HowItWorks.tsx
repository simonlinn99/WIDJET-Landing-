import React from 'react';
import { MousePointerClick, Palette, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="h-6 w-6 text-orange-600" />,
      title: "Pick Your Widget",
      description: "Choose from chat, contact forms, popups, calendars, and 20+ ready-to-use templates.",
      bg: "bg-orange-100"
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Customize Everything",
      description: "Adapt colors, text, and behavior with an intuitive visual editor. No coding required.",
      bg: "bg-purple-100"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Go Live in One Click",
      description: "Copy a code snippet or use native integrations with WordPress, Shopify, Webflow, and more.",
      bg: "bg-blue-100"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-lg text-slate-600">Three simple steps to supercharge your website's interactivity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className={`h-24 w-24 rounded-3xl ${step.bg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 h-8 w-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-sm font-bold text-slate-400">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};