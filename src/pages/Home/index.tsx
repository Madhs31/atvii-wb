import React from "react";
import "./style.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Estatistica from "../../components/Estatistica";

type HomeProps = {
  tema?: string;
};

class Home extends React.Component<HomeProps> {
  render(): React.ReactNode {
    const { tema } = this.props;

    return (
      <div className={`container-home ${tema || ""}`}>
        <Banner />

        <section className="session-cards">
          <h2>✨ Serviços Disponíveis</h2>
          <div className="cards-container">
            {this.renderCards()}
          </div>
        </section>

        <Estatistica />
      </div>
    );
  }

  private renderCards() {
    const cardData = [
      {
        title: "Clientes",
        descricao: "Gerencie seus clientes de forma rápida e eficiente. Adicione, atualize ou exclua com facilidade.",
        link: "/cliente",
      },
      {
        title: "Produtos",
        descricao: "Controle total dos produtos oferecidos. Mantenha tudo sempre atualizado e acessível.",
        link: "/produto",
      },
      {
        title: "Serviços",
        descricao: "Organize os serviços disponíveis para oferecer sempre o melhor atendimento ao cliente.",
        link: "/servico",
      },
    ];

    return cardData.map((card, index) => (
      <div className="card-div" key={index}>
        <Card
          title={card.title}
          descricao={card.descricao}
          link={card.link}
        />
      </div>
    ));
  }
}

export default Home;
