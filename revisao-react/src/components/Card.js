import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { id, name, image } = this.props;
    return(
      <Link to={ `/details/${id}` } className="card">
        <img src={ image } alt={ name } />
        <h3>{ name }</h3>
      </Link>
    );
  }
}

export default Card;
