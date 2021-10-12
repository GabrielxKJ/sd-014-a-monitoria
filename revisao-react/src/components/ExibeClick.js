import React, { Component } from 'react';

class ExibeClick extends Component {
  render() {
    const { xablau, funCounter } = this.props;
    return(
      <>
        <p>EXIBE CLICK</p>
        <p>{ xablau }</p>
        <button type="button" onClick={ funCounter } >Click</button>
      </>
    );
  }
}

export default ExibeClick;
