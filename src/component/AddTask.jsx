import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskDescription.trim() !== '') {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskDescription}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;

