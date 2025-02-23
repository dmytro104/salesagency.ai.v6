import React from 'react';
import { 
  Bot, 
  BarChart3, 
  Users, 
  Cog, 
  MessageSquare, 
  Target, 
  Brain,
  ArrowRight,
  CheckCircle2,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Building2
} from 'lucide-react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Scale Your High-Ticket Business to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {' '}Multiple 7 Figures
            </span>
          </h1>
          <p className="text-xl text-[#b8bbd3] mb-8 max-w-3xl mx-auto">
            Transform your sales ecosystem with AI that thinks like your best closer, works like your most dedicated SDR, 
            and scales like your dream team.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Unlock Your Revenue Potential <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900">
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
      </section>

      {/* About Section - Human + AI Synergy */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
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
      </section>

      {/* GHL Pixel Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
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
      </section>

      {/* Delivery Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
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

      {/* KPI Storytelling Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Story Your Numbers Tell:
              <span className="block mt-2 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
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
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-600/20 animate-gradient"></div>
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          <div className="absolute inset-0 bg-gray-900/40"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-[#b8bbd3] mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't just adapt to the future of sales - lead it. Join the elite businesses leveraging AI to dominate their market.
          </p>
          <a
            href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-3 mx-auto"
          >
            Book a Strategy Call <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App