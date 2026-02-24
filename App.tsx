
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import IntroAnimation from './components/IntroAnimation';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Insights = lazy(() => import('./pages/Insights'));
const Login = lazy(() => import('./pages/Login'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.debug("Scroll reset skipped", e);
    }
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/20">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] animate-pulse">Syncing Neural Context...</p>
            </div>
          </div>
        }>
          {children}
        </Suspense>
      </main>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <Chatbot />}
    </div>
  );
};

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('trivium-intro-seen');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('trivium-intro-seen', 'true');
    setShowIntro(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {!showIntro && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={
              <div className="pt-48 pb-24 text-center bg-white min-h-screen">
                <h1 className="text-6xl font-black mb-6 text-slate-900">About <span className="text-indigo-600">TRIVIUM</span></h1>
                <p className="max-w-xl mx-auto text-slate-500 text-lg leading-relaxed font-medium">
                  We are building the tools that will power the next century of digital evolution.
                </p>
              </div>
            } />
          </Routes>
        </Layout>
      )}
    </Router>
  );
};

export default App;
