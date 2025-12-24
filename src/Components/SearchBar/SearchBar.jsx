import React, { useContext } from 'react';
import { TaskContext } from '../TaskProvider/TaskProvider';

const SearchBar = () => {
  const { setSearchTask } = useContext(TaskContext);

  return (
    <div className='SearchBar'>
      <div className='SearchBar-child'>
        <span className='Search-icon'>
          <i className="fa fa-search"></i>
        </span>

        <input
          placeholder='Search To-Do'
          onChange={(e) => setSearchTask(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
