import React from 'react';
import { SectionId, Service } from '../types';
import { Icon } from './Icons';

const services: Service[] = [
  {
    id: '1',
    title: 'Cognitive Intelligence',
    description: 'Bespoke Large Language Models trained on your proprietary data for unmatched insight.',
    iconName: 'Brain',
  },
  {
    id: '2',
    title: 'Cloud Horizon',
    description: 'Serverless architecture and multi-cloud orchestration for infinite scalability.',
    iconName: 'Cloud',
  },
  {
    id: '3',
    title: 'CyberShield Defense',
    description: 'AI-driven threat detection that neutralizes attacks before they breach your perimeter.',
    iconName: 'Shield',
  },
  {
    id: '4',
    title: 'Global Edge Network',
    description: 'Low-latency content delivery optimized for real-time applications worldwide.',
    iconName: 'Globe',
  },
  {
    id: '5',
    title: 'High-Velocity Compute',
    description: 'Quantum-ready processing pipelines for complex simulations and data modeling.',
    iconName: 'Cpu',
  },
  {
    id: '6',
    title: 'Energy Efficient Ops',
    description: 'Green computing strategies to minimize carbon footprint while maximizing output.',
    iconName: 'Zap',
  },
];

const Features: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our technology stack is designed to propel your business into the next era of digital evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                  <Icon name={service.iconName} className="w-7 h-7 text-primary-400 group-hover:text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;