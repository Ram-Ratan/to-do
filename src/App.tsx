import React, { useState } from "react";
import "./App.css";
import ToDo from "./component/toDo/ToDo";
import closeImage from "../src/assets/close.png";

const App: React.FC = () => {
  const [isInfo, setIsInfo] = useState<boolean>(false);
  return (
    <div className="App">
      <img
        src="assets/TEYA-Graphic 1.png"
        alt="graphic-1"
        className="graphic-1"
      />
      <p className="description">
        Welcome to Grandma TEYA’s To Do List Creator. Try it out below and get
        organised.... with a twist.
      </p>
      <ToDo />
      <div
        style={{
          width: "19px",
          height: "19px",
          borderRadius: "50%",
          border: "2px solid #FF0000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FF0000",
          position: "absolute",
          right: "20px",
          top: "20px",
          cursor: "pointer",
        }}
        onClick={() => setIsInfo(!isInfo)}
      >
        {isInfo ? "x" : "i"}
      </div>
      {isInfo && (
        <div className="popUp">
          <p>Welcome to Grandma TEYA's To Do List Creator.</p>
          <div onClick={() => setIsInfo(false)} style={{
            position: 'absolute',
            top: "18px",
            right: "18px",
            cursor: 'pointer'
          }}>
            <img src={closeImage} alt="close" width={"20px"} height={"20px"}/>
          </div>
          <p>
            This is a fun To-Do list app for TEYA's release “To-Do List”. Add a
            To-Do that you need to get done and an automatic wellbeing “Anti
            To-Do” will be created that you need to complete first. This allows
            you to get things done, but also look out for your mental health and
            wellbeing.
          </p>
          <p className="underline" onClick={()=> {window.open("https://lnk.cloudkid.com/todolist", "_blank")}}>Listen to To-Do List</p>
          <p className="underline" onClick={()=>{window.open("https://linktr.ee/whothehellisteya", "_blank")}}>Follow Teya</p>
        </div>
      )}
    </div>
  );
};

export default App;
