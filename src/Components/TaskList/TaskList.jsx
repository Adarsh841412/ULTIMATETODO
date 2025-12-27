import React from 'react'
import TaskItem from '../TaskItem/TaskItem'






const TaskList = ({ task }) => {

    if (task.length === 0) {
    return (
      <div className="no-task">
        No tasks in this section.
      </div>
    )
  }



  return (



    <div className="TaskList">
      {task.map((item) => (
        <TaskItem key={item.id} tasks={item} />
      ))}
    </div>
  )
}

export default TaskList
