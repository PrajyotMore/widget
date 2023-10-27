import React from "react";
import "./to-do-card.css";

const ToDoCard = ({ data }) => {
  return (
    <div className="to-do-card">
      <div className="details">
        <div className="header3">
          <div className="to-do-date-n-mobile">
            <div className="to-do-date">{data.toDoDate}</div>
            <div className="to-do-mobile">{data.toDoMobile}</div>
          </div>
          <div className="divider-h1">
            <img className="divider-h-child" alt="" src="/line-341.svg" />
          </div>
        </div>
        <div className="time-n-type">
          <div className="to-do-start-time">{data.toDoStartTime}</div>
          <div className="toDo-type">{data.toDoType}</div>
          <div className="to-do-end-time">{data.toDoEndTime}</div>
        </div>
        <div className="to-do-description">{data.toDoDescription}</div>
      </div>
    </div>
  );
};

export default ToDoCard;
