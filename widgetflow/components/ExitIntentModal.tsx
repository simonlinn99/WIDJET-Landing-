import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { X } from 'lucide-react';

export const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X />
        </button>

        <div className="text-center">
          <div className="inline-block p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
            <span className="text-2xl">🎁</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Wait! Don't miss out.</h3>
          <p className="text-slate-600 mb-6">
            Get started today and we'll unlock <span className="font-bold text-slate-800">Premium Templates</span> for your first widget completely free.
          </p>
          <div className="flex flex-col gap-3">
             <Button className="w-full" onClick={() => setIsVisible(false)}>
               Claim Free Offer
             </Button>
             <button 
               onClick={() => setIsVisible(false)}
               className="text-sm text-slate-400 hover:text-slate-600 underline"
             >
               No thanks, I hate conversions
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};