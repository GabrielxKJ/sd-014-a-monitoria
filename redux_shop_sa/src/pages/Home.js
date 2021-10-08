import React, { Component } from 'react';

import lightSwitch from '../images/light-switch.png';
import lampLightMode from '../images/lamp-light-mode.png';
// import lampDarkMode from '../images/lamp-dark-mode.png';
import sullivanLightMode from '../images/sullivan-light-mode.png';
// import sullivanDarkMode from '../images/sullivan-dark-mode.png';
import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="light">
        <h1 className="title-light-mode">SHOP S.A.</h1>
        <button
          className="light-switch-button"
          type="button"
        >
          <img
            className="light-switch"
            src={ lightSwitch }
            alt="Interruptor"
          />
        </button>
        <img
          className="lamp"
          src={ lampLightMode }
          alt="Lampada"
        />
        <img
          className="sullivan"
          src={ sullivanLightMode }
          alt="Sullivan"
        />
      </div>
    );
  }
}

export default Home;
