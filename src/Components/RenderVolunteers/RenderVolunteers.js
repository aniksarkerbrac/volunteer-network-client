import React, { useState } from "react";
import "./RenderVolunteers.css";
import trash from "../../logos/trash.png";
const RenderVolunteers = (props) => {
  const [toggle, setToggle] = useState(false);

  const { _id, name, email, selectedDate, task } = props.tsk;
  const deleteThisTask = (e) => {
    setToggle(true);
    fetch(`https://mern-volunteer-networks.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  return (
    <tr className={toggle ? "remove" : "table-row"}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{selectedDate}</td>
      <td>{task}</td>
      <td>
        <button className="trash-btn" onClick={deleteThisTask}>
          <img className="trash" src={trash} alt="trash"></img>
        </button>
      </td>
    </tr>
  );
};

export default RenderVolunteers;
