import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Are the Architects of <br/>
              <span className="text-primary-400">Digital Reality</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Founded in 2024, NovaTech emerged from a simple yet ambitious vision: to democratize access to super-intelligence. We believe that AI is not just a tool, but a fundamental shift in how humanity interacts with information.
              </p>
              <p>
                Our team consists of former researchers from top labs, cloud architects, and ethical AI proponents. We don't just build software; we craft ecosystems that breathe, learn, and adapt.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                   <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Innovation First</h4>
                  <p className="text-sm text-slate-400">Always pushing boundaries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://picsum.photos/800/600" 
                alt="NovaTech Office" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-lg">San Francisco HQ</p>
                <p className="text-primary-300 text-sm">Center of Innovation</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-75"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;