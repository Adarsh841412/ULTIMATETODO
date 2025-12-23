import React from 'react'
import Header from '../Components/Header/Header'
import SearchBar from '../Components/SearchBar/SearchBar'
import TaskDashBoard from '../Components/TaskDashBoard/TaskDashBoard'
import AddTaskPage from './AddTaskPage'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
   <div className='HomePage'>
      
  <Header text={"TO-DO APP"}/>
  <SearchBar/>
  <TaskDashBoard/>
  
  <Link to="/add"><button className='HomePageButton'>+</button></Link>
 
   </div>
  )
}

export default HomePage