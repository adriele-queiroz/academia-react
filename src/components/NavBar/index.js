
import React from 'react';
import './style.css';
import NavItem from '../NavItem';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Academia StackX</h1>
        <ul className="navbar-nav">
          <NavItem href="#features" label="Recursos" />
          <NavItem href="#testimonials" label="Depoimentos" />
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;



