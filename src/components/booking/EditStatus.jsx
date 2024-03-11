import React from 'react'
import Loginpage from '../LoginPage';
import BackButton from './assets/BackButton.png';
import {useNavigate ,useLocation, json} from "react-router-dom";
 import Cross from './assets/Close.svg';
 import ClearIcon from '@mui/icons-material/Clear';
const EditStatus = () => {
    const navigate = useNavigate();
    const {state}=useLocation();
    console.log("this is state",state)
    // console.log("this is state",state[0].status.toUpperCase());
    const backbutton=()=>{
        navigate('/booking');
        
    }
    const crossbutton=()=>{
        navigate('/booking');
    }
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
              <select  className='select-booking'>
               
                <option  selected={state[0].status.toUpperCase() === "APPOINT"} value={state[0].status.toUpperCase()}>Appoint</option>
                <option  selected={state[0].status.toUpperCase() === "COMPLETED"} value={state[0].status.toUpperCase()}>Completed</option>
                <option selected={state[0].status.toUpperCase() === "ONWORK"}value={state[0].status.toUpperCase()}>Onwork</option>
                <option selected={state[0].status.toUpperCase() === "PENDING"}value={state[0].status.toUpperCase()}>Pending</option>
                
              </select>
            </div>

            <div className='col-md-12 parent-editbutton '>
            
              <input className="editbooking-button"type='button'value="save"/>
            
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