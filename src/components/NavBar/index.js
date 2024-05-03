import React from 'react';
import './style.css';

// Componente NavBar responsável por exibir a barra de navegação da aplicação
const NavBar = () => {
  return (
    // Barra de navegação com logotipo e links de navegação
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Academia StackX</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#features" className="nav-link">Recursos</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link">Depoimentos</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;



