import React from 'react'
import TaskList from '../TaskList/TaskList'
import { useContext ,useState} from 'react'
import { TaskContext } from '../TaskProvider/TaskProvider'
const TaskDashBoard = () => {

const{task,addTask,filteredTask}=useContext(TaskContext)

let pendingTasks=filteredTask.filter(ele=>ele.status==="pending")
let inProgress=filteredTask.filter(ele=>ele.status==="progress")
let completed=filteredTask.filter(ele=>ele.status==="completed")

let[activeStatus,setActiveStatus]=useState(null);


  return (
    <div className='TaskDashBoard'>

<div className='TaskDashBoard-child'>
  
<div
  className="individual"
  onClick={() => setActiveStatus("progress")}
>
  in Progress &nbsp;<b>({inProgress.length}) </b>
</div>

{activeStatus === "progress" && (
  <TaskList task={inProgress} />
)}


<div
  className="individual"
  onClick={() => setActiveStatus("pending")}
>
  Pending &nbsp; <b>({pendingTasks.length}) </b>
</div>

{activeStatus === "pending" && (
  <TaskList task={pendingTasks} />
)}


<div
  className="individual"
  onClick={() => setActiveStatus("completed")}
>
  Completed &nbsp; <b>({completed.length})</b>  
</div>

{activeStatus === "completed" && (
  <TaskList task={completed} />
)}


</div>
    </div>
  )
}

export default TaskDashBoard