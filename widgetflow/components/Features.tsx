import React from 'react';
import { Code2, Plug, Smartphone, BarChart2, LayoutTemplate, Sliders } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Code2 />,
      title: "No-Code, Zero Friction",
      desc: "No technical skills required. If you can use PowerPoint, you can use our builder.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <Plug />,
      title: "Native Integrations",
      desc: "Connect your widgets with Zapier, Google Sheets, CRMs, and 1000+ apps without complex setup.",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: <Smartphone />,
      title: "Mobile-First & Responsive",
      desc: "Your widgets automatically adapt to any device ensuring a perfect experience everywhere.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: <BarChart2 />,
      title: "Built-in Analytics",
      desc: "Track performance, conversions, and user behavior in real-time with detailed dashboards.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: <LayoutTemplate />,
      title: "Template Library",
      desc: "Start with tested, conversion-optimized templates for every use case imaginable.",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      icon: <Sliders />,
      title: "Full Customization",
      desc: "Complete control over CSS, triggers, display conditions, and automations.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
            <span className="text-sm font-semibold text-orange-600 tracking-wide uppercase bg-orange-100 px-3 py-1 rounded-full">Benefits</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 max-w-2xl">
                Why sales teams love our AI-Powered dashboard
            </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className={`h-12 w-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};