import React, { Component } from "react";
import "./estilo.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Não Desista dos seus sonhos, siga lutando",
      "Você consegue o melhor dos outros quando você dá o melhor de você mesmo.",
      "Acredite que você pode, assim você já está no meio do caminho.",
      "Você não consegue escolher como você vai morrer ou quando. Você consegue apenas decidir como você vai viver. Agora.",
      "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
      "Não adianta esperar atitude de quem não tem.",
      "Pra quem tem pensamento forte, o impossível é só questão de opinião.",
      "O tempo às vezes é alheio à nossa vontade, mas só o que é bom dura tempo o bastante pra se tornar inesquecível.",
      "A arte maior é o jeito de cada um... vivo pra ser feliz não vivo pra ser comum.",
      "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
      "A perseverança é a mãe da boa sorte.",
      "Os grandes feitos são conseguidos não pela força, mas pela perseverança.",
      "Se os seus projetos não saturarem a sua emoção, você não terá perseverança para executá-los.",
      "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.",
      "A amizade duplica as alegrias e divide as tristezas.",
      "O amor pode morrer na verdade, a amizade na mentira.",
      "A glória da amizade não é a mão estendida, nem o sorriso carinhoso, nem mesmo a delícia da companhia. É a inspiração espiritual que vem quando você descobre que alguém acredita e confia em você",
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/biscoito.png")} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className="botaoBisc">
          {" "}
          {this.props.nome}
        </button>
      </div>
    );
  }
}

export default App;
