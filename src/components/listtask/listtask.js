import template from "./listtask.jsx";
import axios from 'axios';

// Exemple de TaskList.js dans le dossier components
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
