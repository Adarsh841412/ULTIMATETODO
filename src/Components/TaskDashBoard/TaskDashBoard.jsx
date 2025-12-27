import React, { useContext, useState } from "react";
import TaskList from "../TaskList/TaskList";
import { TaskContext } from "../TaskProvider/TaskProvider";

const TaskDashBoard = () => {
  const { filteredTask } = useContext(TaskContext);

  const pendingTasks = filteredTask.filter(
    (ele) => ele.status === "pending"
  );
  const inProgress = filteredTask.filter(
    (ele) => ele.status === "progress"
  );
  const completed = filteredTask.filter(
    (ele) => ele.status === "completed"
  );


  
  const [activeStatus, setActiveStatus] = useState(null);

  const toggleStatus = (status) => {
    setActiveStatus(activeStatus === status ? null : status);
  };

  return (
    <div className="TaskDashBoard">
      <div className="TaskDashBoard-child">

        {/* IN PROGRESS */}
        <div className="individual" onClick={() => toggleStatus("progress")}>
          <span>In Progress <b>({inProgress.length})</b></span>
          <i
            className={`fa-solid fa-chevron-down dash-arrow ${
              activeStatus === "progress" ? "rotate" : ""
            }`}
          ></i>
        </div>

        {activeStatus === "progress" && (
          <TaskList task={inProgress} />
        )}

        {/* PENDING */}
        <div className="individual" onClick={() => toggleStatus("pending")}>
          <span>Pending <b>({pendingTasks.length})</b></span>
          <i
            className={`fa-solid fa-chevron-down dash-arrow ${
              activeStatus === "pending" ? "rotate" : ""
            }`}
          ></i>
        </div>

        {activeStatus === "pending" && (
          <TaskList task={pendingTasks} />
        )}

        {/* COMPLETED */}
        <div className="individual" onClick={() => toggleStatus("completed")}>
          <span>Completed <b>({completed.length})</b></span>
          <i
            className={`fa-solid fa-chevron-down dash-arrow ${
              activeStatus === "completed" ? "rotate" : ""
            }`}
          ></i>
        </div>

        {activeStatus === "completed" && (
          <TaskList task={completed} />
        )}

      </div>
    </div>
  );
};

export default TaskDashBoard;
