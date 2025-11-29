import React from 'react';
import { SectionId } from '../types';
import { Icon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients & Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
          <span className="text-sm font-medium text-slate-300">New GenAI Engine 2.5 Released</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
          Forging the <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-purple-400">
            Intelligence of Tomorrow
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 animate-fade-in-up [animation-delay:200ms]">
          NovaTech enables enterprises to harness the raw power of Artificial Intelligence and Cloud Computing. We build scalable, secure, and smart systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
          <button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2">
            Explore Solutions
            <Icon name="ChevronRight" className="w-4 h-4" />
          </button>
          <button onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 animate-fade-in-up [animation-delay:500ms]">
          {[
            { label: 'Enterprise Clients', value: '500+' },
            { label: 'Data Processed', value: '10PB+' },
            { label: 'AI Models Deployed', value: '1.2k' },
            { label: 'Uptime Guarantee', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;