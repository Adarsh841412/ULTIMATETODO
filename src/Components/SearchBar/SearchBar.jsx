import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from '../TaskProvider/TaskProvider'

const SearchBar = () => {

  const{task,addTask}=useContext(TaskContext);

 
const [searchValue, setSearchValue] = useState(""); 
const [filteredTask, setFilteredTask] = useState(task); 

const handleSearch=function(e){

  setSearchValue(e.target.value);
   
  if(searchValue){

    const filteredData=task.filter(item=>{

return Object.values(item)
  .join('')
  .toLowerCase()
  .includes(searchValue.toLowerCase());

    });

setFilteredTask(filteredData);


  }
  else{
    setFilteredTask(task)
  }
};

useEffect(()=>{

  if(filteredTask.length==0){
  
    addTask(task,"filter0")
  }
  else{
  addTask(filteredTask,"filter1")
  }
    
  
},[filteredTask])


  return (
    <div className='SearchBar'>
       
  <div className='SearchBar-child'>


     <span className='Search-icon'><i class="fa fa-search" ></i></span>
     <input placeholder='Search To-Do' onChange={handleSearch} />


    </div>
    </div>
  )
}

export default SearchBar