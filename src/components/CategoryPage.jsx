import React, { useEffect, useState, useContext } from "react";
import "./css/Category.css";
import WhiteLogo1 from "../assets/WhiteLogo1.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../assets/Rectangle2.png";
import SearchIcon from "../assets/SearchIcon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Emptyimg from "../assets/Emptyimg.svg";
import Arrow from "../assets/Arrow.svg";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Navbar from "./navbar/Navbar.jsx";
import axios from "axios";
import { fetchCategoryData, token, deletecategory } from "./api/API.jsx";
import { UserContext } from "../App";
import { useQuery } from "react-query";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Topbar from './Topbar/Topbar.jsx'
const CategoryPage = () => {
  const [addproblem, setaddproblem] = useState(false);
  const [empty, setempty] = useState(false);
  const [click, setclick] = useState(false);
  const [iconui, showiconui] = useState(true);
  const [icon2, seticon2] = useState("");
  const [categoryname, setcateogryname] = useState([]);
  const [iconclicked, seticonclicked] = useState("");
  const [Data, setData] = useState([]);
  const [editdelete, seteditdelete] = useState();
  const [hideeditanddelete, sethideeditanddelete] = useState(false);

  const [mobileeditanddel, setmobileeditanddel] = useState();
  const { name, setname } = useContext(UserContext);
  const [mobileicon, setmobileicon] = useState("");

  const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [hidearrowicon, sethidearrowicon] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchCategoryData(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // console.log("this is data",Data);
  useEffect(() => {
    if (Data === null) {
      setempty(false);
    } else {
      setempty(true);
    }
  }, [setempty]);
  const additem = () => {
    navigate("/additems");
  };
  const mouseover = (ind) => {
    seticon2(ind);
    showiconui(true);
    setclick(true);
 

    sethidearrowicon(true);
  };
  const mouseout = () => {
    setclick(false);
    
    
    showiconui(false);
    sethideeditanddelete(false);
    seteditdelete(false);
    sethidearrowicon(false);
    setshownotificationicon(false);
    

  };
  const mouseovericon=()=>{
    setshowicon(true);
  }
  const mouseleaveicon=()=>{
    setshowicon(false);

  }
  const icon = (index) => {
    seticonclicked(index);
    seteditdelete(true);
    sethideeditanddelete(true);
    setmobileeditanddel(!mobileeditanddel);
    setmobileicon(index);
  };
  const show_332 = () => {
    setshow(!show);
  };
  useEffect(() => {
    // const namesArray = Data.map((obj) => obj.name.toUpperCase());
    const namesArray=Data.map((obj)=>{
      return {id:obj.id,name:obj.name.toUpperCase()}
    })
   
    setcateogryname(namesArray);
  }, [Data]);
  const imageclicked = (ind, name) => {
    setaddproblem(!addproblem);
    navigate("/problemlist", { state:ind });
    // console.log("this  is id",ind);
    setname(name);//this is from usecontext
  };
  const deletedata = async (id) => {
    try {
      const response = await fetch(deletecategory() + `${id}`, {
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
      console.log("Response data:", data);
    } catch (error) {
      console.error("There was an error:", error);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(fetchCategoryData(), {
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
  const editdata = (item) => {
    
    const editeddata=Data.filter((data)=>data.id==item)
    
    
    
    
    navigate("/edit",{state:editeddata});
    
  };
  const Category =(value)=>{
    setname(value.name)
    // console.log("this is value",value.name);
    console.log("hello from category");
    navigate('/problemlist',{state:value.id});

  }
  
  console.log("THis is category data",Data)
  
  const maxLength =15;
  const truncatedData = Data.map((item) => {
    if (item.name.length > maxLength) {
        return item.name.substring(0, maxLength) + "...";
    }
    return item.name;
});

console.log("this is truncateddata",truncatedData);

  // let substring = Data.substring(1, maxLength);
  // if(name.length > maxLength) {
  // //   substring += "...";
  // // }
  return (
    <div className="section-padding section-bg">
      <div className="row secondpage">
        <div className="col-md-2  firstcolumn">
          <Navbar />
        </div>

        <div className="col-md-9 col-sm-12 secondcolumn">
          <div className="row">
        
          <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
          
            

            {/* topadditem */}
            <div className={`${shownotificationicon?"hide":""} col-md-12 content${Data.length > 0 ? " " : ""}`}>
              

              <div className="row cateanditem">
                <select className={`col-6 col-md-2  select`}onChange={(event) => Category({ id: event.target.value, name: event.target.options[event.target.selectedIndex].text })}>
                  <option>Services</option>

                  {Data === null
                    ? ""
                    : categoryname.map((item, index) => (
                        <option  value={item.id} key={index} >{item.name}</option>
                      
                      ))}
                </select>

                <div className={`${Data.length > 0 ? "none" : "image-xxd"}`}>
                  <img
                    src={Emptyimg}
                    className={`${Data.length > 0 ? "none" : "emptyimage "}`}
                    alt="emptyimage"
                  />
                  <p
                    className={` ${Data.length > 0 ? "none" : "category-ddx"}`}
                  >
                    Oops! This category is currently empty.
                  </p>
                </div>

                {addproblem ? (
                  ""
                ) : (
                  <div
                    className={`${
                      Data.length > 0 ? "col-6 col-md-10 additem-432" : "img-fff"
                    }`}
                  >
                    <button
                      onClick={additem}
                      className={`${Data.length > 0 ? "item-xyz" : "nullitem"}`}
                    >
                      <span>
                        <AddIcon className="addicon" />
                      </span>
                      ADD Services
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`${
                  Data.length == 0 ? "none" : " row imagesection p-2"
                }`}
              >
                <div className="col-md-12 img-443 gx-5">
                  {Data == null
                    ? ""
                    : Data.map((item, index) => (

                        <>
                          <div className="category-img">
                            <img
                              src={Rectangle2}
                              
                              onMouseEnter={() => mouseover(index)}
                              onClick={() => imageclicked(item.id, item.name)}
                              className="img-xxs mx-1 img-fluid"
                            />

                            <span className="lineargradient">{truncatedData[index]}</span>

                            {icon2 === index && click ? (
                              <>
                                <div className="img-editicon">
                                  <div
                                    className={`edit-cate-icon`} onMouseEnter={() => mouseover(index)}
                                    onClick={()=>editdata(item.id)}
                                    key={index}
                                  >
                                    <EditIcon />
                                  </div>
                                </div>

                                <div className="img-deleteicon">
                                  <div className="delete-cate-icon"onClick={() => deletedata(item.id)} onMouseEnter={() => mouseover(index)}>
                                    <ClearIcon />
                                  </div>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                            <div className="img-edit-delete-icon">
                              {
                                <div className="img-editicon">
                                  <div
                                    className={`edit-cate-icon`}
                                    onClick={()=>editdata(item.id)}
                                    key={index}
                                  >
                                    <EditIcon />
                                  </div>
                                </div>

                                
                              }
                              {
                                <div className="img-deleteicon">
                                <div className="delete-cate-icon"onClick={() => deletedata(item.id)}>
                                  <ClearIcon />
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                        </>
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
// this is categ
export default CategoryPage;
