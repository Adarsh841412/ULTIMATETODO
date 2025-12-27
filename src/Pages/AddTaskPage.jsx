import React, { useState, useContext } from 'react'
import Header from '../Components/Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { TaskContext } from '../Components/TaskProvider/TaskProvider'

const AddTaskPage = ({ headerText }) => {

  const navigate = useNavigate()
  const { addTask } = useContext(TaskContext)

  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    id: "",
    status: "pending",
    createdAt: ""
  })

  const [descTouched, setDescTouched] = useState(false)

  // INPUT HANDLER 
  function initialTask(e) {
    const { name, value } = e.target

    if (name === "description") {
      setDescTouched(true)
    }

    setTasks((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // ---------------- FORM SUBMIT ----------------
  function handleFrm(e) {
    e.preventDefault()

    if (!tasks.title.trim()) return

    addTask({
      ...tasks,
      id: Date.now(),
      createdAt: Date.now()
    })

    setTasks({
      title: "",
      description: "",
      id: "",
      status: "pending",
      createdAt: ""
    })

    setDescTouched(false)
    navigate("/")
  }

  const isTitleFilled = tasks.title.trim().length > 0

  return (
    <div className='AddTask'>

      <Header text={headerText} />

      <form onSubmit={handleFrm}>
        <div className='AddTasks'>

          {/* -------- TITLE INPUT -------- */}
          <input
            placeholder='Enter the Title'
            name='title'
            value={tasks.title}
            onChange={initialTask}
            className={`addInput ${
              descTouched && !tasks.title ? "inputError" : ""
            }`}
          />

          {/* -------- DESCRIPTION -------- */}
          <textarea
            className='addTextArea'
            placeholder='Enter the Description'
            rows={5}
            name='description'
            value={tasks.description}
            onChange={initialTask}
          ></textarea>

          {/* -------- BUTTONS -------- */}
          <div className='Buttons'>

            <Link to="/">
              <button className='ButtonCancel' type='button'>
                Cancel
              </button>
            </Link>

            <button
              className={`ButtonAdd addButton ${
                isTitleFilled ? "activeBtn" : "disabledBtn"
              }`}
              type='submit'
              disabled={!isTitleFilled}
            >
              ADD
            </button>

          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTaskPage
