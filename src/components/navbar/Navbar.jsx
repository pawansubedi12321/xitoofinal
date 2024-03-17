import React, { useContext,createContext, useRef,useEffect, useState } from 'react'
import { useNavigate ,useLocation} from "react-router-dom";
import { UserContext } from '../../App';
import './Navbar.css';
import WhiteLogo1 from './assets/WhiteLogo1.png';
//const UserContext=createContext();

const Navbar = () => {
  
    const {clicked,setclicked}=useContext(UserContext);

    
 
     
   
    const navigate = useNavigate();
    useEffect(()=>{
      clicked==='dash'?navigate('/dashboard'):""
    },[clicked])
    const category=(btn)=>{
        setclicked(btn);
        navigate("/CategoryPage");
        console.log("this is category",btn);
        
      }
      const dashboard=(btn)=>{
        setclicked(btn);
        navigate("/dashboard");
       
       
      }
      
      const question=(btn)=>{
        setclicked(btn);
        navigate("/question");
      }
    
      const booking=(btn)=>{
        setclicked(btn);
        navigate("/booking");
       
      }
      
  return (
    
    <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
    
  <a class="navbar-brand" href="#">
    <img src={WhiteLogo1} className='img-fluid img' alt="xitoologo"/>

  </a>
  <button class="navbar-toggler customize-nav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto nav-32 popupnav">
      <li onClick={()=>dashboard("dash")}className={`${clicked ==='dash'?"dash":""} nav-item`}>
        <a class="nav-link" href="#">
            <>
            <div className={`${clicked ==='dash'?'color-321':""}`}></div>     
                      
                       <span className="dashboardpage">Dashboard</span>

           </>
                      
            
        </a>
      </li>
      <li onClick={()=>category("cate")}className={`${clicked ==='cate'?"cate":""} nav-item`}>
        <a class="nav-link" href="#">

            <>
            <div className={`${clicked ==='cate'?'color-321':""}`}></div>
                      <span className="categorypage">Category</span>
                     
                  
                      
                      </>


        </a>
      </li>
      <li onClick={()=>question("que")}className={`${clicked ==='que'?"que":""} nav-item`}>
        <a class="nav-link" href="#">
        <>
        <div className={`${clicked ==='que'?'color-321':""}`}></div>
                     
                     <span className="questionpage">Questions</span>

                 
                     
                     </>
        </a>
      </li>



      <li onClick={()=>booking("book")}className={`${clicked ==='book'?"book":""} nav-item`}>
        <a class="nav-link" href="#">
        <>
        <div className={`${clicked ==='book'?'color-321':""}`}></div>
                     
                     <span className="bookingpage">Booking</span>

                 
                     
        </>
        </a>
      </li>

      <li className='emerge'>
            <p className='xittoo'>XITTOO © 2023 . Designed by Emerge Infosys</p>
            <p>Terms&Condition  PrivacyPolicies</p>
            </li>
    </ul>
  </div>
</nav>

    
  
    </div>
  )
}

export default Navbar