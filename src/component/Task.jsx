import React, { useState } from 'react';

function Task({ task, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedDescription);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleCheckboxChange = () => {
    editTask(task.id, editedDescription, !task.isDone);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <input type="text" value={editedDescription} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <input type="checkbox" checked={task.isDone} onChange={handleCheckboxChange} />
          <span>{task.description}</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;
