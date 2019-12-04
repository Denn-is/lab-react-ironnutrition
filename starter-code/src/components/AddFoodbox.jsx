import React, { Component } from "react";

export class AddFoodbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }
  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value
    });
  };

  handleImageRating = event => {
    this.setState({
      image: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleNameInput(e)}
          />

          <label>calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleCaloriesInput(e)}
          />

          <label>image:</label>
          <input
            type="img"
            name="image"
            value={this.state.image}
            onChange={e => this.handleImageInput(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFoodbox;
