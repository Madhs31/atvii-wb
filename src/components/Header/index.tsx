// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./style.css";

interface HeaderProps {
  tema?: string;
}

interface HeaderState {
  isMenuOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render(): React.ReactNode {
    const { isMenuOpen } = this.state;
    const { tema } = this.props;

    return (
      <header className={`container-header ${tema || ""}`}>
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <h1>🌸 World Beauty</h1>
            </Link>
          </div>

          {/* Botão hamburguer */}
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={this.toggleMenu}
            aria-label="Abrir menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <Navbar isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
        </div>
      </header>
    );
  }
}

export default Header;
