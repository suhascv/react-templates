import "./project.css";
import React from "react";
import "animate.css";

const Project = (props) => {
  return (
    <div className={"project animate animate__animated " + props.animation}>
      {props.number}
    </div>
  );
};

export default Project;
