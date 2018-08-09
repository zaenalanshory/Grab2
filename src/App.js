import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import IniTabBro from './Components/TabBar';
import { Card } from '../node_modules/antd-mobile';
import { Switch, Route } from 'react-router-dom';
import Cards from './Components/Card';
import CardDetail from './Components/CardDetail';
import TabBar from './Components/TabBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact={true} component={IniTabBro} />
          <Route path="/makanan" component={CardDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
