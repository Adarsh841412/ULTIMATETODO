import React from 'react'
import TaskList from '../TaskList/TaskList'
import { useContext ,useState} from 'react'
import { TaskContext } from '../TaskProvider/TaskProvider'
const TaskDashBoard = () => {

const{task,addTask}=useContext(TaskContext)

let pendingTasks=task.filter(ele=>ele.status==="pending")
let inProgress=task.filter(ele=>ele.status==="progress")
let completed=task.filter(ele=>ele.status==="completed")

console.log("dffasddf", inProgress);
let[activeStatus,setActiveStatus]=useState(null);


  return (
    <div className='TaskDashBoard'>

<div className='TaskDashBoard-child'>
  
<div
  className="individual"
  onClick={() => setActiveStatus("progress")}
>
  inProgress ({inProgress.length})
</div>

{activeStatus === "progress" && (
  <TaskList task={inProgress} />
)}


<div
  className="individual"
  onClick={() => setActiveStatus("pending")}
>
  Pending ({pendingTasks.length})
</div>

{activeStatus === "pending" && (
  <TaskList task={pendingTasks} />
)}


<div
  className="individual"
  onClick={() => setActiveStatus("completed")}
>
  Completed ({completed.length})
</div>

{activeStatus === "completed" && (
  <TaskList task={completed} />
)}


</div>
    </div>
  )
}

export default TaskDashBoard