
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      desc: "Perfect for early-stage startups exploring AI integration.",
      features: ["Basic Chatbot Support", "Single Agent Instance", "Neural UI Components", "Standard Analytics"],
      cta: "Start Building",
      featured: false
    },
    {
      name: "Growth",
      price: "$1,499",
      desc: "Scaling businesses requiring robust automation pipelines.",
      features: ["24/7 Priority AI Strategist", "Unlimited Custom Agents", "Advanced RAG Capabilities", "Real-time Insight Dashboards", "White-label Options"],
      cta: "Scale Now",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Fortune 500 infra with dedicated neural resources.",
      features: ["Private LLM Deployment", "SOC2 Compliance Suite", "Custom API Integrations", "Direct Engineer Access", "SLA Guarantees"],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 noise-bg opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Simple. <span className="text-indigo-600">Powerful.</span></h1>
          <p className="text-xl text-slate-500 font-medium">Clear pricing for clear outcomes. Deploy intelligence without the complexity of hidden costs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative p-12 rounded-[3rem] border transition-all duration-500 group hover:-translate-y-2 ${tier.featured ? 'bg-slate-900 border-slate-900 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Most Deployed
                </div>
              )}
              <div className="mb-10">
                <h3 className={`text-xl font-bold mb-4 ${tier.featured ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className={`text-5xl font-black tracking-tight ${tier.featured ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                  {tier.price !== 'Custom' && <span className={`text-sm font-bold mb-1 ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>}
                </div>
                <p className={`text-sm leading-relaxed ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-12">
                {tier.features.map((f, i) => (
                  <li key={i} className={`flex items-center gap-3 text-xs font-bold tracking-tight uppercase ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                    <i className="fa-solid fa-check text-indigo-500"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all active:scale-95 ${tier.featured ? 'bg-white text-slate-900 hover:bg-slate-50 shadow-lg shadow-indigo-500/10' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Trusted by industry builders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <i className="fa-brands fa-stripe text-4xl"></i>
             <i className="fa-brands fa-airbnb text-4xl"></i>
             <i className="fa-brands fa-spotify text-4xl"></i>
             <i className="fa-brands fa-amazon text-4xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
