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
const CategoryPage = () => {
  const [addproblem, setaddproblem] = useState(false);
  const [empty, setempty] = useState(false);
  const [click, setclick] = useState(false);
  const [iconui, showiconui] = useState(true);
  const [icon2, seticon2] = useState("");
  const [showicon, setshowicon] = useState(false);
  const [show, setshow] = useState(false);
  const [categoryname, setcateogryname] = useState([]);
  const [iconclicked, seticonclicked] = useState("");
  const [Data, setData] = useState([]);
  const [editdelete, seteditdelete] = useState();
  const [hideeditanddelete, sethideeditanddelete] = useState(false);

  const [mobileeditanddel, setmobileeditanddel] = useState();
  const { name, setname } = useContext(UserContext);
  const [mobileicon, setmobileicon] = useState("");
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
    console.log("this is category",namesArray)
    // console.log("this is namesArray");
    // console.log(namesArray);
    // console.log("end");
    //  const uniqueNames = Array.from(new Set(namesArray.map((obj)=>obj.name)));

    //  console.log("this is uniquenames",uniqueNames);
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
  const editdata = () => {
    navigate("/edit");
  };
  const Category =(value)=>{
    setname(value.name)
    // console.log("this is value",value.name);
    console.log("hello from category");
    navigate('/problemlist',{state:value.id});

  }
  return (
    <div className="section-padding section-bg">
      <div className="row secondpage">
        <div className="col-md-2  firstcolumn">
          <Navbar />
        </div>

        <div className="col-md-9 col-sm-12 secondcolumn">
          <div className="row">
            <div className="col-md-12 topbar">
              <h1 className="statistics-x">Category</h1>
              <div class="input-group searchhere">
              <div className="search-text">
                <input
                  type="text"
                  class=" form-control"
                  placeholder="Searchhere..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="cate-textarea textarea-x"
                  style={{color:"#FFF"}}
                />
                <img src={SearchIcon}className="search-icon"alt="searchicon"/>
                </div>
              </div>
              
              <NotificationsIcon className="notificationicon" />
              <div className="headingimage">
                <img
                  src={Rectangle2}
                  onMouseOver={mouseovericon}
                  onMouseLeave={mouseleaveicon}
                  onClick={show_332}
                  alt="images"
                  className="images-x"
                />
                {showicon ? (
                  <img src={Arrow} alt="images" className="images-abc " />
                 ) : (
                   ""
                )}
              </div>
            </div>

            {/* topadditem */}
            <div className={`col-md-12 content${Data.length > 0 ? " " : ""}`}>
              {show ? (
                <div className="showitem">
                  <div className="myprofile">My Profile</div>

                  <div className="signout">Sign Out</div>
                </div>
              ) : (
                ""
              )}

              <div className="row cateanditem">
                <select className={` col-md-2  select`}onChange={(event) => Category({ id: event.target.value, name: event.target.options[event.target.selectedIndex].text })}>
                  <option>Category</option>

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
                      Data.length > 0 ? "col-md-10 additem-432" : "img-fff"
                    }`}
                  >
                    <button
                      onClick={additem}
                      className={`${Data.length > 0 ? "item-xyz" : "nullitem"}`}
                    >
                      <span>
                        <AddIcon />
                      </span>
                      ADD ITEMS
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
                              onMouseLeave={mouseout}
                              onMouseEnter={() => mouseover(index)}
                              onClick={() => imageclicked(item.id, item.name)}
                              className="img-xxs mx-1 img-fluid"
                            />

                            <span className="lineargradient">{item.name}</span>

                            {icon2 === index && click ? (
                              <>
                                <div className="img-editicon">
                                  <div
                                    className={`edit-cate-icon`} onMouseEnter={() => mouseover(index)}
                                 
                                    // onClick={() => icon(index)}
                                    onClick={editdata}
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
                                // icon2===index?
                                <div className="img-editicon">
                                  <div
                                    className={`edit-cate-icon`}
                                 
                                    // onClick={() => icon(index)}
                                    onClick={editdata}
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
