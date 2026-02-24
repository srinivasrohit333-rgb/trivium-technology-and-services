gh auth status
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import InfoModal from '../components/InfoModal';

const Home: React.FC = () => {
  const [modal, setModal] = useState<{isOpen: boolean; title: string; content: string; icon: string}>({
    isOpen: false,
    title: '',
    content: '',
    icon: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const showInfo = (title: string, content: string, icon: string) => {
    setModal({ isOpen: true, title, content, icon });
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Texture & Neural Background */}
      <div className="fixed inset-0 noise-bg pointer-events-none z-50"></div>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Nodes (Static/Animated only) */}
        <div className="absolute top-20 left-[10%] w-4 h-4 rounded-full bg-indigo-500/20 blur-sm"></div>
        <div className="absolute top-[40%] right-[15%] w-8 h-8 rounded-full bg-purple-500/10 blur-md"></div>
        <div className="absolute bottom-[20%] left-[20%] w-3 h-3 rounded-full bg-emerald-500/20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full opacity-60"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-100 bg-white/80 backdrop-blur-sm mb-10 animate-fade-in shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">TRIVIUM OS V4.0 IS LIVE</span>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-[10rem] font-black leading-tight tracking-[-0.05em] mb-8 text-slate-900">
              <span className="block">Human-level</span>
              <span className="block text-indigo-600">Intelligence.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 [animation-delay:200ms]">
              Next-generation AI agents for enterprise automation. Designed for builders who demand precision, safety, and creative freedom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in [animation-delay:400ms]">
            <Link to="/product/ai-business" className="px-10 py-4 btn-premium text-sm uppercase tracking-widest min-w-[200px]">
              Deploy Agency
            </Link>
            <button 
              onClick={() => showInfo("Architectural Audit", "Our systems analyze your data flow to create optimized neural paths. We don't just add AI; we re-engineer efficiency.", "fa-brain")}
              className="px-10 py-4 btn-premium-outline text-sm uppercase tracking-widest min-w-[200px]"
            >
              Watch Demo
            </button>
          </div>

          {/* Feature Bar */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-xl">
            {[
              { label: 'Latency', value: '< 15ms', icon: 'fa-bolt' },
              { label: 'Uptime', value: '99.99%', icon: 'fa-shield' },
              { label: 'Encryption', value: 'E2E AES', icon: 'fa-lock' },
              { label: 'Tokens/Sec', value: '500k+', icon: 'fa-microchip' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 hover:bg-slate-50 transition-colors group">
                <i className={`fa-solid ${stat.icon} text-slate-300 group-hover:text-indigo-600 transition-colors mb-4 block`}></i>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform for Scale Section */}
      <section 
        ref={sectionRef}
        className="py-40 bg-white border-t border-slate-100 relative overflow-hidden"
      >
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              A Conversational AI Platform <br /> built for scale
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Left Column Features */}
            <div className="space-y-px h-full">
              <Link to="/product/ai-apps" className="bg-white p-12 h-1/2 flex flex-col justify-center hover:bg-slate-50 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Flexible SDKs</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Embed conversational AI into apps, sites, and systems with SDKs for JavaScript, Python, Swift, and more.
                </p>
              </Link>
              <Link to="/product/ai-business" className="bg-white p-12 h-1/2 flex flex-col justify-center hover:bg-slate-50 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bring your own LLM</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Easily connect GPT-4, Claude, Gemini, or proprietary models to tailor performance and privacy.
                </p>
              </Link>
            </div>

            {/* Central Animated Orb Visual (Static Layout) */}
            <div className="bg-slate-50 relative p-12 h-[500px] lg:h-full flex flex-col items-center justify-center overflow-hidden border-x border-slate-100">
               <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
               
               <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                  <div className="absolute w-40 h-40 bg-indigo-500/20 rounded-full animate-ripple"></div>
                  <div className="absolute w-40 h-40 bg-indigo-500/15 rounded-full animate-ripple [animation-delay:1s]"></div>

                  <div className="absolute w-64 h-64 bg-indigo-200/20 animate-morph blur-3xl"></div>

                  <div className="relative w-48 h-48 rounded-full border border-indigo-200 bg-white flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 animate-morph shadow-inner opacity-90"></div>
                    <div className="relative z-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <i className="fa-solid fa-microphone text-white text-4xl drop-shadow-lg animate-bounce-slow"></i>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/40 border-t-transparent animate-spin-slow"></div>
                  </div>
               </div>
            </div>

            {/* Right Column Features */}
            <div className="space-y-px h-full">
              <div className="bg-white p-12 h-1/2 flex flex-col justify-center hover:bg-slate-50 transition-colors cursor-default">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Low latency</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Responses are generated and delivered in real time, even during high-concurrency traffic. Sub-second turnaround.
                </p>
              </div>
              <Link to="/product/ai-insights" className="bg-white p-12 h-1/2 flex flex-col justify-center hover:bg-slate-50 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">RAG</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Use Retrieval-Augmented Generation to pull from your own documents and sources. Index files and URLs instantly.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-40 bg-white border-t border-slate-100 relative">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-slate-900">Designed for <br/><span className="text-slate-400">Precision.</span></h2>
              <p className="text-slate-500 text-lg">Integrated infrastructure that powers the world's most intelligent products.</p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2 group">
              Explore Products <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Agent Forge", 
                desc: "Low-latency autonomous agents that execute multi-step workflows with human-like reasoning.", 
                icon: "fa-robot",
                tag: "BETA",
                path: "/product/ai-automation"
              },
              { 
                title: "Neural Canvas", 
                desc: "Ultra-high performance web interfaces designed dynamically based on user intent.", 
                icon: "fa-wand-magic-sparkles",
                tag: "NEW",
                path: "/product/ai-websites"
              },
              { 
                title: "Insights API", 
                desc: "Deep analytical snapshots of your business performance, delivered via structured endpoints.", 
                icon: "fa-chart-network",
                tag: "V4.2",
                path: "/product/ai-insights"
              }
            ].map((product, i) => (
              <Link to={product.path} key={i} className="premium-card p-10 rounded-3xl flex flex-col h-full group">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <i className={`fa-solid ${product.icon} text-xl`}></i>
                  </div>
                  <span className="text-[8px] font-black tracking-[0.3em] text-indigo-600 border border-indigo-100 bg-indigo-50 px-2 py-1 rounded-md">{product.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{product.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-10 flex-1">{product.desc}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 group">
                  Learn more <i className="fa-solid fa-chevron-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InfoModal 
        isOpen={modal.isOpen} 
        onClose={() => setModal({...modal, isOpen: false})} 
        title={modal.title} 
        content={modal.content}
        icon={modal.icon}
      />
    </div>
  );
};

export default Home;
