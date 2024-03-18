import React, { useState, useEffect } from "react";
import WhiteLogo1 from "../assets/WhiteLogo1.png";
import SearchIcon from "../assets/SearchIcon.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../assets/Rectangle2.png";
import Arrow from "../assets/Arrow.svg";
import { useNavigate, useLocation } from "react-router-dom";
import EmptyBooking from "../assets/EmptyBooking.png";
import "./css/Booking.css";
import Navbar from "./navbar/Navbar";
import axios from "axios";
import { getbooking, token } from "./api/API.jsx";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useQuery } from "react-query";
import Nav from "react-bootstrap/Nav";
import EditIcon from "@mui/icons-material/Edit";
const Booking = () => {
  const [click, setclick] = useState(false);
  const [booknow, setbooknow] = useState(false);
  const [show, setshow] = useState(false);
  const [activeTab, setActiveTab] = useState("nav-all");
  // const[appointlength,setappointlength]=useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [appointlength, setAppointLength] = useState(0);
  const[appointdata,setappointdata]=useState([]);
  const [completedlength, setcompletedlength] = useState(0);
  const[completeddata,setcompleteddata]=useState([]);
  const [pendinglength, setpendinglength] = useState(0);
  const[pendingdata,setpendingdata]=useState([]);
  const [onworklength, setonworklength] = useState(0);
  const[onworkdata,setonworkdata]=useState([]);
  const[All,setAll]=useState(0);

  // let appointlength=0
  const fetchData = async () => {
    try {
      const response = await axios.get(getbooking(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);
  useEffect(() => {
    // console.log("this is all",Data.length);
    try{
    setAll(Data.length);
    const ApointData = Data.filter((item) => item.status === "appoint");
    console.log("this is apointdata", ApointData);

    setappointdata(ApointData);
    setAppointLength(ApointData.length);
    const completedData = Data.filter((item) => item.status === "completed");
    console.log("This is compelted data", completedData);
    setcompleteddata(completedData);
    setcompletedlength(completedData.length);
    const pendingData = Data.filter((item) => item.status === "pending");
    setpendinglength(pendingData.length);
    setpendingdata(pendingData);
    console.log("this is pending", pendingData);
    const onworkData = Data.filter((item) => item.status === "onwork");
    setonworklength(onworkData.length);
    setonworkdata(onworkData);
    console.log("this is onwork", onworkData);
    }catch(e){
      console.log(e);
    }
  },[Data]);

  const { isLoading, error, data } = useQuery("bookingData", fetchData); // Provide a unique key for the query
  if (isLoading) return "Loading...";
  if (error) return "An error has occur";
  console.log("this  is data");
  console.log(data);
  console.log("end");
  const mousedown = () => {
    setclick(false);
  };
  const mouseover = () => {
    setclick(true);
  };

  const book = () => {
    setbooknow(true);
  };
  const show_332 = () => {
    setshow(!show);
  };

  const showdata = (item) => {
    console.log("this is id",item);
    // navigate("/showpage");
    const showdata=Data.filter((data)=>data.id===item);
    // console.log("this is data",showdata);
    navigate('/showpage',{state:showdata});


  };

  const editstatus=(item)=>{
    const editeddata=Data.filter((data)=>data.id==item)
    console.log("this is item",editeddata);
    navigate('/editstatus',{state:editeddata});
  }

  return (
    <div className="section-padding section-bg" onMouseOut={mousedown}>
      <div className="row secondpage">
        <div className="col-md-2  firstcolumn">
          <Navbar />
        </div>
        <div className="col-md-9 col-sm-12 secondcolumn">
          <div className="row">
            <div className="col-md-12 topbar">
              <h1 className="statistics-x">Booking</h1>
              <div class="input-group search">
              <div className="search-text">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Searchhere..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="textarea-x"
                  style={{color:"#FFF"}}
                />
                <img src={SearchIcon}className="search-icon"alt="searchicon"/>
                </div>
              </div>
              <NotificationsIcon className="notificationicon" />
              <div className="headingimage">
                <img
                  src={Rectangle2}
                  onMouseOver={mouseover}
                  onClick={show_332}
                  alt="images"
                  className="images-x"
                />
                {click ? (
                  <img src={Arrow} alt="images" className="images-abc" />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-md-12 content">
              {show ? (
                <div className="showitem">
                  <div className="myprofile">My Profile</div>

                  <div className="signout">Sign Out</div>
                </div>
              ) : (
                ""
              )}
              <h5 className="problemlist">Booking List</h5>

              <nav>
                <div className="mx-3 nav nav-tabs" id="nav-tab" role="">
                  <button
                    className={`nav-link nav-all ${
                      activeTab === "nav-all" ? "active" : ""
                    }`}
                    id="nav-all-tab"
                    onClick={() => handleTabClick("nav-all")}
                    type="button"
                    role="tab"
                    aria-controls="nav-all"
                    aria-selected={activeTab === "nav-all"}
                  >
                    All
                    <div className="mx-2 all-nav">{All}</div>
                  </button>

                  <button
                    className={`nav-link nav-appoint ${
                      activeTab === "nav-appoint" ? "active" : ""
                    }`}
                    id="nav-appoint-tab"
                    onClick={() => handleTabClick("nav-appoint")}
                    type="button"
                    role="tab"
                    aria-controls="nav-appoint"
                    aria-selected={activeTab === "nav-appoint"}
                  >
                    Appoint
                    <div className="mx-2 appoint-nav">{appointlength}</div>
                  </button>
                  <button
                    className={`nav-link nav-completed ${
                      activeTab === "nav-completed" ? "active" : ""
                    }`}
                    id="nav-completed-tab"
                    onClick={() => handleTabClick("nav-completed")}
                    type="button"
                    role="tab"
                    aria-controls="nav-completed"
                    aria-selected={activeTab === "nav-completed"}
                  >
                    Completed
                    <div className="mx-2 completed-nav">{completedlength}</div>
                  </button>
                  <button
                    className={`nav-link nav-pending ${
                      activeTab === "nav-pending" ? "active" : ""
                    }`}
                    id="nav-pending-tab"
                    onClick={() => handleTabClick("nav-pending")}
                    type="button"
                    role="tab"
                    aria-controls="nav-pending"
                    aria-selected={activeTab === "nav-pending"}
                  >
                    Pending
                    <div className="mx-2 pending-nav">{pendinglength}</div>
                  </button>
                  <button
                    className={`nav-link nav-onwork ${
                      activeTab === "nav-onwork" ? "active" : ""
                    }`}
                    id="nav-onwork-tab"
                    onClick={() => handleTabClick("nav-onwork")}
                    type="button"
                    role="tab"
                    aria-controls="nav-onwork"
                    aria-selected={activeTab === "nav-onwork"}
                  >
                    Onwork
                    <div className="mx-2 onwork-nav">{onworklength}</div>
                  </button>
                </div>
              </nav>

              <div className="booking" >
                {data == null ? (
                  <div>
                    <img
                      src={EmptyBooking}
                      onClick={book}
                      class="img-fluid"
                      alt="Responsive image"
                    ></img>
                    <p className="book-33">
                      No booking found. Time to plan your next adventure!
                    </p>
                  </div>
                ) : (
                  ""
                )}
                </div>

                <div className="tab-content " id="nav-tabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-all" ? "show active" : ""
                    }`}
                    id="nav-all"
                    role=""
                    aria-labelledby="nav-all-tab"
                    tabIndex="0"
                  >
                    {data !== undefined ? (
                  <div className="scroll">
                    {data.map((item) => (
                      <>
                        <div className="row custom-row ">
                          <div className="col-md-1   bookimg">
                            <img
                              src={EmptyBooking}
                              class="img-fluid bookingimage "
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-md-4 details">
                            <div className="fulldetail">
                              FullName
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:{item.location}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>Assistant Full Name</h6>
                            <h6>9800000000</h6>

                          </div>

                          <div className="col-md-4 statusandeye ">
                            <div className=" status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "onwork"
                                    ? "onwork"
                                    : item.status === "completed"
                                    ? "completed"
                                    : ""
                                }`}
                              >
                                <span>Status : {item.status.toUpperCase()}</span>
                              </div>

                              
                             
                            </div>

                            <div className="edit-status"onClick={()=>editstatus(item.id)}>
                              <EditIcon/>

                            </div>

                            

                             <div className="eye-icon">
                            <div className="verticalline"></div>
                            <div className="eyeicon" onClick={()=>showdata(item.id)}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                          

                          <div></div>
                        </div>
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                  </div>


                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-appoint" ? "show active" : ""
                    }`}
                    id="nav-appoint"
                    role=""
                    aria-labelledby="nav-appoint-tab"
                    tabIndex="1"
                  >
                   {appointdata !== undefined ? (
                  <div className="scroll">
                    {appointdata.map((item) => (
                      <>
                        <div className="row custom-row ">
                          <div className="col-md-1   bookimg">
                            <img
                              src={EmptyBooking}
                              class="img-fluid bookingimage "
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-md-4 details">
                            <div className="fulldetail">
                              FullName
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:panauti</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>Assistant Full Name</h6>
                            <h6>9800000000</h6>

                          </div>
                        
                          <div className="col-md-4 statusandeye ">
                            <div className="status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "onwork"
                                    ? "onwork"
                                    : item.status === "completed"
                                    ? "completed"
                                    : ""
                                }`}
                              >
                                <span>Status :  {item.status.toUpperCase()}</span>
                              </div>
                            </div>

                            <div className="edit-status"onClick={()=>editstatus(item.id)}>
                              <EditIcon/>

                            </div>

                            <div className="eye-icon">
                            <div className="verticalline"></div>
                            <div className="eyeicon" onClick={showdata}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                         

                          <div></div>
                        </div>
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-completed" ? "show active" : ""
                    }`}
                    id="nav-completed"
                    role=""
                    aria-labelledby="nav-completed-tab"
                    tabIndex="2"
                  >
                    {completeddata !== undefined ? (
                  <div className="scroll">
                    {completeddata.map((item) => (
                      <>
                        <div className="row custom-row ">
                          <div className="col-md-1   bookimg">
                            <img
                              src={EmptyBooking}
                              class="img-fluid bookingimage "
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-md-4 details">
                            <div className="fulldetail">
                              FullName
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:panauti</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>Assistant Full Name</h6>
                            <h6>9800000000</h6>

                          </div>
                          <div className="col-md-4 statusandeye ">
                            <div className="status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "onwork"
                                    ? "onwork"
                                    : item.status === "completed"
                                    ? "completed"
                                    : ""
                                }`}
                              >
                                <span>Status : {item.status.toUpperCase()}</span>
                              </div>
                            </div>

                            <div className="edit-status"onClick={()=>editstatus(item.id)}>
                              <EditIcon/>

                            </div>

                             <div className="eye-icon">
                            <div className="verticalline"></div>
                            <div className="eyeicon" onClick={showdata}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                         

                          <div></div>
                        </div>
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-pending" ? "show active" : ""
                    }`}
                    id="nav-pending"
                    role="tabpanel"
                    aria-labelledby="nav-pending-tab"
                    tabIndex="3"
                  >
                    {pendingdata !== undefined ? (
                  <div className="scroll">
                    {pendingdata.map((item) => (
                      <>
                        <div className="row custom-row ">
                          <div className="col-md-1   bookimg">
                            <img
                              src={EmptyBooking}
                              class="img-fluid bookingimage "
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-md-4 details">
                            <div className="fulldetail">
                              FullName
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:panauti</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>Assistant Full Name</h6>
                            <h6>9800000000</h6>

                          </div>
                          <div className="col-md-4 statusandeye ">
                            <div className="status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "onwork"
                                    ? "onwork"
                                    : item.status === "completed"
                                    ? "completed"
                                    : ""
                                }`}
                              >
                                <span>Status : {item.status.toUpperCase()}</span>
                              </div>
                            </div>

                            <div className="edit-status"onClick={()=>editstatus(item.id)}>
                              <EditIcon/>

                            </div>

                            <div className="eye-icon">
                            <div className="verticalline"></div>
                            <div className="eyeicon" onClick={showdata}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                          

                          <div></div>
                        </div>
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-onwork" ? "show active" : ""
                    }`}
                    id="nav-onwork"
                    role="tabpanel"
                    aria-labelledby="nav-onwork-tab"
                    tabIndex="4"
                  >
                   {onworkdata !== undefined ? (
                  <div className="scroll">
                    {onworkdata.map((item) => (
                      <>
                        <div className="row custom-row ">
                          <div className="col-md-1   bookimg">
                            <img
                              src={EmptyBooking}
                              class="img-fluid bookingimage "
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-md-4 details">
                            <div className="fulldetail">
                              FullName
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:panauti</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>Assistant Full Name</h6>
                            <h6>9800000000</h6>

                          </div>
                          <div className="col-md-4 statusandeye ">
                            <div className="status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "onwork"
                                    ? "onwork"
                                    : item.status === "completed"
                                    ? "completed"
                                    : ""
                                }`}
                              >
                                <span>Status : {item.status.toUpperCase()}</span>
                              </div>
                            </div>
                            <div className="edit-status"onClick={()=>editstatus(item.id)}>
                              <EditIcon/>

                            </div>

                            <div className="eye-icon">
                            <div className="verticalline"></div>
                            <div className="eyeicon" onClick={showdata}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                         

                          <div></div>
                        </div>
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                  </div>
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
