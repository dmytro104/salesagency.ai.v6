
import {
  ArrowRight,

} from 'lucide-react';
import { FC } from 'react';

const Header: FC = () => {
    return <header className="relative overflow-hidden pt-16">
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
            href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Unlock Your Revenue Potential <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>;
  }
  export default Header;
