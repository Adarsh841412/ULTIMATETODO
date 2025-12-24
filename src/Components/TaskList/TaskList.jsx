import React from 'react'
import TaskItem from '../TaskItem/TaskItem'






const TaskList = ({ task }) => {
  return (
    <div className="TaskList">
      {task.map((item) => (
        <TaskItem key={item.id} tasks={item} />
      ))}
    </div>
  )
}

export default TaskList
