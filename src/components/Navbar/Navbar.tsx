// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="navbar-wrapper">
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir ou fechar menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/produto">Produtos</Link></li>
          <li><Link to="/servico">Serviços</Link></li>
          <li><Link to="/cliente">Clientes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
