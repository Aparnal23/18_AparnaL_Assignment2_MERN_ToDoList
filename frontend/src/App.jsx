import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch all tasks when page loads
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        title: title
      });

      setTasks([response.data, ...tasks]);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Mark task complete/incomplete
  const toggleTask = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        completed: !completed
      });

      setTasks(
        tasks.map((task) =>
          task._id === id ? response.data : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setTasks(
        tasks.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app">
      <div className="todo-container">

        <h1>To-Do List</h1>

        {/* Add Task Form */}
        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button type="submit">
            Add Task
          </button>
        </form>

        {/* Task List */}
        <div className="task-list">

          {tasks.length === 0 ? (
            <p className="no-tasks">
              No tasks available.
            </p>
          ) : (
            tasks.map((task) => (
              <div
                className={`task-item ${
                  task.completed ? "completed" : ""
                }`}
                key={task._id}
              >

                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      toggleTask(task._id, task.completed)
                    }
                  />

                  <span>{task.title}</span>
                </div>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>

        <p className="task-count">
          Total Tasks: {tasks.length}
        </p>

      </div>
    </div>
  );
}

export default App;