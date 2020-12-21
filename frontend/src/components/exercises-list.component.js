import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        this.setState({
          exercises: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res))
      .catch((error) => console.log);

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div>
        <p>Your are in Exercises List component</p>
      </div>
    );
  }
}
