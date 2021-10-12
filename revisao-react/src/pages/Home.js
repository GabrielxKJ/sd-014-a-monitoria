import React, { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {
  render() {
    const { personagens } = this.props;
    return(
      <div className="listCard">
        <h1>Home</h1>
        { personagens.map(({ id, name, image }) => <Card key={ name } id={ id } name={ name } image={ image } /> )}
      </div>
    );
  }
}

export default Home;
