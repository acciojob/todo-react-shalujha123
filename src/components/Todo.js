import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleTask() {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  }

  function handleDelete(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h2 style={{textAlign:"center"}}>To-Do List</h2>
      <div className="inputContainer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addBtn" onClick={handleTask}>
          Add Todo
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button className="deleteBtn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
