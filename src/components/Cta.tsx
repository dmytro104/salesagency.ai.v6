import { FC } from 'react';

import {
  ArrowRight
} from 'lucide-react';

  
  const Cta: FC = () => {
    return       <section className="py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden hidden">
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
;
  }
  
  export default Cta;