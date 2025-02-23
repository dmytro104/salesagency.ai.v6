import { FC } from 'react';

import {
  BarChart3,
  Bot,
  Brain,
} from 'lucide-react';

  
  const GhlPixel: FC = () => {
    return       <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Turn Every Interaction into Intelligence
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Lead Tracking</h3>
                <p className="text-[#b8bbd3]">
                  Our intelligent tracking system captures every touchpoint, understanding not just 
                  what happened, but why it matters for your success.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analytics</h3>
                <p className="text-[#b8bbd3]">
                  See beyond the numbers with deep insights into prospect behavior, team performance, 
                  and market trends as they happen.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Recommendations</h3>
                <p className="text-[#b8bbd3]">
                  Let AI be your strategic advisor, delivering actionable insights that keep you 
                  ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80"
            alt="Analytics Dashboard"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
;
  }
  
  export default GhlPixel;