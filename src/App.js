import './index.css'; 

import NavBar from './components/NavBar';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;