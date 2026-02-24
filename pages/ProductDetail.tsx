
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ProductInfo {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

const productData: Record<string, ProductInfo> = {
  'ai-business': {
    title: "AI Business",
    subtitle: "Enterprise Strategy & Core Integration",
    description: "Trivium's flagship business layer that re-engineers your organizational DNA with adaptive intelligence. We don't just solve problems; we prevent them through predictive modeling.",
    icon: "fa-briefcase",
    features: ["Strategic Roadmapping", "Custom LLM Fine-tuning", "Cross-departmental AI Audits"],
    color: "indigo"
  },
  'ai-websites': {
    title: "AI Powered Websites",
    subtitle: "Websites that Think and Evolve",
    description: "Experience the next evolution of the web. Our Creative Platform generates high-conversion, dynamic web environments that adapt to every individual user's intent in real-time.",
    icon: "fa-wand-magic-sparkles",
    features: ["Dynamic Layout Generation", "Predictive UX Flows", "A/B Testing on Autopilot"],
    color: "purple"
  },
  'ai-apps': {
    title: "AI Apps",
    subtitle: "Software with a Neural Pulse",
    description: "Our Developers framework allows for the rapid deployment of intelligent applications. From customer-facing tools to complex backend processors, build with unparalleled speed.",
    icon: "fa-code",
    features: ["Agentic Workflows", "Multi-modal Processing", "Serverless AI Runtime"],
    color: "blue"
  },
  'ai-automation': {
    title: "Business Automation",
    subtitle: "Zero Friction Operations",
    description: "Deploy the Agents Platform to eliminate repetitive tasks. Our autonomous agents handle complex multi-step workflows with human-level reasoning and extreme precision.",
    icon: "fa-robot",
    features: ["Autonomous Email Handling", "Data Pipeline Automation", "CRM Intelligence Agents"],
    color: "emerald"
  },
  'ai-insights': {
    title: "AI Insights",
    subtitle: "Data into Decisiveness",
    description: "The Resources platform transforms raw noise into clear, actionable business strategies. Use our advanced analytics engines to see patterns before your competitors do.",
    icon: "fa-chart-network",
    features: ["Real-time Semantic Search", "Trend Forecasting", "Sentiment Analysis Engines"],
    color: "rose"
  }
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId || ''] || productData['ai-business'];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 noise-bg opacity-10 pointer-events-none"></div>
      
      {/* Static Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-${product.color}-500/5 blur-[120px] rounded-full animate-morph`}></div>
        <div className={`absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full`}></div>
      </div>

      <section className="relative pt-48 pb-32">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
               <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-${product.color}-100 bg-${product.color}-50 mb-8`}>
                  <i className={`fa-solid ${product.icon} text-${product.color}-600 text-xs`}></i>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-${product.color}-600`}>{product.subtitle}</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.9]">
                  {product.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
               </h1>
               <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
                  {product.description}
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl">
                    Get Started Now
                  </button>
                  <Link to="/services" className="px-10 py-4 border border-slate-200 rounded-full font-bold text-xs uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-all text-center">
                    Explore All
                  </Link>
               </div>
            </div>

            <div className="relative aspect-square flex items-center justify-center">
              <div className={`absolute inset-0 bg-${product.color}-500/10 blur-[60px] rounded-full animate-pulse-slow`}></div>
              <div className="w-full h-full bg-white border border-slate-100 rounded-[3rem] shadow-2xl overflow-hidden p-12 flex flex-col items-center justify-center group">
                 <div className={`w-32 h-32 bg-${product.color}-600 rounded-full flex items-center justify-center text-white text-5xl shadow-2xl animate-morph`}>
                    <i className={`fa-solid ${product.icon}`}></i>
                 </div>
                 <div className="mt-12 space-y-4 w-full">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className={`w-2 h-2 rounded-full bg-${product.color}-500`}></div>
                        <span className="text-xs font-bold text-slate-700 tracking-tight uppercase">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-8">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Built for the future.</h2>
              <p className="text-slate-500">Every deployment includes our 24/7 dedicated AI support system and enterprise-grade security as standard.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Deployment", value: "Instant", icon: "fa-bolt" },
                { label: "Compliance", value: "SOC2 / GDPR", icon: "fa-shield-check" },
                { label: "Uptime", value: "99.99%", icon: "fa-check-double" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                  <i className={`fa-solid ${item.icon} text-slate-300 text-3xl mb-6`}></i>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
