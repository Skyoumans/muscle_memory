import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
     <div>
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
     </div>
   );
 }
}

export default SignUp;