import React, { Component } from 'react';
import axios from 'axios'

class User extends Component {
  state = {
    user: {}
  }

  componentWillMount() {
    const userId = this.props.match.params.userId
    this.getUser(userId)
  }

  getUser = async (userId) => {
    try {
      const userData = await axios.get(`/api/users/${userId}`)
      console.log(userData)
      await this.setState({
        user: userData.data.user
      })
    } catch(error) {
      console.log(error)
    }
  }

  deleteUser = async () => {
    const userId = this.state.userId
    const res = await axios.delete(`/api/users/${userId}`)
    const deletedUsers = [...this.state.users]
    console.log(deletedUsers)
    deletedUsers.pop(res.data)
    this.setState({users: deletedUsers})
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.user.name}</h1>
          <button onClick={() => this.deleteUser(userId)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default User;