
import React from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const industries = [
    { title: "AI Business Apps", icon: "fa-rocket", desc: "Build tools that change industries." },
    { title: "AI Automation", icon: "fa-robot", desc: "Save thousands of hours effortlessly." },
    { title: "AI Insights", icon: "fa-chart-line", desc: "Clear, beautiful data storytelling." },
    { title: "AI Web Design", icon: "fa-pen-nib", desc: "Creative sites that think for you." }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_40px_80px_rgba(0,0,0,0.1)] p-8 md:p-12 animate-scale-up overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all z-10"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Deploy <span className="text-indigo-600">Intelligence</span></h2>
          <p className="text-slate-500 max-w-md mx-auto">Select a starting node for your enterprise AI ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((item, idx) => (
            <button 
              key={idx}
              className="group relative p-6 bg-white border border-slate-100 rounded-[1.5rem] text-left hover:border-indigo-500/30 hover:bg-slate-50 transition-all duration-300 active:scale-95 shadow-sm"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
                <i className={`fa-solid ${item.icon} text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
              <i className="fa-solid fa-chevron-right absolute top-6 right-6 text-slate-200 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"></i>
            </button>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 py-4 btn-premium text-[12px] uppercase tracking-widest flex items-center justify-center gap-3">
            Speak with Strategist
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
          <button onClick={onClose} className="px-8 py-4 btn-premium-outline text-[12px] uppercase tracking-widest">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
