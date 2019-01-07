import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      Hello World, <span className="hello-world__tech">{tech}!</span> 
    </div>
  );
};

//{tech} says React from initial state in App.js

export default HelloWorld;
