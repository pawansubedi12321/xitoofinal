import React, { useState } from 'react'
import './css/LoginPage.css'
import WhiteLogo1 from '../assets/WhiteLogo1.png'
import {useNavigate} from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {token,Login} from './api/API.jsx';
const loginpage = () => {
  const[phone,setphone]=useState('');
  const[password,setpassword]=useState('');
  const[show,setshow]=useState(false);

  const navigate=useNavigate();
  const user=(e)=>{
    const x=e.target.value;
    
    setphone(x);
  }
  const pass=(e)=>{
    const x=e.target.value;
    setpassword(x);


  }

  const login = async (e) => {
    e.preventDefault();
  

    try {
      const datavalue={
        phone:phone,
        password:password,
      }
      // const formData = new FormData();
      // formData.append('phone', phone);
      // formData.append('password', password);
  
      // // Convert FormData to a plain object
      // const formDataObject = {};
      // formData.forEach((value, key) => {
      //   formDataObject[key] = value;
      // });
  
      const response = await fetch(Login(), {
        method: 'POST',
        body: JSON.stringify(datavalue),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        alert("login unsuccesfull.please try again");
        throw new Error('Network response was not ok.');
        
      }
  
      const data = await response.json();
      console.log('Response data:', data);
      if(response.ok)
      {
        alert(data.message);
        navigate("/dashboard");
      }
      // console.log(data.data.name);
      localStorage.setItem('accessToken',data.data.accessToken);
  
    } catch (error) {
      console.error('There was an error:', error);
    }
  };
  console.log(password);
  const inputStyle={
    color:"white",
  }
  const clicked=()=>{
    setshow(!show);
    console.log(show);
  }
  return (
    <>
    <div className="section-padding login-bg">
        <div className="row login-container">
          <div className='col-md-6 login-332'>
            <img src={WhiteLogo1}alt="xitoimg"className='xitoimg'/>
          </div>
          <div className="col-md-6 loginpage">
          <div className='header'>
          <h1 className='welcome'>welcome</h1>
          <p className='para'>Please login to Admin Dashboard.</p>
            </div>

            <form className='loginform'>
            <input style={inputStyle}onChange={user}type="text"placeholder='Phone Number'className='username'/>
            <input style={inputStyle}value={password}  onChange={pass}type={`${show ?'text':'password'}`} placeholder='Password'className='password'/>
            <div className='eye'>
                <span><VisibilityOffIcon style={{display:`${show ?'none':''}`}}onClick={clicked} className='visibility'/></span>
                {
                  show ? <span><RemoveRedEyeIcon onClick={clicked} className='visibility'/></span>:""
                }
                </div>

                <div className='login-button'>

                <button className='Button'onClick={login}><span className='login'>LOGIN</span></button>
                </div>
                <div className='forgot'>
                <p className='forgotpass'>Forgot Password?</p>
                </div>
            </form>
            {/* </div> */}

          </div>
            
             {/* <div className='col-md-6 images'>
            <img src={WhiteLogo1}alt="xitoimg"/> 
            </div>  */}
            {/* <div className='col-md-6'>
              <div className='loginpage'>
                <div className='header'>

                </div>

              </div>

            </div> */}
             
            {/* <div className=''> */}
             
            {/* <div className='loginpage'>
              
               <div className='header'>
                <h1 className='welcome'>welcome</h1>
                <p className='para'>Please login to Admin Dashboard.</p>
                </div>
                <div className='body'>
                <input style={inputStyle}onChange={user}type="text"placeholder='Phone Number'className='username'/>
                <input style={inputStyle}value={password}  onChange={pass}type={`${show ?'text':'password'}`} placeholder='Password'className='password'/>
                <div className='eye'>
                <span><VisibilityOffIcon style={{display:`${show ?'none':''}`}}onClick={clicked} className='visibility'/></span>
                {
                  show ? <span><RemoveRedEyeIcon onClick={clicked} className='visibility'/></span>:""
                }
                </div>
                <button className='Button'onClick={login}><span className='login'>LOGIN</span></button>
                <div className='forgot'>
                <p className='forgotpass'>Forgot Password?</p>
                </div>
                </div>
            </div> */}
            {/* </div> */}
            
            </div> 
            </div>
       
       </>
  )
}

export default loginpage

