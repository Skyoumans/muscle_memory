import React from 'react'
import { Link, Router } from 'react-router-dom'
import styled from 'styled-components'

const NavBarBG = styled.div`
  background-color: #780206;
  overflow: hidden;
`
const NavBarLink = styled.div`
  a, h1 {
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: gold;
    align-items: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;

  }
  a:hover {
    background-color: #4c3c3c;
    color: black;
  }
`

  const GroupLinks = styled.div`
    float: right;
    a {
      color: gold;          
    }
  `

const NavBar = () => {
  return (

    <NavBarBG>
      <NavBarLink>
        <a href = '/'><h1>Muscle Memory</h1></a>
        <GroupLinks>
        <Link to="/start"><h1>Log In</h1></Link>
        <Link to="/start"><h1>Sign Up</h1></Link>
        </GroupLinks>
      </NavBarLink>
    </NavBarBG>
  )
}

export default NavBar