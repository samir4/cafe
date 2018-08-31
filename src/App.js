import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        nomes: []
      };
    }

  botao = () => {
    console.log('funcionou');
  }

  criaLista = () => {
    var lista =
      <ul>
        <li>123</li>
        <li>123</li>
        <li>MODA SERTANEJA</li>
      </ul>;

    return lista;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem Vindo ao React</h1>
        </header>

        <input type = 'text' placeholder = "Clica aqui" style = {{padding: '20px'}}/>

        <button onClick = {this.botao} style = {{
           color: 'red',
           backgroundColor: '#222',
           padding: '15px'

        }}>
            Gostosa da cafeteria

        </button>

        <br />
        <div>
          {this.criaLista()}
        </div>

      </div>
    );
  }

}

export default App;
