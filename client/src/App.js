import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from './components/HomePage'
import LoginSignUpPage from './components/LoginSignUpPage'
import UserList from './components/UserList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/start' component={LoginSignUpPage} />
            <Route exact path='/users' component={UserList} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
