import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = [
  { q: "Do I need to know how to code?", a: "No, the builder is 100% visual. If you can use a presentation tool, you can build widgets with us." },
  { q: "Does it work with my website?", a: "Yes, compatible with any web platform including WordPress, Shopify, Webflow, React, and custom HTML sites." },
  { q: "Can I try it for free?", a: "Yes, we offer a permanent free plan with no credit card required so you can test the waters." },
  { q: "How long does it take?", a: "Most users publish their first widget in under 60 seconds." },
  { q: "Will widgets slow down my site?", a: "No, our code is heavily optimized and uses lazy loading to ensure zero impact on your page speed." },
  { q: "Can I export my data?", a: "Yes, CSV export is available on all plans, and API integrations are available on the Pro plan." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 bg-slate-50/50">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{item.q}</span>
                {openIndex === index ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};