import React,{useState,useEffect}from 'react'
import Loginpage from '../LoginPage';
import BackButton from './assets/BackButton.png';
import {useNavigate ,useLocation, json} from "react-router-dom";
 import Cross from './assets/Close.svg';
 import ClearIcon from '@mui/icons-material/Clear';
 import { Getassistancelist,token,Updatebooking} from '../api/API';
 import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
const EditStatus = () => {
    const navigate = useNavigate();
    const {state}=useLocation();
    console.log("this is state",state)
    console.log("state",JSON.parse(state[0].bookedProblem).categoryName)
    // console.log("this is state",state[0].status.toUpperCase());
    const backbutton=()=>{
      // {state:showdata}
        // if(state[0].status==='pending'){
        //   navigate('/booking',{state:'nav-pending'})
        // }
        navigate('/booking',{state:"not"});
    }
    const crossbutton=()=>{
        navigate('/booking');
    }
    const [Assistant,setAssistance]=useState()
  useEffect(()=>{
    const fetchassistance=async()=>{
      try{
        const response=await axios.get(Getassistancelist(),{
          headers:{
            Authorization:`Bearer ${token}`,
          }
        })
        const filter=response.data.data.assistance.filter((item,index)=>{return item.active===true && item.approved===true && item.category.name===JSON.parse(state[0].bookedProblem).categoryName})
        setAssistance(filter)
        // console.log("this is assistance",Assistant)
  // console.log("assistance",Assistant[0].user.name)
      }
      catch(error){
        alert(error)
      }
    }
    fetchassistance()
  },[])
  const[selectedstatus,setselectedstatus]=useState()
  const selectstatus=(e)=>{
    setselectedstatus(e.target.value)
  }
  const[selectedassistance,setselectedassistance]=useState()
  const selectassistance=(e)=>{
    setselectedassistance(e.target.value)
  }
  const update=async()=>{
    const data={
      status:selectedstatus,
      assignTo:selectedassistance
    }
    console.log("this is id",state[0].id);
    try{
      if (JSON.parse(state[0].assignTo).id !==null){
        alert('you have already assigned the worker');
      }
    }
    catch(e){
      console.log("user is not assgined to the worker");
    }
    if(data.status==null){
      alert("please do select the staus")
    }
    else if(data.assignTo===null){
      alert("please do assign the worker")
    }
    else{
      try {
        const response = await fetch(Updatebooking() + `${state[0].id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Added Content-Type header
          },
          body: JSON.stringify(data), // Added body
        });
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        else{
          const data = await response.json();
          if (data) {
            alert("assigned  succesfully");
          }
          console.log("Response data:", data);
        }

      } catch (error) {
        console.error("There was an error:", error);
      }

    }
  }
  console.log("this is selectedbooking",selectedstatus);
  console.log("this si assistance",Assistant);
  console.log("this is selected assistance",selectedassistance);
  return (
    <div>
        <Loginpage/>
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
        <h9 className="add-question">Edit Status</h9>
        </div>

        
        
        <div onClick={crossbutton}src={Cross}alt="closebutton"className='col-md-4 parent-closebutton'>
          <div className='closebutton'>
        <ClearIcon className='clearicon'/>
        </div>
         </div>  
            </div>
            </div>

            <div className='row edit-status-page'>
            <div className='col-md-12 editbooking-status'>
              <label className='booking-status'>Status:</label>
              {/* value={state[0].status.toUpperCase()} */}
              <select onChange={selectstatus}  className='select-booking'>
                <option selected>Select Booking Level</option>
                <option value="appoint">Appoint</option>
                <option value="completed">Completed</option>
                <option value="onwork">Onwork</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className='col-md-12 editbooking-status'>
              <label className='booking-status'>AssignTo:</label>
              <select onChange={selectassistance} className='select-booking'>
              <option>Select your assistance</option>
              {
               Assistant===undefined?"": Assistant.map((item,index)=>(
                  <option value={item.user.id}>{item.user.name}</option>
                ))
              }
              </select>
            </div>

            <div className='col-md-12 parent-editbutton '>
            
              <input onClick={update} className="editbooking-button"type='button'value="UPDATE"/>
            
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EditStatus