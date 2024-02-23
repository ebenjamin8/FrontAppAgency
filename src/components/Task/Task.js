import React    from "react";
import template from "./Task.jsx";

class Task extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Task;
