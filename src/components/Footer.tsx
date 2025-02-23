import { FC } from 'react';
import { Youtube, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: FC = () => {
  return (
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <div className="flex items-center">
                <img
                  src="./nav-logo.svg"
                  alt="SalesAgency.ai Logo"
                  className="h-8 w-auto mr-2"
                />
                
              </div>
              <p className="text-[#b8bbd3]">Our clients scale their high ticket businesses to multiple 7 figures using our AI-powered Sales Systems</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-white font-medium">Contact</p>
              <a href="mailto:mitch@salesagency.ai" className="text-[#b8bbd3] hover:text-white transition">
                mitch@salesagency.ai
              </a>
              <a href="tel:+13474042926" className="text-[#b8bbd3] hover:text-white transition">
                +1(347) 404-2926
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-[#b8bbd3] hover:text-white transition">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#b8bbd3] hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#b8bbd3] hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#b8bbd3] hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#b8bbd3] hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-[#b8bbd3]">&copy; {new Date().getFullYear()} SalesAgency.ai. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="/terms" className="text-[#b8bbd3] hover:text-white transition">Terms & Conditions</a>
                <span className="text-[#b8bbd3]">|</span>
                <a href="/privacy" className="text-[#b8bbd3] hover:text-white transition">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;