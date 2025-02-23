import { FC } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24">
        {/* Add your home page content here */}
        <h1 className="text-4xl font-bold text-white text-center">Welcome to SalesAgency.ai</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;