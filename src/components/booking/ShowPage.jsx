import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate ,useLocation, json} from "react-router-dom";
// import { getbooking,token} from '../api/API';
import {getbooking,token} from '../api/API.jsx';
import ClearIcon from '@mui/icons-material/Clear';
import LoginPage from '../LoginPage.jsx';
import Cross from './assets/Close.svg';
import BackButton from './assets/BackButton.png';
import '../css/Booking.css'
const ShowPage = () => {
  const navigate = useNavigate();
    const[Data,setData]=useState([]);
    const {state}=useLocation();
    console.log('this is state',state);
      const backbutton=()=>{
        navigate('/booking');
        
    }
    const crossbutton=()=>{
        navigate('/booking');
    }
      console.log(Data);
  return (
    <div className='container-fluid'>
      <LoginPage/>
      <div className="container-fluid container-xss">
      <div className="row mainpage  addproblem-pg">
      <div className="col-md-8">
      <div className="addstatuspage">
      <div className="row">
      <div className="col-md-12 addprob-head">
      <div className='col-md-4'>
          <img className="backbutton"onClick={backbutton}src={BackButton} alt="backbutton"/> 

          </div>
          <div className='col-md-4 parent-add-question'>
        <h9 className="add-question">Show Booking</h9>
        </div>
        
        <div onClick={crossbutton}src={Cross}alt="closebutton"className='col-md-4 parent-closebutton'>
          <div className='closebutton'>
        <ClearIcon className='clearicon'/>
        </div>
         </div> 

        </div>
        </div>


        <div className='row showpagelist'>
          <p>bookedDate:{state[0].bookedDate}</p>
          <p>assignTo:{state[0].assignTo}</p>
          <p>completedData:{state[0].completedDate}</p>
          <p>Description:{state[0].description}</p>
          <p>itemCount:{state[0].itemCount}</p>
          <p>Location:{state[0].location}</p>
          <p>problemInterval:{state[0].problemInterval}</p>
          <p>selectedBrand:{state[0].selectedBrand}</p>
          <p>Status:{state[0].status}</p>
          <p>timePeriod:{state[0].timePeriod}</p>
          <p>transactionMode:{state[0].transactionMode}</p>
        </div>
        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default ShowPage