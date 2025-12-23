import React from 'react'
import TaskList from '../TaskList/TaskList'
import { useContext ,useState} from 'react'
import { TaskContext } from '../TaskProvider/TaskProvider'
const TaskDashBoard = () => {

const{task,addTask}=useContext(TaskContext)

let pendingTasks=task.filter(ele=>ele.status==="pending")
let inProgress=task.filter(ele=>ele.status==="inProgress")
let completed=task.filter(ele=>ele.status==="completed")


let[activeStatus,setActiveStatus]=useState(null);


  return (
    <div className='TaskDashBoard'>

<div className='TaskDashBoard-child'>
  
<div
  className="individual"
  onClick={() => setActiveStatus("inProgress")}
>
  inProgress ({inProgress.length})
</div>

{activeStatus === "inProgress" && (
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