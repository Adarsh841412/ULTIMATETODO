// App.jsx
import HomePage from "./Pages/HomePage";
import AddTaskPage from "./Pages/AddTaskPage";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EditTaskPage from "./Pages/EditTaskPage";
import TaskProvider from "./Components/TaskProvider/TaskProvider";
function App() {
  return (

    <TaskProvider>
      <div className="main-parent">

        <div className="parent">

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/add" element={<AddTaskPage headerText={"Add Task"} />} ></Route>
              <Route path="/edit" element={<EditTaskPage headerText={"Edit Task"} />}></Route>
            </Routes>


          </BrowserRouter>
        </div>


      </div>
    </TaskProvider>
  )
}

export default App;
