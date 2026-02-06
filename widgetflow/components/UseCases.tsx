import React from 'react';
import { ShoppingBag, Laptop, PenTool, Briefcase } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      result: "Boost sales by 35%",
      desc: "Smart popups and countdown timers that drive urgency.",
      img: "https://picsum.photos/400/250?random=1"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "SaaS/Tech",
      result: "Qualify leads faster",
      desc: "Multi-step forms and automated booking widgets.",
      img: "https://picsum.photos/400/250?random=2"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Creators",
      result: "Monetize traffic",
      desc: "Newsletter and exclusive membership widgets.",
      img: "https://picsum.photos/400/250?random=3"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Agencies",
      result: "White-label solution",
      desc: "Deliver custom widgets to clients in minutes, not days.",
      img: "https://picsum.photos/400/250?random=4"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for every business model</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-32 bg-slate-100 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <div className="text-sm font-semibold text-green-600 mb-2">{item.result}</div>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};