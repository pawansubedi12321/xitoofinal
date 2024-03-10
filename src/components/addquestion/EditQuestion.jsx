// import React from 'react'
// import Loginpage from "../LoginPage";
// const EditQuestion = () => {
//   return (
    
//     <div>
//         <Loginpage/>
//         <div className="container-fluid container-xss">

//         </div>
//         </div>
//   )
// }

// export default EditQuestion
import React, { useState } from "react";
import "./AddQuestion.css";
import BackButton from "../addcategory/assets/BackButton.png";
import Cross from "../addcategory/assets/Close.svg";
import Savebtn from "./assets/Savebtn.svg";
import { useScrollTrigger } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";
import Loginpage from "../LoginPage";
const EditQuestion = () => {
  const navigate = useNavigate();
  const [question, setquestion] = useState("");
  const [describe, setdescribe] = useState("");
  const [number, setnumber] = useState(false);
  const { state } = useLocation();
  const [save, setsave] = useState([]);

  try {
    if (state === null || state === "") {
      console.log("image is null or empty");
    }
  } catch {
    console.log("error handled");
  }
  const savebtn = async (e) => {
    e.preventDefault();
    // console.log("this is img");
    // console.log(image);
    // console.log("close");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhOWJiODc0LWIxNTItNGE4Zi1iZDgzLWI3ZmJhZjBmMWIzNSIsInBob25lIjoiOTgwODIxNzcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNDYwNjE5MSwiZXhwIjoxNzA1MDM4MTkxfQ.BgZrspCyW64kbrrMw3q3E6AWPO2DKFtPKRGzd_4xe5A";

    if (state && typeof state[Symbol.iterator] === "function") {
      const data = {
        question: question,
        describe: describe,
      };
      // console.log(categorylist);
      setsave([...save, ...state, data]);
      setnumber(!number);
    } else {
      const data = {
        question: question,
        describe: describe,
      };
      setnumber(!number);
      setsave([...save, data]);
      console.log("state is not iterable or is null/empty");
      // Handle the case where state is not iterable or is null/empty
    }
  };
  if (number === true) {
    navigate("/question", { state: save });
  }
  const questionhere = (e) => {
    const x = e.target.value;
    setquestion(x);
  };
  const description = (e) => {
    const x = e.target.value;
    setdescribe(x);
  };
  const closebutton = () => {
    navigate("/question");
  };
  const backbutton = () => {
    navigate("/question");
  };

  // const backbtn=()=>{
  //   navigate("/question",{state:save})
  // }
  return (
    <div>
      <Loginpage/>
      <div className="container-fluid container-xss">
      <div className="row mainpage  addproblem-pg">
      
      <div className="col-md-8">
        <form>
      <div className="addproblempage">
      <div className="row">
      <div className="col-md-12 addprob-head">
      <img className="backbutton"onClick={backbutton}src={BackButton} alt="backbutton"/>
      <h9 className="add-question">EDIT QUESTION</h9>
      <div onClick={closebutton} alt="closebutton"className="closebutton ">
                  <ClearIcon className="clearicon" />
      </div>

        </div>

        <p className="description">
            Provide a brief, description title for your question
          </p>

          <div class="input-group mb-3">
  <input onChange={questionhere} style={{ color: "white" }} type="text" className="questionhere"placeholder="Please type your question here..."/>
</div>

<div class="input-group">
  <textarea placeholder="Describe your answer in brief" onChange={description} style={{ color: "white" }} className="describe" aria-label="With textarea"></textarea>
</div>

<div className="save-ddd">
  
 

            <button onClick={savebtn} className="savebutton-ddd">
              SAVE
            </button>
            
            
     </div>












        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
      
    </div>
  );
};

export default EditQuestion;
