import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'


const FormWrapperStyle = styled.form`
  h1 {
    color: yellow;
  }

`
class SignUpForm extends Component {

  state = {
    newUser: {
      name: '',
      username: '',
      password: '',
      email: '',
      profileimg: '',
      currentweight: 0,
      currentbicepsize: 0,
      currentthighsize: 0,
      currentchestsize: 0,
      currentwaistsize: 0,
    },
    redirectToUser: false,
    newUserId: ''
  }

  handleChange = (event) => {
    const attr = event.target.name
    const updatedUser = {...this.state.newUser}
    updatedUser[attr] = event.target.value
    this.setState({newUser: updatedUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/users', {
      'user': this.state.newUser
    })
    this.setState({redirectToUser: true, newUser: res.data._id})
  }


  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users`} />
    }
    return (
      <FormWrapperStyle>
        <div onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
          <div>
            <input onChange={this.handleChange} name='name' type='text' value={this.state.newUser.name} placeholder="Name" />
          </div>
          <div>
            <input onChange={this.handleChange} name='username' type='text' value={this.state.newUser.username} placeholder="User Name" />
          </div>
          <div>
            <input onChange={this.handleChange} name='password' type='password' value={this.state.newUser.password} placeholder="Password" />
          </div>
          <div>
            <input onChange={this.handleChange} name='email' type='email' value={this.state.newUser.email} placeholder="E-mail" />
          </div>
          <div>
            <input onChange={this.handleChange} name='profileimg' type='text' value={this.state.newUser.profileimg} placeholder="Profile Image URL" />
          </div>
          <div>
            <input onChange={this.handleChange} name='currentweight' type='number' value={this.state.newUser.currentweight} placeholder="Current Weight(lbs)" />
          </div>
          <div>
            <input onChange={this.handleChange} name='currentbicepsize' type='number' value={this.state.newUser.currentbicepsize} placeholder="Current Bicep Size(in inches)" />
          </div>
          <div>
            <input onChange={this.handleChange} name='currentthighsize' type='number' value={this.state.newUser.currentthighsize} placeholder="Current Thigh Size(in inches)" />
          </div>
          <div>
            <input onChange={this.handleChange} name='currentchestsize' type='number' value={this.state.newUser.currentchestsize} placeholder="Current Chest Size(in inches)" />
          </div>
          <div>
            <input onChange={this.handleChange} name='currentwaistsize' type='number' value={this.state.newUser.currentwaistsize} placeholder="Current Waist Size(in inches)" />
          </div>
          <button>Sign Up</button>
        </div>
      </FormWrapperStyle>
    );
  }
}

export default SignUpForm;