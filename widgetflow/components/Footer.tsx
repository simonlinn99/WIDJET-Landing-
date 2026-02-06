import React from 'react';
import { Button } from './ui/Button';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Final CTA */}
        <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-12 text-center mb-20 relative overflow-hidden">
           {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Turn Visitors Into Customers?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of companies who chose simplicity.</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 hover:text-orange-700 border-none">
              Start Free - No Credit Card Required
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-slate-800 pb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Sparkles size={18} fill="currentColor" />
                </div>
                <span className="text-xl font-bold">WidgetFlow</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Empowering businesses to grow with no-code interactive widgets.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={14} />
                <span>GDPR Compliant • SSL Secured</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} WidgetFlow Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};