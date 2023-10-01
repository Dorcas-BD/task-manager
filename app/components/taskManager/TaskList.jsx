import React, { useState } from "react";
import "../../styles/styles.css";

const TaskForm = ({ onSubmit, onCancel, initialValue }) => {
  const [title, setTitle] = useState(initialValue ? initialValue.title : "");
  const [description, setDescription] = useState(
    initialValue ? initialValue.description : ""
  );
  const [status, setStatus] = useState(
    initialValue ? initialValue.status : "to-do"
  );
  const [priority, setPriority] = useState(
    initialValue ? initialValue.priority : "low"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status, priority });
  };

  return (
    <div className={`popup ${initialValue ? "popupShow" : ""}`}>
      <div className="popupContent">
        <div className="form-nav">
          <div className="form-header">
            {initialValue ? "Edit Task" : "Add Task"}
          </div>
          <span className="close" onClick={onCancel}>
            &times;
          </span>
        </div>
        <form onSubmit={handleSubmit} className="form-input">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            name=""
            id=""
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="to-do">To-Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            name=""
            id=""
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button type="submit" className="form-btn">
            {initialValue ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

const TaskList = ({ taskFormVisible, setTaskFormVisible }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAddTask = (task) => {
    console.log("Adding task:", task);
    setTasks([...tasks, task]);
    setTaskFormVisible(false);
  };
  const handleEditTask = (task) => {
    setEditingTask(task);
    setTaskFormVisible(true);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task === editingTask) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTask(null);
    setTaskFormVisible(false);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDescription = (index) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };

  return (
    <div className="task-list-container">
      <button onClick={() => setTaskFormVisible(true)} className="add-btn">
        Add Task
      </button>
      {taskFormVisible && (
        <TaskForm
          onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          onCancel={() => {
            setTaskFormVisible(false);
            setEditingTask(null);
          }}
          initialValue={editingTask}
        />
      )}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`${activeIndex === index ? "active" : ""} ${
              task.priority.toLowerCase() === "high" ? "high-priority" : ""
            } ${task.status.toLowerCase()}`}
          >
            <div className="task-info">
              <h3>
                {task.title} {task.status} {task.priority}
              </h3>
              <button
                onClick={() => handleDescription(index)}
                className="show-description"
              >
                View Description
              </button>
              <button
                onClick={() => handleEditTask(task)}
                className="delete-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="edit-btn"
              >
                Delete
              </button>
            </div>
            {activeIndex === index && (
              <div className="task-description">
                <p>{task.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
