import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import WorkoutTypes from './components/WorkoutTypes'
import Footer from './components/Footer.js'




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
          <HomePage />
          <Switch>
            {/* <Route exact path = "users" render = {Users} /> */}
          </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
