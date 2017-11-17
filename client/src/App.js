import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from './components/HomePage'
import LoginSignUpPage from './components/LoginSignUpPage'
import UserList from './components/UserList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import User from './components/User'

class App extends Component {
  state = {
    workoutTypes: []
  }
  async componentWillMount () {
    try {
      const res = await axios.get(`/api/workout_types`)
      this.setState({workout_types: res.data})
    } catch(error) {
      console.log(error)
    }
  }

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
            <Route exact path='/users/:userId' component = {User} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
