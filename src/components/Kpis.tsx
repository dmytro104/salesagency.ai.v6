import { FC } from 'react';

import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  MessageSquare,
  Target,
  Users
} from 'lucide-react';
  
  const Kpis: FC = () => {
    return <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-800 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
      <div className="absolute inset-0 backdrop-blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The Story Your Numbers Tell:
          <span className="block mt-2 mb-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            A Journey Through Your Sales Funnel
          </span>
        </h2>
        <p className="text-xl text-[#b8bbd3] max-w-3xl mx-auto">
          Every metric tells a story. Let's turn your data into a compelling narrative of growth and success.
        </p>
      </div>

      {/* Story Chapters Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Chapter 1: First Hello */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 1: The First Hello</h3>
          <p className="text-[#b8bbd3] mb-6">
            Your digital first impression - where potential turns into possibility.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Landing Page Conversion Rate</span>
                <span className="text-emerald-400 font-bold">4.8%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Cost Per Lead</span>
                <span className="text-blue-400 font-bold">$42.50</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 2: Nurturing */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 2: The Dance of Nurturing</h3>
          <p className="text-[#b8bbd3] mb-6">
            Building relationships that convert through meaningful engagement.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Email Click-Through Rate</span>
                <span className="text-purple-400 font-bold">12.5%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Webinar Show Rate</span>
                <span className="text-emerald-400 font-bold">68%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 3: The Main Event */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 3: The Main Event</h3>
          <p className="text-[#b8bbd3] mb-6">
            Where conversations transform into commitments.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Booked Call Rate</span>
                <span className="text-orange-400 font-bold">35%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Conversion Rate</span>
                <span className="text-emerald-400 font-bold">35%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 4: The Money Dance */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 4: The Money Dance</h3>
          <p className="text-[#b8bbd3] mb-6">
            Turning conversations into celebrations of success.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Sales Velocity</span>
                <span className="text-emerald-400 font-bold">14 days</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '56%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Avg Deal Size</span>
                <span className="text-blue-400 font-bold">$12,500</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 5: The Big Picture */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 5: The Big Picture</h3>
          <p className="text-[#b8bbd3] mb-6">
            Your business's vital signs and growth indicators.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Customer Acquisition Cost</span>
                <span className="text-blue-400 font-bold">$2,850</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 6: The Happily Ever After */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 6: The Happily Ever After</h3>
          <p className="text-[#b8bbd3] mb-6">
            Keeping the romance alive with stellar customer satisfaction.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Referral Rate</span>
                <span className="text-emerald-400 font-bold">42%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Net Promoter Score</span>
                <span className="text-blue-400 font-bold">72</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 7: The Team's Scoreboard */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Chapter 7: The Team's Scoreboard</h3>
          <p className="text-[#b8bbd3] mb-6">
            Your sales squad's championship stats.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Close Rate per Rep</span>
                <span className="text-blue-400 font-bold">32%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-white font-medium">Pipeline Value</span>
                <span className="text-purple-400 font-bold">$2.4M</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Enhancement */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
          <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
            <Bot className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">The AI Advantage</h3>
          <p className="text-[#b8bbd3] mb-6">
            Supercharge your metrics with AI-powered insights and automation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-[#b8bbd3]">Predictive lead scoring</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-[#b8bbd3]">Real-time call coaching</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-[#b8bbd3]">Automated trend analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-[#b8bbd3]">Performance optimization</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-white mb-6">
          Ready to Write Your Success Story?
        </h3>
        <p className="text-xl text-[#b8bbd3] mb-8 max-w-2xl mx-auto">
          Let's turn your metrics into a compelling narrative of growth and success with AI-enhanced tracking and optimization.
        </p>
        <a
          href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition items-center gap-2 mx-auto"
        >
          Start Your Story <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>;
  }
  
  export default Kpis;