import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ task }) => {
  return (
    <div className="TaskList">
      {task.map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  )
}

export default TaskList
