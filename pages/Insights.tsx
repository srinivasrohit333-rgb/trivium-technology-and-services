
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', value: 400, efficiency: 240, savings: 2400 },
  { name: 'Feb', value: 300, efficiency: 139, savings: 2210 },
  { name: 'Mar', value: 600, efficiency: 980, savings: 2290 },
  { name: 'Apr', value: 800, efficiency: 390, savings: 2000 },
  { name: 'May', value: 500, efficiency: 480, savings: 2181 },
  { name: 'Jun', value: 900, efficiency: 380, savings: 2500 },
];

const Insights: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 relative">
      <div className="fixed inset-0 noise-bg pointer-events-none z-50"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-slate-900">System <span className="text-indigo-600">Analytics</span></h1>
            <p className="text-slate-500 text-sm">Observability dashboard for Trivium Neural Agencies.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-2 btn-premium-outline text-[10px] font-black uppercase tracking-widest">Logs</button>
            <button className="px-5 py-2 btn-premium text-[10px] font-black uppercase tracking-widest">Export Data</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stat Cards */}
          {[
            { label: 'Agent Throughput', value: '89.4%', color: '#6366F1', trend: '+12.3%' },
            { label: 'Compute Efficiency', value: '72.1%', color: '#8B5CF6', trend: '+5.7%' },
            { label: 'Neural Latency', value: '14ms', color: '#10B981', trend: 'OPTIMAL' }
          ].map((stat, i) => (
            <div key={i} className="premium-card p-8 rounded-[2rem] flex flex-col justify-between">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <div className="mt-6 flex items-end justify-between">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</h2>
                <span className={`text-[10px] font-black tracking-widest ${stat.trend === 'OPTIMAL' ? 'text-emerald-500' : 'text-slate-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full mt-8 overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full transition-all duration-1000 shadow-sm" 
                  style={{ width: i === 0 ? '89%' : i === 1 ? '72%' : '94%' }}
                ></div>
              </div>
            </div>
          ))}

          {/* Large Chart */}
          <div className="lg:col-span-2 premium-card p-10 rounded-[2.5rem] h-[450px]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Neural Pulse</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#0F172A', fontSize: '10px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#chartGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="premium-card p-10 rounded-[2.5rem] h-[450px]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Model Load</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px' }}
                  cursor={{fill: 'rgba(99, 102, 241, 0.05)'}}
                />
                <Bar dataKey="efficiency" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
