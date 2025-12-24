import React, { useCallback, useState ,createContext} from 'react'
export const TaskContext=createContext();
const TaskProvider = ({children}) => {

    const[task,setTask]=useState([])
      const addTask = (newTask,id) => {
    if(id){
      let newArr=[]
      task.map((ele)=>{
        if(ele.id!=id) newArr.push(ele);
        else{
          newArr.push(newTask);
        }
      })
  
setTask(newArr);
    }   
    
    
   
   else setTask((prev) => [...prev, newTask]);
  };
  return (
    <TaskContext.Provider  value={{task,addTask}}>

{children}


    </TaskContext.Provider>
  )
}

export default TaskProvider;