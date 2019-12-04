import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.props.onSubmit(data);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    // ALTERNATIVE 1: IF statement:
    // if (name === "name") {
    //   this.setState({ name: value });
    // } else if (name === "calories") {
    //   this.setState({ calories: value });
    // } else if (name === "imnage") {
    //   this.setState({ image: value });
    // }
    // ALTERNATIVE 2:
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="food-name"></label>
          <input
            id="food-name"
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-calories"></label>
          <input
            id="food-calories"
            type="number"
            className="form-control"
            placeholder="calories"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-images">Image</label>
          <input
            id="food-calories"
            type="number"
            className="form-control"
            placeholder="calories"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddFood;
