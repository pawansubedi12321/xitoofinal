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
  const [Assistant,setAssistance]=useState()
  
  const editbooking = Data.filter((data) => data.id === id);
  console.log("this is state", editbooking);
  // console.log("problem",JSON.parse(editbooking[0].bookedProblem).categoryName)
  useEffect(() => {
    const fetchassistance = async () => {
        // if (Data.length === 0 || !id) return;


        // if (editbooking.length === 0 || !editbooking[0].bookedProblem) return;

        try {
            const response = await axios.get(Getassistancelist(), {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log("problem",JSON.parse(editbooking[0].bookedProblem).categoryName)
            const filter = response.data.data.assistance.filter((item) => {
                return item.active === true &&
                    item.approved === true &&
                    (item.category.name === JSON.parse(editbooking[0].bookedProblem).categoryName);
            });
            console.log("this is filter", filter);
            setAssistance(filter);
        } catch (error) {
            console.log(error);
        }
    };

    fetchassistance();
}, [Data]); // Ensure Data and id are dependencies
console.log("this is assistance",Assistant)
    const backbutton=()=>{
        // console.log("this is state",activeTab);
        navigate('/booking',{state:activeTab});
    }
    const crossbutton=()=>{
        navigate('/booking',{state:activeTab});
    }
  const[selectedstatus,setselectedstatus]=useState()
  const selectstatus=(e)=>{
    setselectedstatus(e.target.value)
  }
  const[selectedassistance,setselectedassistance]=useState()
  const selectassistance=(e)=>{
    setselectedassistance(e.target.value)
  }
  const update = async () => {
    const data = {
      status: selectedstatus,
      assignTo: selectedassistance,
    };

    if (!data.status) {
      alert("Please select the status");
      return;
    }
    if (data.status === 'completed' && data.assignTo) {
      alert("You can't assign a worker when the status is completed");
      return;
    }
    if (!data.assignTo) {
      alert("Please assign the worker");
      return;
    }

    try {
      const response = await fetch(Updatebooking() + `${editbooking[0].id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server responded with an error:", errorData);
        alert(errorData.message || "An error occurred");
        return;
      }

      const responseData = await response.json();
      console.log("Response data:", responseData);
      alert(responseData.message);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
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
                <option value="ongoing">Ongoing</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className='col-md-12 editbooking-status'>
              <label className='booking-status'>AssignTo:</label>
              <select onChange={selectassistance} className='select-booking'>
              <option>Select your assistance</option>
              {
               Assistant===undefined?"": Assistant.map((item,index)=>(
                  <option value={item.user.id}>{item.user.name}-{item.user.phone}-{item.category.name}</option>
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