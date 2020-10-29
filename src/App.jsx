import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Details from './Components/Details.jsx'
import Favorites from './Components/Favorites.jsx'

class App extends Component{

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <header className="App-header">
                <Header>
                  <div className="contents">
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/details/:id' component = {Details} />
                    <Route path = '/favorites' component = {Favorites} />
                  </div>
                </Header>
              </header>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
