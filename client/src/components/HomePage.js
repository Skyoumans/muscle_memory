import React, { Component } from 'react';
import styled from 'styled-components'

import NavBarr from "./NavBar.js"


const Image = styled.div`
  img {
    max-width: 1429px;
    mkax-height: 446px;
    opacity: 0.7;
    
  }
`

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Image>
            <img src="https://i.imgur.com/9Dj9dZ2.jpg?3" />
          </Image>

          </div>
      </div>
    );
  }
}

export default HomePage;