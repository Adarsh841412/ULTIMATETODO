import React, { useCallback } from 'react'
import Header from '../Components/Header/Header'
import DropDown from '../Components/DropDown/DropDown'
const EditTaskPage = ({ headerText }) => {


  return (
    <div className='AddTask'>

      <Header text={headerText} />

      <div className='AddTasks'>

        <input placeholder='Enter the Title'></input>

        <textarea placeholder="Enter the Description" rows={5} ></textarea>

        <DropDown/>


        <div className='Buttons'>

          <button className='ButtonCancel'>Cancel</button>
          <button className='ButtonAdd'>ADD</button>

        </div>

      </div>


    </div>
  )
}

export default EditTaskPage