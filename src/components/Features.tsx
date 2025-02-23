import { FC } from 'react';

import {
    CheckCircle2,
    Cog,
    MessageSquare,
    Target,
    Users
  } from 'lucide-react';

  
  const Features: FC = () => {
    return <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conversational Lead Engagement */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Smart Lead Engagement</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>AI-powered lead tracking and prioritization based on real-time market signals</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Intelligent reactivation sequences that know exactly when and how to re-engage</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Perfect-timing outreach across email, SMS, and calls based on prospect behavior</span>
              </li>
            </ul>
          </div>

          {/* Sales Team Enablement */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Sales Team Enablement</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Real-time AI coaching during calls to boost performance</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Automated call reviews with personalized improvement suggestions</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>AI-optimized scripts and training paths customized for each role</span>
              </li>
            </ul>
          </div>

          {/* Infrastructure Makeover */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <Cog className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Infrastructure Makeover</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Smart upsell systems that identify perfect timing for offers</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Automated KPI tracking and performance optimization</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Continuous feedback loops for constant improvement</span>
              </li>
            </ul>
          </div>

          {/* Talent Augmentation */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Talent Augmentation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>AI-driven assessments for skills, culture fit, and long-term potential</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Predictive analytics for rep-offer fit and performance</span>
              </li>
              <li className="flex items-start gap-2 text-[#b8bbd3]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Automated onboarding and training optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
  }
  
  export default Features;