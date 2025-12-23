import React from 'react'

const TaskItem = ({ task }) => {

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
          <p>{task.description}</p>
          <p>{formattedDate}</p>
        </div>

        {/* STATUS ICONS */}
        <div className="Individual-Task-Status">

          {task.status === "pending" && (
            <>
              <i
                className="fa-solid fa-circle"
                style={{ color: "gray", marginRight: "6px" }}
              ></i>
              <span>Pending</span>
            </>
          )}

          <div className="icons">
            <i className="fa-regular fa-trash-can"></i>
            <i className="fa-solid fa-pencil"></i>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TaskItem
