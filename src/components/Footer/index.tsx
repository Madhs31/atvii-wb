import React from 'react';
import "./style.css";

type FooterProps = {
  tema?: string;
};

class Footer extends React.Component<FooterProps> {
  render() {
    const temaClasse = this.props.tema ? this.props.tema : '';

    return (
      <footer className={`container-footer ${temaClasse}`}>
        <h4 className="footer-title">World Beauty</h4>
        
        <div className="container-icons">
          <a href="https://github.com/DigoCast" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-xl icon"></i>
          </a>
          <a href="https://www.instagram.com/diego_.cast/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-xl icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/diego-castilho-8b87a8301/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl icon"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp fa-xl icon"></i>
          </a>
        </div>

        <p className="footer-copy">
          © 2025 - Desenvolvido por <strong>Maria Fernanda Diniz Hansen de Souza</strong>
        </p>
      </footer>
    );
  }
}

export default Footer;
