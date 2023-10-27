import React from "react";
import "./ContentToDoCard.css";
import "./global.css";
import Content4X4 from "./Content4X4";
import SdWidget from "./SdWidget";
import ToDoCard from "./ToDoCard";
import ToDoCardList from "./ToDoCardList";

const ContentToDoCard = () => {
  const data = [
    {
      toDoDate: "22nd November 2019",
      toDoMobile: "9664346653",
      toDoStartTime: "10:00 AM",
      toDoType: "Phonecall",
      toDoEndTime: "2:30 PM",
      toDoDescription:
        "Yogesh schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "23rd November 2019",
      toDoMobile: "9664346652",
      toDoStartTime: "11:00 AM",
      toDoType: "Videocall",
      toDoEndTime: "3:00 PM",
      toDoDescription:
        "Prajyot schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "24th November 2019",
      toDoMobile: "9664346651",
      toDoStartTime: "12:00 AM",
      toDoType: "Email",
      toDoEndTime: "9:30 PM",
      toDoDescription:
        "Prathamesh schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "24th November 2019",
      toDoMobile: "9664346651",
      toDoStartTime: "12:00 AM",
      toDoType: "Email",
      toDoEndTime: "9:30 PM",
      toDoDescription:
        "Prathamesh schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "24th November 2019",
      toDoMobile: "9664346651",
      toDoStartTime: "12:00 AM",
      toDoType: "Email",
      toDoEndTime: "9:30 PM",
      toDoDescription:
        "Prathamesh schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "24th November 2019",
      toDoMobile: "9664346651",
      toDoStartTime: "12:00 AM",
      toDoType: "Email",
      toDoEndTime: "9:30 PM",
      toDoDescription:
        "Prathamesh schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    {
      toDoDate: "23th November 2019",
      toDoMobile: "9664346651",
      toDoStartTime: "12:00 AM",
      toDoType: "Video",
      toDoEndTime: "9:30 PM",
      toDoDescription:
        "Rahul schedule client Meeting with Easwara Balasubramanian Murthy",
    },
    // Add more data entries for additional cards here...
  ];

  return (
    <div className="content-to-do-card">
      <div className="h-scroll">
        <div className="to-do-grid">
          {data.map((item, index) => (
            <ToDoCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="navigation">
        <div className="navigation-child" />
        <div className="navigation-item" />
        <div className="navigation-item" />
      </div>
      <SdWidget Children={<Content4X4 />} />
      <SdWidget Children={<ToDoCardList data={data} />} widgetName={"General Card"} counterNumber={45} />
    </div>
  );
};

export default ContentToDoCard;
