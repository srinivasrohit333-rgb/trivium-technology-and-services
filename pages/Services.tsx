
import React, { useState } from 'react';
// Added Link to imports from react-router-dom
import { useNavigate, Link } from 'react-router-dom';
import InfoModal from '../components/InfoModal';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState({ isOpen: false, title: '', content: '', icon: '' });

  const allServices = [
    {
      title: "Agent Forge",
      desc: "Architect multi-step AI agents that integrate directly into your existing infrastructure via secure webhooks.",
      icon: "fa-robot",
      info: "Forge supports long-context window models with state-persistence, allowing agents to remember complex business logic across sessions.",
      path: "/product/ai-automation"
    },
    {
      title: "Neural UI",
      desc: "Front-end interfaces that rebuild themselves in real-time based on user behavioral data and goal completion metrics.",
      icon: "fa-wand-magic-sparkles",
      info: "Our Neural UI library uses a lightweight runtime to swap components instantly, ensuring frictionless conversion paths.",
      path: "/product/ai-websites"
    },
    {
      title: "Cognitive API",
      desc: "Access structured reasoning, image interpretation, and real-time research tools through a single enterprise endpoint.",
      icon: "fa-code",
      info: "The Cognitive API includes built-in safety filters and RAG (Retrieval Augmented Generation) capabilities for zero-hallucination results.",
      path: "/product/ai-apps"
    },
    {
      title: "Vortex Data",
      desc: "Massive-scale data processing engine that turns unorganized logs into hyper-structured vector databases.",
      icon: "fa-hurricane",
      info: "Vortex handles millions of events per second with automatic metadata tagging and semantic search optimization.",
      path: "/insights"
    },
    {
      title: "Sentinel Security",
      desc: "Enterprise-grade red teaming and safety monitoring for all your deployed AI systems and model weights.",
      icon: "fa-shield-halved",
      info: "Sentinel provides real-time injection attack detection and automated compliance reporting for SOC2 and GDPR.",
      path: "/product/ai-business"
    },
    {
      title: "Pulse Analytics",
      desc: "Minimalist observability for AI performance. Track token usage, model drift, and agent success rates.",
      icon: "fa-chart-network",
      info: "Pulse integrates directly into Slack and Datadog to keep your team informed of your agency's health.",
      path: "/insights"
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-white relative">
      <div className="fixed inset-0 noise-bg pointer-events-none z-50"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl mb-32 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]">The <span className="text-slate-300">Infrastructure</span> <br/> of Intelligence.</h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl">Every component you need to deploy enterprise-grade AI at the speed of thought.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <div 
              key={idx} 
              className="premium-card p-12 rounded-[2.5rem] flex flex-col h-full group cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-12 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                <i className={`fa-solid ${service.icon} text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-12 flex-1">{service.desc}</p>
              <button 
                className="w-full py-4 btn-premium-outline text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white"
              >
                Inspect Documentation
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-40 p-16 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Ready to deploy?</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg font-medium">Connect your first agent in less than 5 minutes. No credit card required to start building.</p>
            <div className="flex gap-4">
               <button className="px-12 py-5 bg-white text-slate-900 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">Get API Key</button>
               <Link to="/pricing" className="px-12 py-5 border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">Explore Pricing</Link>
            </div>
          </div>
        </div>
      </div>

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

export default Services;
