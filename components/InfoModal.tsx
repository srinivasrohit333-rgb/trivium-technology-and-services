
import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  icon?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, content, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] p-10 md:p-14 animate-scale-up overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="flex flex-col items-center text-center">
          {icon && (
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 text-indigo-600">
              <i className={`fa-solid ${icon} text-2xl`}></i>
            </div>
          )}
          <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            {content}
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 btn-premium text-sm uppercase tracking-widest"
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
