import React, { Component } from 'react';
<<<<<<< HEAD
import { Router, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'


const Image = styled.div`
img {
  max-width: 1429px;
  mkax-height: 446px;
  opacity: 0.4; 
}
=======
import styled from 'styled-components'

import NavBarr from "./NavBar.js"


const Image = styled.div`
  img {
    max-width: 1429px;
    mkax-height: 446px;
    opacity: 0.4;
    
  }
>>>>>>> 24329e73383ef551052f807b5760dde74d081c03
`

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
<<<<<<< HEAD

          <Image>
          <img src='https://i.imgur.com/9Dj9dZ2.jpg?3' />
=======
          <NavBarr />
          <Image>
            <img src="https://i.imgur.com/9Dj9dZ2.jpg?3" />
>>>>>>> 24329e73383ef551052f807b5760dde74d081c03
          </Image>

          </div>
      </div>
    );
  }
}

export default HomePage;