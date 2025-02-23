import { FC } from 'react';

import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Target,
  Users
} from 'lucide-react';

  
  const Transform: FC = () => {
    return       <section className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-2xl p-12 backdrop-blur-sm border border-blue-500/20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Transform Your Sales Operation:
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Human Expertise Meets AI Innovation
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* For Existing Teams */}
          <div className="space-y-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white">For Existing Teams: Elevate & Scale</h3>
            <p className="text-[#b8bbd3]">
              Transform your current sales team into a high-performing revenue machine. Most companies waste 12-18 months and over $100,000 in trial and error. Skip the learning curve with our proven approach.
            </p>
            
            <div className="space-y-6 flex-grow">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  Assessment & Optimization
                </h4>
                <ul className="space-y-3 text-[#b8bbd3]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Deep-dive analysis using AI-powered call analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Identify strengths and growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Custom improvement roadmap based on proven patterns</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Enhanced Training & Development
                </h4>
                <ul className="space-y-3 text-[#b8bbd3]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Real-time AI coaching during calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Personalized training combining proven methodologies with AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Weekly optimization based on performance data</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Transform Your Existing Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Building From Zero */}
          <div className="space-y-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white">Building From Zero: Your Dream Team Blueprint</h3>
            <p className="text-[#b8bbd3]">
              Skip the costly trial and error of building your first sales team. Our hybrid approach combines battle-tested expertise with cutting-edge AI to help you get it right the first time.
            </p>
            
            <div className="space-y-6 flex-grow">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-400" />
                  Strategic Foundation
                </h4>
                <ul className="space-y-3 text-[#b8bbd3]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Market-tested compensation structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Clear role definitions and career paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Scalable systems for sustainable growth</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Accelerated Success
                </h4>
                <ul className="space-y-3 text-[#b8bbd3]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>3x faster ramp-up using our hybrid approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>AI-powered practice with real scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Continuous feedback measuring progress</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto px-8 py-4 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition flex items-center justify-center gap-2 border border-white/10"
            >
              Get Your Team Building Blueprint <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Why Our Approach Works */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            Data-Driven Decisions
          </h4>
          <p className="text-[#b8bbd3]">
            Every strategy backed by real performance metrics and continuously optimized based on what's working now.
          </p>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            Proven Methodology
          </h4>
          <p className="text-[#b8bbd3]">
            Built on thousands of successful high-ticket sales and refined through work with companies across industries.
          </p>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-400" />
            Future-Proof Framework
          </h4>
          <p className="text-[#b8bbd3]">
            Flexible systems that grow with your business, incorporating new AI capabilities for sustainable, predictable scaling.
          </p>
        </div>
      </div>
    </div>
  </section>;
  }
  
  export default Transform;