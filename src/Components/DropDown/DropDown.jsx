import React, { useState } from "react";

const DropDown = ({ value, onChange }) => {
  const options = [
    { label: "Pending", value: "pending", icon: "gray" },
    { label: "In Progress", value: "progress", icon: "yellow" },
    { label: "Completed", value: "completed", icon: "green" },
  ];

  const [showDropDown, setDropDown] = useState(false);

  const selected =
    options.find((opt) => opt.value === value) || options[0];

  const handleSelect = (option) => {
    onChange(option.value);  
    setDropDown(false);
  };

  return (
    <div className="dropdown-wrapper">
      <div
        className="DropDown"
        onClick={() => setDropDown(!showDropDown)}
      >
        <i className={selected.icon}></i>
        <span>{selected.label}</span>
      </div>

      {showDropDown && (
        <div className="statusOptionParent">
          {options.map((ele) => (
            <div
              key={ele.value}
              className="status-option"
              onClick={() => handleSelect(ele)}
            >
              <span className={`EditIconColor ${ele.icon}`}> </span>
              <span>{ele.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
