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
import { getbooking, token ,PendingBooking,OnworkBooking,AppointBooking,CompletedBooking} from "./api/API.jsx";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useQuery } from "react-query";
import Nav from "react-bootstrap/Nav";
import EditIcon from "@mui/icons-material/Edit";
import Topbar from './Topbar/Topbar.jsx'
import Pagination from 'react-bootstrap/Pagination';
import { act } from "react";

const Booking = () => {
  const {state}=useLocation();
  const [click, setclick] = useState(false);
  const [booknow, setbooknow] = useState(false);
  const [activeTab, setActiveTab] = useState(`${state===null?"nav-all":state}`);
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  
  const [pendinglength, setpendinglength] = useState(0);
  const [onworklength, setonworklength] = useState(0);
  const[All,setAll]=useState(0);
  const [appointlength, setAppointLength] = useState(0);
  const [completedlength, setcompletedlength] = useState(0);
  const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);
  const[pendingactive,setpendingactive]=useState(1);
  const[appointactive,setappointactive]=useState(1);
  const[onworkactive,setonworkactive]=useState(1);
  const[completedactive,setcompletedactive]=useState(1);
  const pageSize=10;
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
  
  

  const[Pendingdata,setPendingdata]=useState()
  useEffect(() => {
    const pendingcategory = async () => {
      try {
        const response = await axios.get(PendingBooking()+`page=1&pageSize=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data.data, 'service data')
        return setPendingdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    pendingcategory();
  }, []);
 
  const[Onworkdata,setOnworkdata]=useState()
  useEffect(() => {
    const onworkcategory = async () => {
      try {
        const response = await axios.get(OnworkBooking()+`page=1&pageSize=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data.data, 'service data')
        return setOnworkdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    onworkcategory();
  }, []);


  const[Appointdata,setAppointdata]=useState()
  useEffect(() => {
    const appointcategory = async () => {
      try {
        const response = await axios.get(AppointBooking()+`page=1&pageSize=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        return setAppointdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    appointcategory();
  }, []);


  const[Completeddata,setCompleteddata]=useState()
  useEffect(() => {
    const completedcategory = async () => {
      try {
        const response = await axios.get(CompletedBooking()+`page=1&pageSize=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        return setCompleteddata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    completedcategory();
  }, []);



  
  useEffect(()=>{
      setAll(Data.length);
      const pendingData=Data.filter((item,index)=>{return item.status==='pending'})
      const appointData=Data.filter((item,index)=>{return item.status==='appoint'})
      const completedData=Data.filter((item,index)=>{return item.status==='completed'})
      const onworkData=Data.filter((item,index)=>{return item.status==='ongoing'})
      console.log("this is pendingdata",pendingData)
      setpendinglength(pendingData.length)
      setAppointLength(appointData.length)
      setcompletedlength(completedData.length)
      setonworklength(onworkData.length)

  },[Data,pendinglength,appointlength,completedlength,onworklength])

  const { isLoading, error, data } = useQuery("bookingData", fetchData); // Provide a unique key for the query
  if (isLoading) return "Loading...";
  if (error) return "An error has occur";

  console.log(data);

  const mousedown = () => {
    setclick(false);
  };
  const book = () => {
    setbooknow(true);
  };
  const showdata = (item) => {

    const showdata=Data.filter((data)=>data.id===item);
    navigate('/showpage',{state:showdata});

  };

  const editstatus=(item)=>{

    
    navigate(`/editstatus/${item}/${activeTab}`);
  }
  const assignworker=(name)=>{

    const x=Assistant.assistance.filter((item)=>{item.category.name=name})

  }
  const handleTabClick = async(tabId) => {
    setActiveTab(tabId);
  };


let pendingitems = [];
let pendingnumber=Math.round(pendinglength/pageSize)===0?1:Math.round(pendinglength/pageSize)

console.log("this is pendingnumber",pendingnumber);
  
  const Pendingpagination=async(item)=>{
    // console.log("this is item",item)
    setpendingactive(item);

    if(item===-1)
    {
      setpendingactive(0)
    }
    else if(item>pendingnumber)
    {
      setpendingactive(pendingnumber)
    }
    else{

    try {
          const response = await axios.get(PendingBooking()+`page=${item}&pageSize=${pageSize}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.data, 'service data')
          return setPendingdata(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
          
      }
  }


for (let number = 1; number <= pendingnumber; number++) {
  
  pendingitems.push(
    <Pagination.Item onClick={()=>Pendingpagination(number)} key={number} active={number === pendingactive}>
      {number}
    </Pagination.Item>,
  );
}

const PaginationBasic= (
  <div>
    <Pagination size="sm">   <Pagination.First onClick={()=>Pendingpagination(1)} /><Pagination.Prev onClick={()=>Pendingpagination(pendingactive-1)}/>{pendingitems}<Pagination.Next onClick={()=>Pendingpagination(pendingactive+1)}/><Pagination.Last  onClick={()=>Pendingpagination(pendingnumber)}/></Pagination>
  </div>
);















let appointitems = [];
let appointnumber=Math.round(appointlength/pageSize)===0?1:Math.round(appointlength/pageSize)
console.log("this is appointnumber",appointnumber);
  const Appointpagination=async(item)=>{
    setappointactive(item);
    if(item===-1)
    {
      setappointactive(0)
    }                                  
    else if(item>appointnumber)
    {
      setappointactive(appointnumber)
    }
    else{
    try {
          const response = await axios.get(AppointBooking()+`page=${item}&pageSize=${pageSize}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.data, 'service data')
          return setAppointdata(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
          
      }
  }


for (let number = 1; number <=appointnumber; number++) {
  
  appointitems.push(
    <Pagination.Item onClick={()=>Appointpagination(number)} key={number} active={number ===appointactive}>
      {number}
    </Pagination.Item>,
  );
}
const AppointPaginate= (
  <div>
    <Pagination size="sm">   <Pagination.First onClick={()=>Appointpagination(1)} /><Pagination.Prev onClick={()=>Appointpagination(appointactive-1)}/>{appointitems}<Pagination.Next onClick={()=>Appointpagination(appointactive+1)}/><Pagination.Last  onClick={()=>Appointpagination(appointnumber)}/></Pagination>
  </div>
);













let ongoingitems = [];

let ongoingnumber=Math.round(onworklength/pageSize)===0?1:Math.round(onworklength/pageSize)
// console.log("this is appointnumber",appointnumber);
  const Onworkpagination=async(item)=>{
    setonworkactive(item);
    if(item===-1)
    {
      setonworkactive(0)
    }                                  
    else if(item>ongoingnumber)
    {
      setonworkactive(ongoingnumber)
    }
    else{
    try {
          const response = await axios.get(OnworkBooking()+`page=${item}&pageSize=${pageSize}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.data, 'service data')
          return setOnworkdata(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
          
      }
  }


for (let number = 1; number <=ongoingnumber; number++) {
  
  ongoingitems.push(
    <Pagination.Item onClick={()=>Onworkpagination(number)} key={number} active={number ===onworkactive}>
      {number}
    </Pagination.Item>,
  );
}
const Onworkpaginate= (
  <div>
    <Pagination size="sm">   <Pagination.First onClick={()=>Onworkpagination(1)} /><Pagination.Prev onClick={()=>Onworkpagination(onworkactive-1)}/>{ongoingitems}<Pagination.Next onClick={()=>Onworkpagination(onworkactive+1)}/><Pagination.Last  onClick={()=>Onworkpagination(ongoingnumber)}/></Pagination>
  </div>
);






let completeditems = [];
let completednumber=Math.round(completedlength/pageSize)===0?1:Math.round(completedlength/pageSize)
  const Completedpagination=async(item)=>{
    setcompletedactive(item);
    if(item===-1)
    {
      setcompletedactive(0)
    }                                  
    else if(item>completednumber)
    {
      setcompletedactive(completednumber)
    }
    else{
    try {
          const response = await axios.get(CompletedBooking()+`page=${item}&pageSize=${pageSize}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.data, 'service data')
          return setCompleteddata(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
          
      }
  }


for (let number = 1; number <=completednumber; number++) {
  console.log("num",number)
  completeditems.push(
    <Pagination.Item onClick={()=>Completedpagination(number)} key={number} active={number ===completedactive}>
      {number}
    </Pagination.Item>,
  );
}
const Completedpaginate= (

  <div>
    <Pagination size="sm">   <Pagination.First onClick={()=>Completedpagination(1)} /><Pagination.Prev onClick={()=>Completedpagination(completedactive-1)}/>{completeditems}<Pagination.Next onClick={()=>Completedpagination(completedactive+1)}/><Pagination.Last  onClick={()=>Completedpagination(completednumber)}/></Pagination>
  </div>
);
// console.log("this s completed items ",completeditems);


  return (
    <div className="section-padding section-bg" onMouseOut={mousedown}>
      <div className="row secondpage">
        <div className="col-md-2  firstcolumn">
          <Navbar />
        </div>
        <div className="col-md-9 col-sm-12 secondcolumn">
          <div className="row">
          <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
            
            <div className={`${shownotificationicon?"hide":""} col-md-12 content`}>
              
              <h5 className="problemlist">Booking List</h5>

              <nav>
                <div className="mx-3 nav nav-tabs" id="nav-tab" role="">
                  <button
                    className={`nav-link nav-all ${
                      activeTab === "nav-all" ? "show active" : ""
                    }`}
                    id="nav-all-tab"
                    onClick={() => handleTabClick("nav-all")}
                    type="button"
                    role="tab"
                    aria-controls="nav-all"
                  >
                    All
                    <div className="mx-2 all-nav">{All}</div>
                  </button>
                 
                  <button
                    className={`nav-link nav-pending ${
                      activeTab === "nav-pending" ? "show active" : ""
                    }`}
                    id="nav-pending-tab"
                    onClick={() => handleTabClick("nav-pending")}
                    type="button"
                    role="tab"
                    aria-controls="nav-pending"
                  >
                    Pending
                    <div className="mx-2 pending-nav">{pendinglength}</div>
                  </button>
                  <button
                    className={`nav-link nav-appoint ${
                      activeTab === "nav-appoint" ? "show active" : ""
                    }`}
                    id="nav-appoint-tab"
                    onClick={() => handleTabClick("nav-appoint")}
                    type="button"
                    role="tab"
                    aria-controls="nav-appoint"
                  >
                    Appoint
                    <div className="mx-2 appoint-nav">{appointlength}</div>
                  </button>

                  <button
                    className={`nav-link nav-onwork ${
                      activeTab === "nav-onwork" ? "show active" : ""
                    }`}
                    id="nav-onwork-tab"
                    onClick={() => handleTabClick("nav-onwork")}
                    type="button"
                    role="tab"
                    aria-controls="nav-onwork"
                  >
                    Onwork
                    <div className="mx-2 onwork-nav">{onworklength}</div>
                  </button>

                  <button
                    className={`nav-link nav-completed ${
                      activeTab === "nav-completed" ? "show active" : ""
                    }`}
                    id="nav-completed-tab"
                    onClick={() => handleTabClick("nav-completed")}
                    type="button"
                    role="tab"
                    aria-controls="nav-completed"

                  >
                    Completed
                    <div className="mx-2 completed-nav">{completedlength}</div>
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
                              {JSON.parse(item.bookedBy).name}
                              <div className="laptop">{JSON.parse(item.bookedProblem).categoryName}</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              {/* {JSON.parse(item.location).lat}and{JSON.parse(item.location).lng} */}
                              <div className="location">Location:{item.location}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                          <h6>{item.assignTo===undefined?"":JSON.parse(item.assignTo).name}</h6>
                          <h6>{item.assignTo===undefined?"":JSON.parse(item.assignTo).phone}</h6>
                          </div>
                          <div className="col-md-4 statusandeye ">
                            <div className=" status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "ongoing"
                                    ? "ongoing"
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
                      activeTab === "nav-pending" ? "show active" : ""
                    }`}
                    id="nav-pending"
                    role="tabpanel"
                    aria-labelledby="nav-pending-tab"
                    tabIndex="3"
                  >
                    {Pendingdata!== undefined ? (
                  <div className="scroll">
                    {Pendingdata.fetchbooking.map((item) => (
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
                            {item.bookedBy.name}
                              <div className="laptop">{item.bookedProblem.categoryName}</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:{`{"lat":"${JSON.parse(item.location).lat}"`},{`"lng":"${JSON.parse(item.location).lng}"}`}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                            <h6>{item.assignTo===undefined?"":item.assignTo.name}</h6>
                            <h6>{item.assignTo===undefined?"":item.assignTo.phone}</h6>
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
                            <div className="eyeicon" onClick={()=>showdata(item.id)}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                          

                          <div></div>
                        </div>

                      </>
                    ))}
                    {PaginationBasic}
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
                   {Appointdata !== undefined ? (
                  <div className="scroll">
                    {Appointdata.fetchbooking.map((item) => (
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
                            {item.bookedBy.name}
                              <div className="laptop">{item.bookedProblem.categoryName}</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              {/* {"lat":"27.4345","lng":"85.782"} */}
                              <div className="location">Location:{`{"lat":"${JSON.parse(item.location).lat}"`},{`"lng":"${JSON.parse(item.location).lng}"}`}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                          <h6>{item.assignTo===undefined?"":item.assignTo.name}</h6>
                          <h6>{item.assignTo===undefined?"":item.assignTo.phone}</h6>

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
                                }`}data-bs-toggle="modal"onClick={()=>assignworker(item.bookedProblem.categoryName)} data-bs-target="#staticBackdrop">
                                <span>Status :  {item.status.toUpperCase()}</span>
                              </div>
                            </div>


                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <select className="form-select" aria-label="Default select example">
                        <option selected >Assign To</option>

                        
                      </select> 
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
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
                    {AppointPaginate}
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
                    {Completeddata !== undefined ? (
                  <div className="scroll">
                    {Completeddata.fetchbooking.map((item) => (
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
                            {item.bookedBy.name}
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:{`{"lat":"${JSON.parse(item.location).lat}"`},{`"lng":"${JSON.parse(item.location).lng}"}`}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                          <h6>{item.assignTo===undefined?"":item.assignTo.name}</h6>
                          <h6>{item.assignTo===undefined?"":item.assignTo.phone}</h6>

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
                            <div className="eyeicon" onClick={()=>showdata(item.id)}>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                          </div>

                         

                          <div></div>
                        </div>
                      </>
                    ))}
                    {Completedpaginate}
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
                   {Onworkdata !== undefined ? (
                  <div className="scroll">
                    {Onworkdata.fetchbooking.map((item) => (
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
                            {item.bookedBy.name}
                              <div className="laptop">laptop</div>
                              <div className="orderdateandtime">
                                Order Date:
                                {item.bookedDate}|
                                <span className="time-33">
                                  {item.timePeriod}
                                </span>
                              </div>
                              <div className="location">Location:{`{"lat":"${JSON.parse(item.location).lat}"`},{`"lng":"${JSON.parse(item.location).lng}"}`}</div>
                            </div>
                          </div>
                          <div className="col-md-3 assistantname">
                          <h6>{item.assignTo===undefined?"":item.assignTo.name}</h6>
                          <h6>{item.assignTo===undefined?"":item.assignTo.phone}</h6>

                          </div>
                          <div className="col-md-4 statusandeye ">
                            <div className="status">
                              <div
                                className={`${
                                  item.status === "appoint"
                                    ? "appoint"
                                    : item.status === "pending"
                                    ? "pending"
                                    : item.status === "ongoing"
                                    ? "ongoing"
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
                    {Onworkpaginate}
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
