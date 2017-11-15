<<<<<<< HEAD
import React from 'react';
import axios from 'axios'

const StartupLinks = () => {
  return (
    <div>
      
    </div>
  );
};
=======
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.div`
button {
    background-color: #780206;
    color: #FFDC00;
    padding: 14px 20px;
    margin: 8px 10px;
    border: none;
    width: 20%;
    } a {
      color: gold;
      text-decoration: none;
      size: 30px;
    }
`

class StartupLinks extends Component {

  render() {
    return (
      <ButtonStyle>
        <button><a href={`/workout_types`}>Preview Workouts</a></button>
          <button><a href={`/workout_sessions`}>Start a Session</a></button>
      </ButtonStyle>
    );
  }
}
>>>>>>> 24329e73383ef551052f807b5760dde74d081c03

export default StartupLinks;