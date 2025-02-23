import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features';
import Human from './components/Human';
import GhlPixel from './components/GhlPixel';
import Transform from './components/Transform';
import Delivery from './components/Delivery';
import Kpis from './components/Kpis';
import Cta from './components/Cta';
import Home from './components/Home';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* Hero Section */}
                <Header />

                {/* Features Grid */}
                <Features />

                {/* Human in the loop Section - Human + AI Synergy */}
                <Human />

                {/* GHL Pixel Section */}
                <GhlPixel />

                {/* Transform CTA Section */}
                <Transform />

                {/* Delivery Process Section */}
                <Delivery />

                {/* KPI Storytelling Section */}
                <Kpis />

                {/* Final CTA */}
                <Cta />
              </>
            } 
          />
          <Route path="/home" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
