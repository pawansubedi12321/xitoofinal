
import React, { useState } from "react";
import WhiteLogo1 from "../assets/WhiteLogo1.png";
import "./css/Dashboard.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../assets/Rectangle2.png";
import Admin from "../assets/Admin.svg";
import User from "../assets/User.svg";
import Worker from "../assets/Worker.svg";
import SearchIcon  from '../assets/SearchIcon.svg';
import { useNavigate, useLocation } from "react-router-dom";
import Arrow from "../assets/Arrow.svg";
import { FormatColorResetOutlined } from "@mui/icons-material";
import Navbar from "./navbar/Navbar.jsx";
import Topbar from './Topbar/Topbar.jsx'
const Dashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [color, setcolor] = useState("");
  const [click, setclick] = useState(false);
  const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);


  const mouseover = () => {
    setclick(true);
    console.log("mouse over");
  };
  const mousedown = () => {
    // setclick(false);
    setshownotificationicon(false);
    console.log("mouse down");
  };
  const show_332 = () => {
    setshow(!show);
  };
  const mouseovericon=()=>{
    setshowicon(true);
  }
  const mouseleaveicon=()=>{
    setshowicon(false);

  }
  console.log("this is notification",shownotificationicon);
  return (
    <div>
      <div className="section-padding section-bg">
        {/* <div className="container-fluid"> */}
        <div className="row secondpage">
          <div className="col-md-2  firstcolumn">
            <Navbar />
          </div>

          <div className="col-md-10 secondcol">
            <div className="row">
              <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
              {/*  */}

              <div className="col-md-12 dashboardcontent">
                





                <div className={`${shownotificationicon?"hide":""} content-a`}>
                  <div className="row g-2">
                    <div className="col-md-4">
                      <div className="total-admin-x">
                        <p className="total-x">
                          <span className="spantotal-x">Total</span>
                        </p>
                        <p>
                          <span className="admin-x">Admin</span>
                        </p>
                        <h1 className="no-of-admin-x">
                          <span className="span-no-of-admin-x">10</span>
                        </h1>
                        <div className='photo'>

                        <img src={Admin} className="img-fluid adminimg-x" alt="adminimg"/>
            </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="total-users-x">
                      <p className='total-x'><span className='spantotal-x'>Total</span></p>
                      <p className=''><span className='user-x'>Users</span></p>
                      <h1 className='no-of-user-x'><span className='span-no-of-users-x'>99999</span></h1>
                      <div className='photo'>
                      <img src={User}className='userimg-x'alt="userimg"/>
                      </div>

                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="total-worker-x">
                      <p className='total-x'><span className='spantotal-x'>Total</span></p>
                      <p className=''><span className='spanworkers-x'>Workers</span></p>
                      <h1 className=' no-of-worker-x'><span className=''>9999</span></h1>\
                      <div className='photo'>
                      <img src={Worker}className='workerimg-x'alt="workerimg"/>
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Dashboard;
