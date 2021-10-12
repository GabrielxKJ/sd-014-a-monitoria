import React, { Component } from 'react';

class Details extends Component {
  constructor() {
    super();

    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters() {
    const { personagens } = this.props;
    const { match: { params: { id } } } = this.props;
    const personagem = personagens.filter((personagem) => +personagem.id === +id);
    if (personagem.length) {
      const { name, image, species, gender, status } = personagem[0];
      return(
        <div className="cardDetails">
          <div>
            <img src={ image } alt={ name } />
          </div>
          <div className="cardInfos">
            <h3>{ name }</h3>
            <p>{ `Espécie: ${species}` }</p>
            <p>{ `Gênero: ${gender}` }</p>
            <p>{ `Status: ${status}` }</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return(
      <>
        <h1>Details</h1>
        { this.getCharacters() }
      </>
    );
  }
}

export default Details;
