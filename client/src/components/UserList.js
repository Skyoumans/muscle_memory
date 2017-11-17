import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


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
      const res = await axios.get(`/api/users`)
      console.log(res)
      this.setState({users: res.data})
    } catch(error) {
      console.log(error)
    }
  }

  deleteUser = async (userId) => {
    const res = await axios.delete(`/api/users/${userId}`)
    console.log(res.data)
    this.setState({users: res.data})
  }

  

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>
        {this.state.users.map(user => {
          return(
            <div key={user.id}>
              <div><img src={user.profileimg} alt='User Profile Image'/></div>
              <h4>{user.name}</h4>
              <p>{user.username}</p>
              <p>{user.currentweight}lbs</p>
              <p>{user.currentchestsize} inches</p>
              <p>{user.currentbicepsize} inches</p>
              <p>{user.currentthighsize} inches</p>
              <div></div>
              <Link to={`/users/${user.id}`}><button>View User</button></Link>
              <button onClick={() => this.deleteUser(user.id)}>Delete</button>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default User;