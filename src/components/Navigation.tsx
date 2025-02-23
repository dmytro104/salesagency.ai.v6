import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img
              src="https://www.salesagency.ai/Images/nav-logo.svg"
              alt="SalesAgency.ai Logo"
              className="h-8 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://projectlegacy.rapidcloser.io/widget/bookings/salesagencyai-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;