import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../TaskProvider/TaskProvider';
import { useContext } from 'react';
const TaskItem = ({ tasks }) => {

const{task,addTask}=useContext(TaskContext);


const navigate=useNavigate();
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }

  const formattedDate = new Date(tasks.id).toLocaleDateString(
    'en-IN',
    options
  )


//* delete Task 

function deleteTask(currTask){

  const remainingTask=task.filter((el)=>el.id!=currTask.id);
  addTask(remainingTask,"delete");

}



  return (

    <div className="Task-Item">

      {/* PROFILE CIRCLE */}
      <div className="Individual-Task-Profile">
        <div className="circle">
          {tasks.title[0].toUpperCase()}
        </div>
      </div>

      {/* TASK CONTENT */}
      <div className="task-items">

        <div className="Individual-Task-title">
          <p style={{ color: "#034EA2", fontSize: "larger" }}>
            {tasks.title[0].toUpperCase() + tasks.title.slice(1)}
          </p>
          <p style={{fontSize:"smaller"}}>{tasks.description}</p>
          <p style={{fontSize:"smaller"}}>{formattedDate}</p>
        </div>

        {/* STATUS ICONS */}
        <div className="Individual-Task-Status">

          {tasks.status === "pending" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "gray", marginRight: "6px",fontSize:"7px" }}
              ></i>
              <span>Pending</span>
            </>
          )}


  {tasks.status === "progress" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "#FFB03C", marginRight: "6px" , fontSize:"7px"}}
              ></i>
              <span>Pending</span>
            </>
          )}



            {tasks.status === "completed" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "#368A04", marginRight: "6px",fontSize:"7px" }}
              ></i>
              <span>Pending</span>
            </>
          )}

        </div>

 <div className="icons">

<Link to="/edit" state={tasks}>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#034EA2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
</Link>



  <i className="fa-regular fa-trash-can" style={{color:"red"}}  onClick={()=>deleteTask(tasks)}></i>
            
          </div>

      </div>
    </div>
  )
}

export default TaskItem
