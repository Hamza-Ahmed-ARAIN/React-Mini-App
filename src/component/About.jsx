import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // this.state = { name: "hamza", age: 26 };
  }
  componentDidMount() {
    console.warn(this.props.name);
  }
  componentDidUpdate() {
    console.warn("props in update", this.props.name);
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>About us</h1>
        <h2>{this.props.name}</h2>
        {/* {this.state.name}
        <br />
        {this.state.age}
        <br /> */}
      </>
    );
  }
}

export default About;
