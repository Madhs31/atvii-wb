// Cliente.tsx
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface ICliente {
  id: number;
  nome: string;
  genero: string;
  cpf: string;
  rg: string;
  telefone: string;
}

class Cliente extends React.Component {
  state: {
    clientes: ICliente[];
    filtro: string;
    filtroGenero: string;
  } = {
    clientes: [
      {
        id: 1,
        nome: "João Silva",
        genero: "Masculino",
        cpf: "123.456.789-00",
        rg: "12.345.678-9",
        telefone: "(11) 99999-9999",
      },
      {
        id: 2,
        nome: "Teste da Silva",
        genero: "Masculino",
        cpf: "123.456.092-00",
        rg: "98.765.432-1",
        telefone: "(11) 98888-8888",
      },
      {
        id: 3,
        nome: "Ana Maria",
        genero: "Feminino",
        cpf: "321.456.789-99",
        rg: "45.678.912-3",
        telefone: "(11) 97777-7777",
      },
      {
        id: 4,
        nome: "Carlos Souza",
        genero: "Masculino",
        cpf: "444.555.666-00",
        rg: "12.231.421-9",
        telefone: "(11) 96666-6666",
      },
      {
        id: 5,
        nome: "Renata Silva",
        genero: "Feminino",
        cpf: "999.888.777-66",
        rg: "22.333.444-5",
        telefone: "(11) 95555-5555",
      },
      {
        id: 6,
        nome: "José Lima",
        genero: "Masculino",
        cpf: "555.444.333-00",
        rg: "33.222.111-0",
        telefone: "(11) 94444-4444",
      },
      {
        id: 7,
        nome: "Clara Gomes",
        genero: "Feminino",
        cpf: "111.222.333-44",
        rg: "44.333.222-1",
        telefone: "(11) 93333-3333",
      },
      {
        id: 8,
        nome: "Fernanda Lopes",
        genero: "Feminino",
        cpf: "333.222.111-00",
        rg: "55.444.333-2",
        telefone: "(11) 92222-2222",
      },
    ],
    filtro: "",
    filtroGenero: "Todos",
  };

  filtrarClientes = (clientes: ICliente[]): ICliente[] => {
    let filtrados = clientes;
    const { filtro, filtroGenero } = this.state;

    if (filtro) {
      filtrados = filtrados.filter(
        (cliente) =>
          cliente.nome.toLowerCase().includes(filtro.toLowerCase()) ||
          cliente.cpf.includes(filtro)
      );
    }

    if (filtroGenero !== "Todos") {
      filtrados = filtrados.filter((cliente) => cliente.genero === filtroGenero);
    }

    return filtrados;
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  handleGeneroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ filtroGenero: e.target.value });
  };

  render(): React.ReactNode {
    const { clientes, filtro, filtroGenero } = this.state;
    const clientesFiltrados = this.filtrarClientes(clientes);

    return (
      <div className="container-tipos">
        <div className="container-cli-pro-ser">
          <h2>Clientes</h2>
          <div className="search-session">
            <select
              value={filtroGenero}
              onChange={this.handleGeneroChange}
              className="genero-dropdown"
            >
              <option value="Todos">Todos</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <Link to={"/cadastrocliente"} style={{ color: "inherit" }}>
              <div className="button-cadastro">
                <span>Cadastrar Cliente</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="table-component" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Gênero</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.genero}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>{cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cliente;
