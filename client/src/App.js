import React, { Component } from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from './components/HomePage'
import LoginSignUpPage from './components/LoginSignUpPage'
import UserList from './components/UserList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import WorkoutTypes from './components/WorkoutTypes'
import Footer from './components/Footer.js'



>>>>>>> 24329e73383ef551052f807b5760dde74d081c03

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
<<<<<<< HEAD
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
=======
        <Router>
          <div>
          <HomePage />
          <Switch>
            {/* <Route exact path = "users" render = {Users} /> */}
          </Switch>
          </div>
        </Router>
        <Footer />
>>>>>>> 24329e73383ef551052f807b5760dde74d081c03
      </div>
    );
  }
}

export default App;
