
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GetStartedModal from './GetStartedModal';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Creative Platform', path: '/product/ai-websites' },
    { name: 'Agents Platform', path: '/product/ai-automation' },
    { name: 'Developers', path: '/product/ai-apps' },
    { name: 'Resources', path: '/insights' },
    { name: 'Enterprise', path: '/product/ai-business' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-slate-100' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-white font-black text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-500">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">Trivium</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 -mt-0.5">Technologies &amp; Services</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[13px] font-medium transition-colors ${isActive(item.path) ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden sm:block px-5 py-2 text-[13px] font-medium text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
            >
              Log in
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-slate-900 text-white text-[13px] font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm active:scale-95"
            >
              Sign up
            </button>
            <button className="lg:hidden text-slate-900 w-9 h-9 flex items-center justify-center border border-slate-100 rounded-full">
              <i className="fa-solid fa-bars-staggered text-sm"></i>
            </button>
          </div>
        </div>
      </nav>

      <GetStartedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
