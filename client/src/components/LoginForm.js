import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const FormWrapperStyle = styled.div`
h1 {
  color: yellow;
}
`

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false
   }
 }

signIn = async (event) => {
  event.preventDefault();
  const payload = {
    email: this.state.email,
    password: this.state.password,
  }
  const response = await axios.post('/login', payload);
  this.setState({redirect: true})
}

 handleChange = (event) => {
   const newState = {...this.state};
   newState[event.target.name] = event.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/users" />
   }
   return (
     <FormWrapperStyle>
       <form onSubmit={this.signIn}>
       <h1>Log In</h1>
         <div>
           <input onChange={this.handleChange} type="text" name="email" value={this.state.email} placeholder="E-mail"/>
         </div>
         <div>
           <input onChange={this.handleChange} type="text" name="password" value={this.state.password} placeholder="Password" />
         </div>
         <button>Log In</button>
       </form>
     </FormWrapperStyle>
   );
 }
}

export default SignUp;