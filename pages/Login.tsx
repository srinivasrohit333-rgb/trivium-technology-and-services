
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden bg-slate-50">
      {/* Texture Layer */}
      <div className="fixed inset-0 noise-bg pointer-events-none z-50"></div>

      <div className="w-full max-w-md animate-fade-in z-10">
        <div className="mb-10 flex justify-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all duration-300 group shadow-sm"
          >
            <i className="fa-solid fa-chevron-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
            <span className="text-[11px] font-black uppercase tracking-[0.25em]">Return Home</span>
          </button>
        </div>

        <div className="text-center mb-10">
          <Link to="/" className="inline-flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 bg-slate-900 rounded-[1.4rem] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
              <span className="text-white font-black text-3xl tracking-tighter italic">T</span>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">TRIVIUM</h2>
              <p className="text-[9px] text-indigo-600 font-black tracking-[0.5em] uppercase mt-1">Intelligence</p>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mt-10 mb-2 text-slate-900">Console Access</h1>
          <p className="text-slate-400 text-sm font-medium">Manage your enterprise neural links</p>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl relative overflow-hidden">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Identity Profile</label>
              <input 
                type="email" 
                placeholder="user@trivium.ai" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-400 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Token Key</label>
                <a href="#" className="text-[10px] font-bold uppercase text-indigo-600 hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-400 transition-all font-medium"
              />
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.25em] text-[12px] shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Initiate Login
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <button className="w-full py-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-center gap-4 hover:bg-slate-50 transition-all group shadow-sm">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" alt="Google" />
              <span className="text-[11px] font-bold text-slate-700">Continue with Google</span>
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] mt-8">
              New Partner? <a href="#" className="text-indigo-600 hover:underline ml-1">Request Invite</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
