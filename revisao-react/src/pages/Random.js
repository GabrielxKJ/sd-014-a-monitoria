import React, { Component } from 'react';
import Timer from '../components/Timer';
import Card from '../components/Card';

class Random extends Component {
  constructor() {
    super();

    this.state = {
      timerStatus: true,
    }

    this.showTimer = this.showTimer.bind(this);
    this.randomCharacter = this.randomCharacter.bind(this);
  }

  showTimer() {
    this.setState({
      timerStatus: false,
    });
  }

  randomCharacter() {
    const { personagens } = this.props;
    const position = Math.ceil(Math.random() * 20);
    console.log('position:', position);
    if (personagens.length) {
      const { id, name, image } = personagens[position]
      return (
        <Card id={ id } name={ name } image={ image } />
      );
    }
  }

  render() {
    const { timerStatus } = this.state;
    return(
      <>
        <h1>Random</h1>
        { timerStatus && <Timer showTimer={ this.showTimer } /> }
        { !timerStatus && this.randomCharacter() }
      </>
    );
  }
}

export default Random;
