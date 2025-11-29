import React from 'react';
import { Icon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" className="text-primary-500 w-6 h-6" />
              <span className="text-2xl font-bold text-white">NovaTech</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Empowering organizations with next-generation artificial intelligence and robust cloud infrastructure. Building the digital backbone of tomorrow, today.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Cognitive AI</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Cloud Architecture</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">CyberSecurity</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Data Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Icon name="Github" className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 NovaTech Solutions Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;