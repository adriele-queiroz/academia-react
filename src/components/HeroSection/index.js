import React from 'react';
import './style.css';

// Componente HeroSection responsável por exibir a seção de hero da página inicial
const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: "url('../images/capa.png')", // Define a imagem de fundo da seção
    backgroundSize: 'cover', // Define o tamanho da imagem de fundo como 'cover'
    backgroundPosition: 'center', // Define a posição da imagem de fundo como o centro
  };

  return (
    // Seção de hero com imagem de fundo e conteúdo centralizado
    <section className="hero-section jumbotron text-center mb-0" style={sectionStyle}>
      <div className="container">        
        <p className="lead">Nosso aplicativo fitness torna fácil se exercitar em casa. Comece sua jornada de condicionamento físico hoje!</p>
        <a href="https://play.google.com/store/apps?hl=pt_BR&gl=US" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg blinking">Baixe Agora <br/> R$49,90/Mensal</a>
      </div>
    </section>
  );
}

export default HeroSection;
