import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../TaskProvider/TaskProvider';
import { useContext } from 'react';
const TaskItem = ({ task }) => {


const navigate=useNavigate();
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }

  const formattedDate = new Date(task.id).toLocaleDateString(
    'en-IN',
    options
  )


//* delete Task 

function deleteTask(task){

}



  return (
    <div className="Task-Item">

      {/* PROFILE CIRCLE */}
      <div className="Individual-Task-Profile">
        <div className="circle">
          {task.title[0].toUpperCase()}
        </div>
      </div>

      {/* TASK CONTENT */}
      <div className="task-items">

        <div className="Individual-Task-title">
          <p style={{ color: "#034EA2", fontSize: "larger" }}>
            {task.title[0].toUpperCase() + task.title.slice(1)}
          </p>
          <p style={{fontSize:"smaller"}}>{task.description}</p>
          <p style={{fontSize:"smaller"}}>{formattedDate}</p>
        </div>

        {/* STATUS ICONS */}
        <div className="Individual-Task-Status">

          {task.status === "pending" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "gray", marginRight: "6px",fontSize:"7px" }}
              ></i>
              <span>Pending</span>
            </>
          )}


  {task.status === "progress" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "#FFB03C", marginRight: "6px" , fontSize:"7px"}}
              ></i>
              <span>Pending</span>
            </>
          )}



            {task.status === "completed" && (
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

  <Link to="/edit" state={task} ><i className="fa-solid fa-pencil"  style={{color:"#034EA2"}}></i> </Link>      
  
  <i className="fa-regular fa-trash-can" style={{color:"red"}}  onClick={()=>deleteTask(task)}></i>
            
          </div>

      </div>
    </div>
  )
}

export default TaskItem
