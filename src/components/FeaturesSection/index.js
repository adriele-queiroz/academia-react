import React from 'react';
import './style.css';

// Componente FeaturesSection responsável por exibir os recursos da aplicação
const FeaturesSection = () => {
  return (
    <section id="features" className="py-5" style={{ backgroundColor: '#101010' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="feature-item feature-image" style={{ backgroundImage: "url('./images/imagem1.png')" }}>
              <h2>Planos de Treino Personalizados</h2>
              <p>Nossos treinadores criarão um plano de exercícios personalizado para você, com base em seus objetivos.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-item feature-image" style={{ backgroundImage: "url('./images/imagem2.png')" }}>
              <h2>Acompanhamento de Progresso</h2>
              <p>Acompanhe seu progresso ao longo do tempo com estatísticas detalhadas e gráficos de desempenho.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-item feature-image" style={{ backgroundImage: "url('./images/imagem3.png')" }}>
              <h2>Suporte Exclusivo e Personalizado</h2>
              <p>Nossa equipe de suporte está disponível 24 horas por dia, para responder a qualquer pergunta que você possa ter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection; // Exporta o componente FeaturesSection

