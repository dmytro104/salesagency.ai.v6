import { FC } from 'react';

import {
  Bot,
  Brain,
  Users
} from 'lucide-react';

const Human: FC = () => {
    return <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-12 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Team collaboration"
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Perfect Harmony of
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                {' '}Human Expertise & AI Innovation
              </span>
            </h2>
            <p className="text-xl text-[#b8bbd3] mb-8">
              We don't just deploy AI – we create a symphony where human intuition and artificial intelligence work in perfect harmony.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                Expert Human Touch
              </h3>
              <p className="text-[#b8bbd3]">
                Our seasoned sales professionals bring decades of experience, emotional intelligence, and strategic thinking to every client relationship.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <Bot className="w-6 h-6 text-emerald-400" />
                AI-Powered Intelligence
              </h3>
              <p className="text-[#b8bbd3]">
                Advanced AI systems handle data analysis, pattern recognition, and routine tasks with unprecedented accuracy and speed.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                Seamless Integration
              </h3>
              <p className="text-[#b8bbd3]">
                Where human insight meets artificial intelligence, creating a sales ecosystem that's greater than the sum of its parts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
  }
  
  export default Human;