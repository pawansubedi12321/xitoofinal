import React from 'react'
import Loginpage from '../LoginPage';
import BackButton from './assets/BackButton.png';
import {useNavigate ,useLocation, json} from "react-router-dom";
 import Cross from './assets/Close.svg';
 import ClearIcon from '@mui/icons-material/Clear';
const EditStatus = () => {
    const navigate = useNavigate();
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
              <select className='select-booking'>
               
                <option>Appoint</option>
                <option>Completed</option>
                <option>Onwork</option>
                <option>Pending</option>
                
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