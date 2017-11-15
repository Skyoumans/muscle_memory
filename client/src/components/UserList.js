import React, { Component } from 'react';
import axios from 'axios'

class User extends Component {
  state = {
    users:[]
  }

  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    try {
      const userId = this.props.match.params.id
      const res = await axios.get(`api/users`)
      this.setState({users: res.data})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>
        {this.state.users.map(user => {
          return(
            <div>
              <div><img src={user.profileimg} alt='User Profile Image'/></div>
              <h4>{user.name}</h4>
              <p>{user.username}</p>
              <p>{user.currentweight}lbs</p>
              <p>{user.currentchestsize} inches</p>
              <p>{user.currentbicepsize} inches</p>
              <p>{user.currentthighsize} inches</p>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default User;