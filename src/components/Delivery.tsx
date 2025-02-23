import { FC } from 'react';

import {
  BarChart3,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Cog,
  Target,
} from 'lucide-react';

  
  const Delivery: FC = () => {
    return <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
      <div className="absolute inset-0 backdrop-blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Proven
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {' '}Delivery Framework
          </span>
        </h2>
        <p className="text-xl text-[#b8bbd3] max-w-3xl mx-auto">
          A systematic approach combining human expertise with AI-driven insights to transform your sales operation
          from the ground up.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Discover */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">01. Discover</h3>
          <p className="text-[#b8bbd3] mb-6">
            Deep dive analysis of your current systems, identifying strengths, bottlenecks, and untapped opportunities.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Comprehensive systems audit</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Performance baseline assessment</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Clear success metrics definition</span>
            </li>
          </ul>
        </div>

        {/* Plan */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">02. Plan</h3>
          <p className="text-[#b8bbd3] mb-6">
            Strategic roadmap development with clear milestones, timelines, and accountability measures.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Detailed implementation timeline</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Resource allocation strategy</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Risk mitigation protocols</span>
            </li>
          </ul>
        </div>

        {/* Execute */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
            <Cog className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">03. Execute</h3>
          <p className="text-[#b8bbd3] mb-6">
            Seamless implementation of systems, training, and processes with hands-on support.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>System setup and integration</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Team training and onboarding</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Process documentation</span>
            </li>
          </ul>
        </div>

        {/* Optimize */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">04. Optimize</h3>
          <p className="text-[#b8bbd3] mb-6">
            Continuous performance monitoring and optimization using AI-driven insights.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Real-time performance tracking</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>AI-powered improvement suggestions</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Weekly optimization reports</span>
            </li>
          </ul>
        </div>

        {/* Scale */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">05. Scale</h3>
          <p className="text-[#b8bbd3] mb-6">
            Strategic expansion of systems and capabilities to support continued growth.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>New opportunity identification</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Upsell strategy implementation</span>
            </li>
            <li className="flex items-start gap-2 text-[#b8bbd3]">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>System capacity expansion</span>
            </li>
          </ul>
        </div>
      </div>

      {/* AI Analysis Platform */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-400" />
              AI-Powered Sales Analysis Platform
            </h3>
            <p className="text-xl text-[#b8bbd3] mb-8">
              Our proprietary AI system analyzes every aspect of your sales operation, providing actionable insights and recommendations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Essential Analysis</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Manual KPI tracking and reporting</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Basic performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Monthly trend analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Enterprise Analysis</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Automated data collection and processing</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>AI-powered call reviews and coaching</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#b8bbd3]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
;
  }
  
  export default Delivery;