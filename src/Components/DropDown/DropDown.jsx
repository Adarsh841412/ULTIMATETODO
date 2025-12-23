import React, { useState } from "react";

const DropDown = () => {
  const options = [
    { label: "Pending", icon: "fa-regular fa-circle gray" },
    { label: "In Progress", icon: "fa-regular fa-circle yellow" },
    { label: "Completed", icon: "fa-regular fa-circle  green" },
  ];

  const [showDropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setDropDown(false);
  };

  return (
    <div className="dropdown-wrapper">
      {/* MAIN BOX */}
      <div className="DropDown" onClick={() => setDropDown(!showDropDown)}>
        <i className={selected.icon}></i>
        <span>{selected.label}</span>
      </div>

      {/* OPTIONS */}
      {showDropDown && (
        <div className="statusOptionParent">
          {options.map((ele) => (
            <div
              key={ele.label}
              className="status-option"
              onClick={() => handleSelect(ele)}
            >
              <i className={ele.icon}></i>
              <span>{ele.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
