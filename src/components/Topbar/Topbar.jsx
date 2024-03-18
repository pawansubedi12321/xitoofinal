import React, { useState } from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../../assets/Rectangle2.png";
import Arrow from "../../assets/Arrow.svg";
import '../css/Booking.css';
const Topbar = ({setshowicon,showicon,setshow,show,setshownotificationicon,shownotificationicon}) => {
   

  const mouseovericon = () => {
    setshowicon(true);
  };
  const mouseleaveicon = () => {
    setshowicon(false);
  };
  const show_332 = () => {
    setshow(!show);
    setshownotificationicon(false);
  };

  const notificationicon=()=>{
    console.log("this is notificationicon");
    setshownotificationicon(!shownotificationicon);
    setshow(false);
  }
  return (
    <div>
      <div className="col-md-12 topbar">
        <h1 className="statistics-x">Statistics</h1>
        <div className="input-group search">
          <div className="search-text">
            <input
              type="text"
              placeholder="Search here..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="textarea-x dash-teaxtarea"
              style={{ color: "white" }}
            />
            <img src={SearchIcon} className="search-icon" alt="searchicon" />
          </div>
        </div>
        <div className="notificationicon"onClick={notificationicon}>
            <div className="noticationcount"><p>10</p></div>
        <NotificationsIcon className="notification"  />
        </div>
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
            <img src={Arrow} alt="images" className="images-abc" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
