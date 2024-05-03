import React from 'react';
import './index.css'; 

// Importando os componentes que compõem a aplicação
import NavBar from './components/NavBar';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Componente da barra de navegação */}
      <NavBar />

      {/* Componente da seção de hero */}
      <HeroSection />

      {/* Componente da seção de recursos */}
      <FeaturesSection />

      {/* Componente da seção de depoimentos */}
      <TestimonialsSection />
      
      {/* Componente da seção de depoimentos */}
      <Footer />
      
    </div>
  );
}

export default App;

