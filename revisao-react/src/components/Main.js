import React, { Component } from 'react';
import ExibeClick from './ExibeClick';
// import Card from './Card';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      sobrenome: '',
      status: false,
      contador: 0,
      personagens: [],
    }
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.counter = this.counter.bind(this);
  }

  componentDidMount() {
    console.log('didMount');
    this.fetchApi();
  }

  async fetchApi() {
    const resolve = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await resolve.json();
    this.setState({
      personagens: results,
    });
  }

  handleClick() {
    this.setState({
      status: true,
    });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  counter() {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  }

  render () {
    const { nome, sobrenome, status, contador, personagens } = this.state;
    // if (status) return(<p>{nome}</p>);
    console.log('render');
    return(
      <>
        <input type="text" name="nome" value={ nome } onChange={ this.handleChange } placeholder="nome" />
        <input type="text" name="sobrenome" value={ sobrenome } onChange={ this.handleChange } placeholder="sobrenome" />
        <button type="button" name="btn1" onClick={ this.handleClick }>Button</button>
        { status && (<p>{ nome }</p>) }
        <p>{ sobrenome }</p>
        {/* <button type="button" onClick={ this.counter } >Click</button> */}
        <p>{ contador }</p>
        <ExibeClick xablau={ contador } funCounter={ this.counter }  />
        {/* <Card personagens={ personagens } /> */}
      </>
    );
  }
}

export default Main;
