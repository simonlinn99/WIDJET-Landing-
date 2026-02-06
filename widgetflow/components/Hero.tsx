import React, { useState } from 'react';
import { Button } from './ui/Button';
import { HeroVisuals } from './HeroVisuals';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks! We'll send early access info to ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[50%] bg-pink-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] bg-purple-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-medium text-slate-600">v2.0 is now live</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Build Professional Widgets in <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">3 Clicks.</span> <br/>
          <span className="text-slate-800">Zero Code.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your website into an interactive powerhouse. Chat, forms, calendars and more. Live in 60 seconds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 h-11 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all placeholder:text-slate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" className="whitespace-nowrap group">
                    Start Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </form>
            <div className="hidden sm:block text-slate-300">|</div>
             <button className="flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors">
                <PlayCircle size={20} />
                <span>Watch Demo</span>
            </button>
        </div>

        {/* Visuals */}
        <HeroVisuals />

      </div>
    </section>
  );
};