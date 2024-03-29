import React, { useEffect, useContext, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import WhiteLogo1 from "./assets/WhiteLogo1.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "./assets/Rectangle2.png";
import "./ProblemList.css";
import EmptyImg from "./assets/EmptyImg.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import AddIcon from "@mui/icons-material/Add";
import Arrow from "./assets/Arrow.svg";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import {UserContext} from '../App';
import {
  problemlist,
  token,
  fetchCategoryData,
  deleteproblemlist,
} from "../api/API.jsx";
import { UserContext } from "../../App.jsx";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import Topbar from '../Topbar/Topbar.jsx'
const ProblemLIst = () => {
  const { state } = useLocation();
  const [selectcategory, setselectcategory]= useState([]);
  const [clicked, setclicked] = useState(false);
  const [addproblem, setaddproblem] = useState(false);
  const [indexdata, setindexdata] = useState("");
  const [download, setdownload] = useState(false);
  
  const [Data, setData] = useState([]);
  const [categorydata, setcategorydata] = useState([]);
  const [uniquename, setuniquename] = useState([]);
  const { name, setname } = useContext(UserContext);
  
  const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);
  console.log("this is state",state);
    const categorylist=(value)=>{
      
    setname(value.name);
    setselectcategory(value.id);
  }
  console.log("this is name",name);
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchCategoryData(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setcategorydata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {


    const namesArray=categorydata.map((obj)=>{
      return {id:obj.id,name:obj.name.toUpperCase()}
    })

    setuniquename(namesArray);
   
  }, [categorydata]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${problemlist()}/${selectcategory.length !== 0?selectcategory:state}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectcategory]);
 
  localStorage.setItem("state", JSON.stringify(state));
  const navigate = useNavigate();
  const addproblempage = () => {
    navigate("/addproblem", { state: state });
    setaddproblem(true);
  };
  const mouseover = () => {
    setdownload(true);

  };
  const show_332 = () => {
    setshow(!show);
  };
  const mousedown = () => {
    setdownload(false);
  };
  const iconclicked = (index) => {
    setclicked(!clicked);
    setindexdata(index);
 
  };
  console.log("this is data",Data);
  console.log("this is state",state);

  const deletedata = async (id) => {
    
    try {
      const response = await fetch(deleteproblemlist() + `${id}`, {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      if (data) {
        alert("deleted succesfully");
      }

    } catch (error) {
      console.error("There was an error:", error);
    }

    const fetchData = async () => {
      
      try {
        const response = await axios.get(`${problemlist()}/${state}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };
  const closebutton = () => {
    navigate("/CategoryPage");
  };
 

  const edit=(item)=>{
    console.log("this is item",Data);

    const editeddata=Data.filter((data)=>data.id==item)
    console.log("this is edited data",editeddata);

    navigate('/editproblemlist',{state:{editeddata:editeddata,id:state}});
  }
  const maxLength = 21;
  let substring = name.substring(0, maxLength);
  if (name.length > maxLength) {
    substring += "...";
  }
  return (
    <div>
      <div className="section-padding section-bg">
        <div className="row secondpage">
          <div className="col-md-2  firstcolumn">
            <Navbar />
          </div>
          <div className="col-md-9 col-sm-12 secondcolumn">
            <div className="row">
            <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
              
              <div className={`col-md-12 content`}>


                <div className="row px-3 g-2">
                <select value=""  onChange={(event) => categorylist({ id: event.target.value, name: event.target.options[event.target.selectedIndex].text })} className={`col-md-2 col-4 select`}>
                
                    <option>Category</option>

                    {Data === null
                      ? ""
                      : uniquename.map((item, index) => (
                          <option value={item.id} >{item.name} </option>
                        ))}

                  </select>

            
                  <div className="col-md-3 gx-4 col-7">
                    <div className="item_332">
                    <span className="item_list">{substring}</span>

                    <div className="closebtn">
                      <CloseIcon
                        className="closebtn-33"
                        onClick={closebutton}
                      />
                    </div>
                    </div>
                  </div>
                 
                  
                  <div className={`${Data.length > 0 ? "col-md-7 px-4 col-12" : "none"}`}>
                     <div className="additem-432">
                    <button
                      onClick={addproblempage}
                      className={`${Data.length > 0 ? "item-xyz" : "nullitem"}`}
                    >
                      <span>
                        <AddIcon />
                      </span>
                      ADD problem
                    </button>
                    </div> 
                  </div>
                </div>

                

                <h1 className="prob">Problem List</h1>
                
                 
                <div className={`${Data.length > 0 ? "none" : "image-xxd"}`}>
                  <img
                    src={EmptyImg}
                    className={`${Data.length > 0 ? "none" : "emptyimage "}`}
                    alt="emptyimage"
                  />
                  <p
                    className={` ${Data.length > 0 ? "none" : "category-ddx"}`}
                  >
                    Oops! This category is currently empty.
                  </p>
                </div>

                <div className={`${Data.length > 0 ? "none" : "img-fff"}`}>
                  <button
                    onClick={addproblempage}
                    className={`${Data.length > 0 ? "item-xyz" : "nullitem"}`}
                  >
                    <span>
                      <AddIcon />
                    </span>
                    ADD PROBLEM
                  </button>
                </div>



               

                <div className={`${Data.length===0 ?"":"problemlist-ee3"}`} >
                
                  {Data === null
                    ? ""
                    : Data.map((item, index) => (
                        <div  className={`${Data.length === 0 ? "" : " row mx-3 problem-xz"}`}>
                          <div className="col-md-1 problemimage">
                            <img className="problemimg" src={item.image} />
                          </div>
                          <div className="col-md-4 problem-list">
                            <p className="problemlist-name">{item.name}</p>
                            <p>{item.shortDescription}</p>
                          </div>
                          <div className="col-md-2 esttime">
                           
                            <div className="time">Time:{item.estTime}hrs</div>
                          </div>

                          <div className="col-md-2 amnt">
                            <div className="amount">Amount:Rs{item.price}</div>
                          </div>

                          <div
                            className={`col-md-2  icon-32`}
                            onClick={() => iconclicked(index)}
                            key={index}
                          >
                            <div onClick={()=>edit(item.id)} className="icon-332 mx-4">
                            <EditIcon className="editicon"/>
                            </div>
                            <div className="icon-332">
                            <ClearIcon onClick={() => deletedata(item.id)} className="deleteicon"/>
                            </div>
                            
                            
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemLIst;
