import React from 'react';
import { BarChart3, MessageSquare, PieChart, MoreHorizontal, Send, User } from 'lucide-react';

export const HeroVisuals: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] perspective-1000">
      
      {/* Central Card - Chat Interface */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-20 transition-transform hover:scale-[1.02] duration-500">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm font-semibold text-slate-400">New chat</div>
          <div className="text-pink-500"><SparklesIcon /></div>
        </div>
        
        <div className="flex justify-center mb-8">
           <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-orange-300 to-pink-500 flex items-center justify-center shadow-lg shadow-pink-200">
              <SparklesIcon className="text-white h-8 w-8" />
           </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="text-center text-slate-600 text-sm">
            Provide a detailed summary of my company's latest investment including key metrics.
          </div>
          <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-500 border border-slate-100">
            What are the key performance trends for my company this quarter?
          </div>
        </div>

        {/* Input Bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs">+</div>
          <input 
            disabled
            type="text" 
            value="Ask or search for anything" 
            className="w-full bg-white border border-slate-200 rounded-full py-3 pl-10 pr-10 text-sm text-slate-400 shadow-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300"><XCircleIcon /></div>
        </div>
      </div>

      {/* Floating Card Left Top - Stats */}
      <div className="hidden md:block absolute left-0 top-20 w-48 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white z-30 animate-float">
        <div className="flex justify-between items-start mb-2">
          <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <PieChart size={16} />
          </div>
          <MoreHorizontal size={14} className="text-slate-300" />
        </div>
        <div className="text-2xl font-bold text-slate-800">48%</div>
        <div className="text-xs text-slate-500">The best deals for this year</div>
      </div>

      {/* Floating Card Left Bottom - Sales */}
      <div className="hidden md:block absolute left-10 bottom-20 w-52 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white z-30 animate-float-delayed">
        <div className="flex justify-between mb-3">
          <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <BarChart3 size={16} />
          </div>
          <div className="text-xs font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+6.9% ↑</div>
        </div>
        <div className="text-xs text-slate-400 mb-1">Sales</div>
        <div className="text-2xl font-bold text-slate-800">$7,854.21</div>
        <div className="text-[10px] text-slate-400">Previous year ($2,1340)</div>
      </div>

      {/* Floating Card Right Top - Figures */}
      <div className="hidden md:block absolute right-0 top-10 w-56 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white z-10 animate-float-delayed">
        <div className="flex justify-between items-start mb-2">
            <div className="text-xs font-semibold text-slate-500">Sales Figures</div>
            <div className="h-2 w-2 rounded-full bg-red-400"></div>
        </div>
        <div className="text-xl font-bold text-slate-800 mb-1">$4,686.82</div>
        <div className="text-[10px] text-slate-400 mb-3">Marketing Sales</div>
        <div className="flex gap-1 items-end h-8">
            <div className="flex-1 bg-orange-100 rounded-t h-[40%]"></div>
            <div className="flex-1 bg-orange-200 rounded-t h-[70%]"></div>
            <div className="flex-1 bg-orange-300 rounded-t h-[50%]"></div>
            <div className="flex-1 bg-orange-400 rounded-t h-[90%]"></div>
            <div className="flex-1 bg-orange-200 rounded-t h-[60%]"></div>
        </div>
      </div>

       {/* Floating Card Right Bottom - Radial */}
       <div className="hidden md:block absolute right-8 bottom-32 w-48 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white z-30 animate-float">
        <div className="flex justify-between items-start mb-2">
             <div className="text-[10px] font-semibold text-slate-400">Average Total Sales</div>
            <MoreHorizontal size={14} className="text-slate-300" />
        </div>
        <div className="flex items-center justify-center py-2 relative">
            <svg viewBox="0 0 36 36" className="w-20 h-20">
                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-purple-500" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-slate-800">88%</span>
                <span className="text-[8px] text-slate-400">Target Level</span>
            </div>
        </div>
      </div>

    </div>
  );
};

const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.75 12.75l-1.5-5.25-1.5 5.25-5.25 1.5 5.25 1.5 1.5 5.25 1.5-5.25 5.25-1.5-5.25-1.5z" opacity="0.5"/>
    <path d="M17.25 8.25L16.5 5.5l-.75 2.75-2.75.75 2.75.75.75 2.75.75-2.75 2.75-.75-2.75-.75z"/>
  </svg>
);

const XCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
)
