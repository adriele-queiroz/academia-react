import React from 'react';
import './style.css';

// Componente TestimonialsSection responsável por exibir os depoimentos dos usuários
const TestimonialsSection = () => {
  return (
    // Seção de depoimentos
    <section id="testimonials" className="jumbotron py-5 mb-0">
      <div className="container">
        <h2 className="text-center">O que nossos usuários estão dizendo</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div id="carouselTestimonials" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselTestimonials" data-slide-to="0" className="active"></li>
                <li data-target="#carouselTestimonials" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mb-4">
                    <div className="card-body">
                      <p className="card-text">"Este aplicativo mudou minha vida! Estou mais saudável e mais em forma do que nunca."</p>
                      <p className="text-muted">- João Silva</p>
                      <img src="./images/user1.png" alt="Depoimento 1" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-4">
                    <div className="card-body">
                      <p className="card-text">"Estou muito satisfeita com os resultados que obtive usando este aplicativo. Perfeito!!"</p>
                      <p className="text-muted">- Maria Santos</p>
                      <img src="./images/user2.png" alt="Depoimento 2" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-4">
                    <div className="card-body">
                      <p className="card-text">"Estou encantado com os resultados que alcancei usando este aplicativo. Recomendo a todos!"</p>
                      <p className="text-muted">- Luiz Santos</p>
                      <img src="./images/user1.png" alt="Depoimento 3" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselTestimonials" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a className="carousel-control-next" href="#carouselTestimonials" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
