import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      Hello World, {tech}!
    </div>
  );
};

//{tech} says React from initial state in App.js

export default HelloWorld;
