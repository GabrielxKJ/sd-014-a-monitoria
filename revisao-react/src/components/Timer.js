import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      tempo: 3,
    }

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  componentDidUpdate() {
    const { showTimer } = this.props;
    const { tempo } = this.state;
    if (tempo <= 0) {
      showTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timer() {
    const time = 1000;
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        tempo: prevState.tempo - 1,
      }));
    }, time);
  }

  render() {
    const { tempo } = this.state;
    return(
      <>
        <h1>Timer</h1>
        <p>{ tempo }</p>
      </>
    );
  }
}

export default Timer;
