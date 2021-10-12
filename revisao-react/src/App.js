import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Random from './pages/Random';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personagens: [],
    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const resolve = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await resolve.json();
    this.setState({
      personagens: results,
    });
  }

  render() {
    const { personagens } = this.state;
    return(
      <BrowserRouter>
        <>
          <header>
            App
          </header>
          <Switch>
            <Route exact path="/" render={ (props) => <Home {...props} personagens={ personagens } /> } />
            <Route exact path="/random" render={ (props) => <Random {...props} personagens={ personagens } /> } />
            <Route exact path="/details/:id" render={ (props) => <Details {...props} personagens={ personagens } /> } />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
