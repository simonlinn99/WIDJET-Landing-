import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600">Start for free, upgrade as you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Plan</h3>
            <p className="text-slate-500 mb-6">Perfect to get started</p>
            <div className="text-4xl font-extrabold text-slate-900 mb-8">$0<span className="text-lg font-normal text-slate-400">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              {['2 active widgets', '1,000 views/month', 'Basic templates', 'Branded widgets'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-slate-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Start Free</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-orange-200 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Plan</h3>
            <p className="text-slate-500 mb-6">For serious growth</p>
            <div className="text-4xl font-extrabold text-slate-900 mb-8">$29<span className="text-lg font-normal text-slate-400">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              {[
                  'Unlimited widgets', 
                  'Unlimited views', 
                  'Remove branding', 
                  'Advanced analytics', 
                  'Premium integrations',
                  'Priority support'
                ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-orange-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-slate-900 to-slate-800">Get Started Pro</Button>
          </div>
        </div>
      </div>
    </section>
  );
};