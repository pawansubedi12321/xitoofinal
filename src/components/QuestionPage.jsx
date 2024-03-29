import React, { useEffect, useState } from "react";
import WhiteLogo1 from "../assets/WhiteLogo1.png";
import CategoryPage from "./CategoryPage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../assets/Rectangle2.png";
import Group from "../assets/Group.svg";
import Items from "../assets/Items.svg";
import { useNavigate, useLocation } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon.svg";
import "./css/QuestionPage.css";
import Arrow from "../assets/Arrow.svg";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Navbar from "./navbar/Navbar";
import { Troubleshoot } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import Topbar from './Topbar/Topbar.jsx'
const QuestionPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [empty, setempty] = useState(false);
  const [click, setclick] = useState(false);
  const [iconclicked, seticonclicked] = useState(false);
  const [ind, setind] = useState("");
  // const [show, setshow] = useState(false);
  const [showpage, setshowpage] = useState(false);
  const [downbuttonindex, setdownbuttonindex] = useState("");
  const [buttonindex, setbuttonindex] = useState("");
  const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);
 
  console.log("hello");
  console.log(state);
  console.log("end");

  useEffect(() => {
    if (state === null) {
      setempty(true);
    } else {
      setempty(false);
    }
  }, [setempty]);

  const dashboard = () => {
    navigate("/dashboard");
  };
  const category = () => {
    navigate("/CategoryPage");
  };

  const addquestion = () => {
    navigate("/addquestion", { state: state });
  };
  const booking = () => {
    navigate("/booking");
  };

  const mouseover = () => {
    setclick(true);
    // console.log("mouse over");
  };
  const mousedown = () => {
    setshownotificationicon(false);
   
  };

  const clicked = (index) => {
    seticonclicked(!iconclicked);
    setind(index);
    navigate('/editquestion');
  };

  const downbutton = (index) => {
    setdownbuttonindex(index);
    setshow(true);
  };

  const button = (index) => {
    setshowpage(!showpage);
    setbuttonindex(index);
    console.log("this is button index");
    console.log(index);

    console.log("End");
  };
  console.log("this is show");
  console.log(show);
  console.log("end");
  const show_332 = () => {
    setshow(!show);
  };
  return (
    <div>
      <div className="section-padding section-bg">
        {/* <div className="container-fluid"> */}
          <div className="row secondpage">
            <div className="col-md-2  firstcolumn">
              <Navbar />
            </div>
            <div className="col-md-9 col-sm-12 secondcolumn">
              <div className="row">

              <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
                

                <div className={`${shownotificationicon?"hide":""} col-md-12 questioncontent`}>
                 

                  <div className="question">
                    <img
                      src={Group}
                      className={` ${empty ? "img-dds" : "none"} `}
                      alt="questionimg"
                    />
                    <p className={` ${empty ? "category-ddx" : "none"}`}>
                      Oops! This category is currently empty.
                    </p>
                  </div>
                  <div
                    className={`${empty ? "noneaddquestion" : "addquestion"} `}
                  >
                    <button
                      onClick={addquestion}
                      className={`button`}
                      alt="question"
                    >
                      <span>
                        <AddIcon className="addicon" />
                        <span>ADD QUESTION</span>
                      </span>
                    </button>
                  </div>


                  <div className={`${empty ? "none" : "list"}`}>
                     {state === null || state == "#9747FF"
                      ? ""
                      : state.map((item, index) => (
                          // <div className={`${empty ? "none" : ""}`}>
                            <div className="question-answer">
                              <div className="col-md-12 question-ss">
                              <div className="row">
                              
                                <div className="col-md-10 questionpage-332">
                                <p>
                                {empty ? "none" : item.question}
                                </p>
                                </div>
                            
                              <div className="col-md-2 icon-w2 gx-2">
                                <div
                                  onClick={() => clicked(index)}
                                  className={`mx-2 icon-332`}
                                  key={index}
                                >
                                  <a title="edit"><EditIcon className="editquestion-icon"/></a>
                                </div>


                                <div className="clearicon  icon-w2 gx-2">
                                <div
                                  onClick={() => clicked(index)}
                                  className={`icon-332`}
                                  key={index}
                                >
                                  <a title="delete"><ClearIcon className="clearquestion-icon"/></a>
                                </div>
                              </div>



                              <div
                                className=" btn033 mx-2 gx-2"
                                onClick={() => button(index)}
                              >
                                <div className="show-ee3">
                                {showpage && buttonindex == index ? (
                                  <KeyboardArrowUpIcon />
                                ) : (
                                  <KeyboardArrowDownIcon />
                                )}
                                </div>
                              </div>



                              </div>


                              

                              
                              </div>

                              

                              


                            
                           </div>
                           {showpage && buttonindex == index ? (
                            <div className="col-md-12 answer-here">
                              <p className="answer">
                                {empty ? "none": item.describe }
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                          </div>
                           
                        ))} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      
    </div>
  );
};

export default QuestionPage;
