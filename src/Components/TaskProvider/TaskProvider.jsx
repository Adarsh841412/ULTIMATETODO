import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [searchTask, setSearchTask] = useState("");

  const addTask = (newTask, id) => {
    if (id === "delete") {
      setTask(newTask);
    } else if (id) {
      const updated = task.map((ele) =>
        ele.id !== id ? ele : newTask
      );
      setTask(updated);
    } else {
      setTask((prev) => [...prev, newTask]);
    }
  };

  // ✅ filter logic
  const filteredTask =
    searchTask.trim() === ""
      ? task
      : task.filter((item) =>
          Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchTask.toLowerCase())
        );

  return (
    <TaskContext.Provider
      value={{ task, filteredTask, addTask, setSearchTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
