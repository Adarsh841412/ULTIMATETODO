import React, { useCallback, useState ,createContext} from 'react'
export const TaskContext=createContext();
const TaskProvider = ({children}) => {

    const[task,setTask]=useState([])
    
      const addTask = (newTask,id) => {
    

        //* search filter

if(id=="filter0"){
  
console.log("all good")
}

else if(id=="filter1"){
console.log("not good")


}
     //*delete
     
    else if(id=="delete"){
      setTask(newTask)
     }


        //* update
    else if(id){
      let newArr=[]
      task.map((ele)=>{
        if(ele.id!=id) newArr.push(ele);
        else{
          newArr.push(newTask);
        }
      })
  
setTask(newArr);
    }   
    
    
   //* add
   else {
  
    setTask((prev) => {


      return [...prev, newTask];
    });
   }
 
  };
  return (
    <TaskContext.Provider  value={{task,addTask}}>

{children}


    </TaskContext.Provider>
  )
}

export default TaskProvider;