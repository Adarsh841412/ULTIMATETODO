import React, { useCallback, useState } from 'react'
import Header from '../Components/Header/Header'
import DropDown from '../Components/DropDown/DropDown'
import { Link } from 'react-router-dom'
import { TaskContext } from '../Components/TaskProvider/TaskProvider'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const EditTaskPage = ({ headerText}) => {

const navigate=useNavigate();
const{task,addTask}=useContext(TaskContext);

const[currTask,setCurrTask]=useState({
  title:"",
  description:"",
  createdAt:"",
  status:"pending",
  id:"",


})
  const obj=useLocation();
useEffect(()=>{

  const data=obj.state;
  setCurrTask({title:data.title,description:data.description,createdAt:Date.now(),status:data.status,id:data.id})

},[])


function handleFrm(e){
e.preventDefault();
addTask(currTask,currTask.id);
navigate("/")
}


function handleUpdate(e){
setCurrTask(()=>{
  return {...currTask,[e.target.name]:e.target.value}
})
}




  return (
    <div className='AddTask'>

      <Header text={headerText} />
<form onSubmit={handleFrm}>
      <div className='AddTasks'>

        <input placeholder='Enter the Title' value={currTask.title} onChange={handleUpdate} name='title'  style={{cursor:"pointer"}}></input>

        <textarea placeholder="Enter the Description" rows={5} value={currTask.description}  onChange={handleUpdate} name='description' style={{cursor:"pointer"}}></textarea>

      <DropDown
  value={currTask.status}
  onChange={(status) =>
    setCurrTask((prev) => ({ ...prev, status }))
  }
/>



        <div className='Buttons'>

         <Link to="/"> <button className='ButtonCancel'>Cancel</button></Link>
          <button className='ButtonAdd' type='submit'>ADD</button>

        </div>


      </div>
</form>

    </div>
  )
}

export default EditTaskPage