import React from "react";
import ToDoCard from "./ToDoCard";
import "./ContentToDoCard"; // Create a CSS file for styling if needed

const ToDoCardList = ({ data }) => {
  return (
    <div className="to-do-grid">
      {data.map((item, index) => (
        <ToDoCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ToDoCardList;