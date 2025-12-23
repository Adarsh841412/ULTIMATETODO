import React, { useCallback, useState } from 'react'
import Header from '../Components/Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { TaskContext } from '../Components/TaskProvider/TaskProvider';
import { useContext } from 'react';


const AddTaskPage = ({ headerText }) => {

  const navigate = useNavigate();
  const { task, addTask } = useContext(TaskContext)

  let [tasks, setTasks] = useState(
    {
      title: "",
      description: "",
      id:"",
      status: "pending",
      createdAt:""
    }
  )




  function initialTask(e) {

    setTasks(() => {
      return { ...tasks, [e.target.name]: e.target.value }
    })
  }


  function handleFrm(e) {

    e.preventDefault();
    addTask({...tasks,id:Date.now(),createdAt:Date.now()});
   
    setTasks({
          title: "",
      description: "",
      id: "",
      status: "pending"
    })
    navigate("/")
  }

 
  return (

    <div className='AddTask'>

      <Header text={headerText} />
      <form onSubmit={handleFrm}>
        <div className='AddTasks'>

          <input placeholder='Enter the Title' name='title' onChange={initialTask} value={tasks.title}></input>

          <textarea placeholder="Enter the Description" rows={5} name='description' onChange={initialTask} value={tasks.description}></textarea>

          <div className='Buttons'>

            <Link to="/"><button className='ButtonCancel' type='button'>Cancel</button></Link>
            
            <button className='ButtonAdd' type='submit'>ADD</button>

          </div>

        </div>

      </form>

    </div>

  )
}

export default AddTaskPage