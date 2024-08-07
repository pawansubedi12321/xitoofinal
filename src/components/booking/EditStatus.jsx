import React,{useState,useEffect}from 'react'
import Loginpage from '../LoginPage';
import BackButton from './assets/BackButton.png';
import {useNavigate ,useLocation, json,useParams} from "react-router-dom";
 import Cross from './assets/Close.svg';
 import ClearIcon from '@mui/icons-material/Clear';
 import { Getassistancelist,token,Updatebooking,getbooking} from '../api/API';
 import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
const EditStatus = () => {
    const navigate = useNavigate();
    const[Data,setData]=useState([]);
    const{id,activeTab}=useParams();
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getbooking(), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Response:', response.data);
        setData(response.data.data); // Assuming the data is in response.data.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    console.log("data",Data);
    console.log("this is item",id);
    const state=Data.filter((data)=>data.id==id)
    console.log("this is state",state)
    //const status = state[0].status;
    // let hash = '';
    // console.log("this is status",status);
    // switch (status) {
    //   case 'pending':
    //     hash = '#pending';
    //     break;
    //   case 'ongoing':
    //     hash = '#ongoing';
    //     break;
    //   case 'appoint':
    //     hash = '#appoint';
    //     break;
    //   case 'completed':
    //     hash = '#completed';
    //     break;
    //   default:
    //     hash = '#all';
    //     break;
    // }
    const backbutton=()=>{
        // console.log("this is state",activeTab);
        navigate(`/booking`,{state:activeTab});
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
      }
      catch(error){
      console.log(error)
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
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
          <img className="backbutton"href="#pending"onClick={backbutton}src={BackButton} alt="backbutton"/>
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