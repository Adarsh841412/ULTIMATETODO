import React, { useCallback, useState ,createContext} from 'react'
export const TaskContext=createContext();
const TaskProvider = ({children}) => {

    const[task,setTask]=useState([])
      const addTask = (newTask) => {
    setTask((prev) => [...prev, newTask]);
  };
  return (
    <TaskContext.Provider  value={{task,addTask}}>

{children}

    </TaskContext.Provider>
  )
}

export default TaskProvider;