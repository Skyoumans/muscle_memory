import React, { Component } from 'react';
import axios from 'axios'

class User extends Component {
  state = {
    user: {
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
    }
  }

  async componentWillMount() {
    try {
      const userId = this.props.match.params.userId
      console.log(userId)
      const res = await axios.get(`/api/users/${this.props.match.params.userId}`, {'timeout': 2000})
      console.log(res.data)
      this.setState({user: res.data})
    } catch (error) {
      console.log(error)
    }
  }

  handleUpdate = async () => {
    const { id } = this.props.match.params
    const res = await axios.patch(`/api/users/${this.state.userId}`, {
    user: this.state.post
  })
    console.log(res)

    this.setState({ user: res.data})
  }


  handleChange = (event) => {
    const attr = event.target.name
    const updateUser = {...this.state.user}
    updateUser[attr] = event.target.value
    this.setState({user: updateUser})
  }
  
  render() {
    return (
      <div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='username' value={this.state.user.username}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='email' value={this.state.user.email}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='currentweight' value={this.state.user.currentweight}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='currentbicepsize' value={this.state.user.currentbicepsize}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='profileimg' value={this.state.user.profileimg}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='currentchestsize' value={this.state.user.currentchestsize}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='currentthighsize' value={this.state.user.currentthighsize}></textarea></div>
        <div><textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='currentwaistsize' value={this.state.user.currentwaistsize}></textarea></div>
      </div>
    );
  }
}

export default User;