
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">TRIVIUM</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Pioneering the global transition into the AI-native era. We build the core neural infrastructure for the world's most innovative teams.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Products</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Agent Forge</Link></li>
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Neural Canvas</Link></li>
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Insights API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link></li>
              <li><Link to="/insights" className="hover:text-indigo-600 transition-colors">Insights</Link></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <p>© 2024 TRIVIUM Technologies & Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
