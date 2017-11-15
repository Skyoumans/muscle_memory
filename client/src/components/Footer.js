import React, { Component } from 'react';
import styled from 'styled-components'

const FooterStyles = styled.div`
  overflow: hidden;
<<<<<<< HEAD
=======
  position: fixed;
>>>>>>> 24329e73383ef551052f807b5760dde74d081c03
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #780206;
  color: gold;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const LinkStyles = styled.div`
p {
float: left ;
width: 45px;
margin: 36px 20px;
}
`
const AboutMe = styled.div`
  float: right;
  margin: 36px 20px;

`

class Footer extends Component {
  render() {
    return (
      <FooterStyles>
        <LinkStyles>
        <div>
          <p>Heroku</p>
          <p>Github</p>
          <p>Trello</p>
          <p>WireFrame</p>
          <p>ERDs</p>
        </div>
        </LinkStyles>
        <AboutMe>
          <div>My Portfolio</div>
        </AboutMe>
      </FooterStyles>
    );
  }
}

export default Footer;