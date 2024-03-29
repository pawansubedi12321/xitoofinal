import React, { useRef,useState,useEffect,useContext } from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Rectangle2 from "../../assets/Rectangle2.png";
import Arrow from "../../assets/Arrow.svg";
import '../css/Booking.css';
import { UserContext } from '../../App';
const Topbar = ({setshowicon,showicon,setshow,show,setshownotificationicon,shownotificationicon}) => {
  const[showsearchicon,setshowsearchicon]=useState(false);
  const[mousedown,setmousedown]=useState(false);

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

  
  const mobilesearchicon=()=>{

    setshowsearchicon(!showsearchicon);
    console.log("Thi is icon",showsearchicon);
  }
  const notificationicon = () => {
    setshownotificationicon(!shownotificationicon);
    console.log("This is notificationicon", shownotificationicon);
    setshow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!notificationRef.current.contains(event.target)) {
        setshownotificationicon(false);
        setshow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
  };
  }, []);

  const notificationRef = useRef(null); // Initialize notificationRef here
  const {clicked,setclicked}=useContext(UserContext);
  return (
    <div>
      <div className="row top">
      <div className="col-md-4 topbar">
        <h1 className="statistics-x mx-3">{clicked==='dash'?"Statistics":clicked==='cate'?"Category":clicked==='que'?"Question":clicked==='book'?"Booking":"Problemlist"}</h1>
        </div>

        <img src={SearchIcon} onClick={mobilesearchicon} className="top-bar-search-icon" alt="searchicon" />

        <div className={` col-md-4 col-6 topbar-group search`}>
          <div className="search-text">
            <input
              type="text"
              placeholder="Search here..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="textarea-x dash-teaxtarea mx-3"
              style={{ color: "white" }}
            />
            <img src={SearchIcon} className={`search-icon`} alt="searchicon" />
          </div>
        </div>
        <div className="col-md-4  col-6 notify"ref={notificationRef}>
        <div className="notificationicon"onClick={notificationicon}>
            <div className="noticationcount"><p>10</p></div>
        <NotificationsIcon className="notification"  />


        
      
        </div>


        <div className=" headingimage">
          <img
            src={Rectangle2}
            onMouseOver={mouseovericon}
            onMouseLeave={mouseleaveicon}
            onClick={show_332}
            alt="images"
            className="images-x"
            ref={notificationRef}
          />
          {showicon ? (
            <img src={Arrow} alt="images" className="images-abc" />
          ) : (
            ""
          )}
          {show ? (
                  <div className="showitem">
                    <div className="myprofile">My Profile</div>
                    <hr></hr>

                    <div className="signout">Sign Out</div>
                  </div>
                ) : (
                  ""
                )}
        </div>

       
        </div>

        {
                  shownotificationicon?
                  <div className="shownotification">
                    
                    <div className="notification-heading">
                    <p>You have 4 new notification</p>
                    <input type="button"value="View All"className="viewall-button"/>
                    </div>
                    <hr></hr>
                    <div className="booking-notification">
                      <h6>Lorem Ipsum</h6>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                    <hr></hr>

                    <div className="booking-notification">
                      <h6>Lorem Ipsum</h6>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                    <hr></hr>

                    <div className="booking-notification">
                      <h6>Lorem Ipsum</h6>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                    <hr></hr>

                    <div className="booking-notification">
                      <h6>Lorem Ipsum</h6>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                    <hr></hr>

                    <div className="booking-notification">
                      <h6>Lorem Ipsum</h6>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                    <hr></hr>

                   
                    </div>:""
                }
                
                
        
      </div>
      <div className="row mobile-search-text">
        <div className="topbar-text">
            <input
              type="text"
              placeholder="Search here..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className={`${showsearchicon?"":"showsearch"} textarea-x dash-teaxtarea mx-3`}
              style={{ color: "white" }}
            />
          </div>
      </div>
      </div>
  
  );
};

export default Topbar;
