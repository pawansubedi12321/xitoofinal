import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate ,useLocation, json} from "react-router-dom";
// import { getbooking,token} from '../api/API';
import {getbooking,token,LocationName} from '../api/API.jsx';
import ClearIcon from '@mui/icons-material/Clear';
import LoginPage from '../LoginPage.jsx';
import Cross from './assets/Close.svg';
import BackButton from './assets/BackButton.png';
import '../css/Booking.css'
import  Rectangle2 from './assets/Rectangle2.png'
const ShowPage = () => {
  const navigate = useNavigate();
    const[Data,setData]=useState([]);
    const[LocationAddress,setLocationAddress]=useState();
    const {state}=useLocation();
    console.log('this is state',state);
    // console.log("state",state.bookedProblem);
      const backbutton=()=>{
        navigate('/booking');
        
    }
    const crossbutton=()=>{
        navigate('/booking');
    }
    console.log("location",state[0].location)
    // {{baseUrl}}/map/reverse?lat=27.7181&long=85.122
    
    useEffect(()=>{
      const fetchlocation=async()=>{
        try {
          const response = await axios.get(LocationName()+`lat=${JSON.parse(state[0].location).lat}&long=${JSON.parse(state[0].location).lng}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          return setLocationAddress(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }

      }
      fetchlocation();
    },[state])
      console.log("location address is ",LocationAddress===undefined?"":LocationAddress.address);
      console.log(Data);
  return (
    <>
     <LoginPage/>
      <div className="container-fluid container-xss">
      <div className="row mainpage  addproblem-pg">
      <div className="col-md-8">
      <div className="addstatuspage"> 
      <div className="row"> 
      <div className="col-md-12 addprob-head">
      <div className='col-md-4'>
          <img className="backbutton"href="#pending"onClick={backbutton}src={BackButton} alt="backbutton"/> 
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
        <div className='row g-1 booking-list'>
          <div className='col-md-4'>
          <img src={Rectangle2} alt="images"className='showpage-image' />
          <p className='show-booking mx-2'><b>User Name: </b>{JSON.parse(state[0].bookedBy).name}</p>
          <p className='show-booking mx-2'><b>Phone Number: </b>{JSON.parse(state[0].bookedBy).phone}</p>
          <p className='show-booking mx-2'><b>Problem Category: </b>{JSON.parse(state[0].bookedProblem).categoryName}</p>
          <p className='show-booking mx-2'><b>Description: </b>{JSON.parse(state[0].bookedProblem).shortDescription}</p>
          <p className='show-booking mx-2'><b>Selected brand: </b>{state[0].selectedBrand}</p>
      

          </div>
          <div className='col-md-4 booking-details'>
          <p className='mx-2'><b>BookedDate:</b> {state[0].bookedDate}</p>
          <p className='mx-2'><b>AssignTo:</b> </p>
          <p className='mx-2'><b>CompletedData:</b> {state[0].completedDate}</p>
          <p className='mx-2'><b>Description:</b> {state[0].description}</p>
          <p className='mx-2'><b>ItemCount: </b>{state[0].itemCount}</p>
          <p className='mx-2'><b>Location: </b> {LocationAddress===undefined?"":LocationAddress.address}</p>
          <p className='mx-2'><b>ProblemInterval: </b>{state[0].problemInterval}</p>
          <p className='mx-2'><b>SelectedBrand:</b> {state[0].selectedBrand}</p>
          <p className='mx-2'><b>Status: </b>{state[0].status}</p>
          <p className='mx-2'><b>TimePeriod:</b> {state[0].timePeriod}</p>

          
                              <div
                                className={`${state[0].status === "appoint"? " mx-2 show-appoint"
                                : state[0].status === "pending"? "mx-2 show-pending"
                                : state[0].status === "onwork"? " mx-2 show-onwork"
                                : state[0].status === "completed"?"mx-2 show-completed"
                                : ""
                                }`}
                              >
                                <span>Status : {state[0].status}</span>
                              </div>
                          
          
        </div>
        <div className='col-md-4 gx-4 assignandtransaction'>
          <p><b>Assign To: </b>{state[0].assignTo}</p>
          <p><b>Transaction Mode: </b>{state[0].transactionMode}</p>

        </div>
       
        </div> 
        </div> 
        </div>
        </div>
    </div>
    </>
    
  )
}

export default ShowPage