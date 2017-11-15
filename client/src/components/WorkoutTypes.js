import React, { Component } from 'react';
import axios from 'axios'

class WorkoutTypes extends Component {
  state = {
    workout_types: []
  }
  componentWillMount () {
    this.getAllTypes()
  }

  getAllTypes = async () => {
    try {
      const workoutTypeId = this.props.match.params.id
      console.log(workoutTypeId)
      const res = await axios.get(`/api/workout_types`)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        {this.state.workout_types.map((workout_type, index) => {
          return (
            <div key={index}>
            <div>
              {workout_type.name}
              {workout_type.description}
            </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default WorkoutTypes;