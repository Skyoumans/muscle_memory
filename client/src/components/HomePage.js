import React, { Component } from 'react';
import { Router, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBarr from "./NavBar.js"


class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBarr />

          </div>
      </div>
    );
  }
}

export default HomePage;