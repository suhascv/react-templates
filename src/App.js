import React from "react";
import "./styles.css";
import Project from "./project.js";
import "font-awesome/css/font-awesome.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      len: 10,
      animation: "animate__fadeInLeft",
      forward: false,
      backward: false
    };
    this.handleProjects = this.handleProjects.bind(this);
  }

  handleProjects(direction) {
    let newStart;
    if (direction === "forward") {
      newStart = (this.state.start + 3) % this.state.len;
      this.setState({
        animation: this.state.forward
          ? "animate__fadeInLeft"
          : "animate__backInLeft animate__fast"
      });
      this.setState({ forward: this.state.forward ? false : true });
    } else if (direction === "backward") {
      this.setState({
        animation: this.state.backward
          ? "animate__fadeInRight"
          : "animate__backInRight animate__fast"
      });
      this.setState({ backward: this.state.backward ? false : true });
      let temp = this.state.start - 3;
      if (temp < 0) {
        newStart = this.state.len + temp;
      } else {
        newStart = temp % this.state.len;
      }
    }
    this.setState({ start: newStart });
  }

  render() {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      projects.push(
        <Project
          number={(this.state.start + i) % this.state.len}
          animation={this.state.animation}
        />
      );
    }

    return (
      <div className="App">
        <h1>Projects</h1>

        <div className="projects">
          <button
            className="slider"
            onClick={() => {
              this.handleProjects("backward");
            }}
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
          {projects.map((p) => p)}
          <button
            className="slider"
            onClick={() => {
              this.handleProjects("forward");
            }}
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
