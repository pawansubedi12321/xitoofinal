import React, { useEffect, useState } from 'react'
import '../css/AddItems.css'
import BackButton from './assets/BackButton.png';
import Cross from './assets/Close.svg'
import ImageFrame from './assets/ImageFrame.svg';
import AddImage from './assets/AddImage.svg';
import ImageFrameButton from './assets/ImageFrameButton.svg'
import {useNavigate ,useLocation, json} from "react-router-dom";
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {additem,token} from '../api/API.jsx';
import Loginpage from '../LoginPage';
import ClearIcon from '@mui/icons-material/Clear';
const AddItems = () => {
  const[image,setimage]=useState('');
  const[textdata,settextdata]=useState("");
  const[categorylist,setcategorylist]=useState([]);
  const[number,setnumber]=useState(false);
  const[backgroundimage,setbackgroundimage]=useState(false);
  
  const navigate = useNavigate();
  const location=useLocation();
  const state=location.state;
  const[img,setimg]=useState(null);

  useEffect(()=>{
    if(state){
      setbackgroundimage(true);
      
      setimage(state[0].imagePath)
    }
    else{
      
    }
  },[state])
   
  try{
    if(state===null ||state==="")
    {
      console.log("image is null or empty")
    }
  }
  catch{
    console.log("error handled")
  }
  console.log("end");
    const imagefile=(e)=>{
      const x = e.target.files[0];
      setimg(x);
      if(x)
      {
        const y= URL.createObjectURL(x);
        console.log("dfs");
        console.log(y);
        console.log("ned");
       
        setimage([...image,y]);
        setbackgroundimage(!backgroundimage);
      }
    }
    const text=(e)=>{
      const x=e.target.value;
      settextdata(x);
    }

    const save = async (e) => {
      e.preventDefault();
      // console.log("this is img");
      // console.log(image);
      // console.log("close");
      
      try {
        const formData = new FormData();
        formData.append('name', textdata);
        formData.append('image',img);     
        const response = await fetch(additem(), {
          method: 'POST',
          body:formData,
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
        console.log('Response data:', data);

      } catch (error) {
        console.error('There was an error:', error);

      }
      navigate('/CategoryPage');
    }
  const backbutton=()=>{
    navigate('/CategoryPage',{state:state});
  }
  const crossbutton=()=>{
    navigate('/CategoryPage',{state:state});
  }
  
  return (
    <div>
     <Loginpage/>
      <div className="container-fluid container-xss">
      <div className="row mainpage  addproblem-pg">
      <div className="col-md-8">
      <div className="addproblempage">
      <div className="row">
      <div className="col-md-12 addprob-head">
      <img className="backbutton"onClick={backbutton}src={BackButton} alt="backbutton"/>
      <h9 className="add-question">ADD ITEM</h9>
      <div onClick={crossbutton}src={Cross}alt="closebutton"className='closebutton'>
     <ClearIcon className='clearicon'/>
    </div>

        </div>

        <form>
        <div className='col-md-12 images-dds'>
        <input type="file" required onChange={imagefile} id="imageInput"className='image-ddf' accept="image/*"/>

        <img className="additem-img" src={ImageFrameButton}/>

        {
            backgroundimage?<img src={state[0].imagePath} className='img-23'/>:""
       }

        </div>

      <div className='xxd'>
    <p className='ddf'>Provide category title.</p>

</div>
    <input  defaultValue={state[0].name} style={{color: "white"}} type="text"onChange={text}placeholder="Type here.."className='dds-x'/>
    <div className='save-btn'>
      <button className='save'onClick={()=>mutate({textdata:textdata,image:image})}>Save</button>
    </div>
    </form>
        </div>
        </div>
        </div>
        </div>
      </div>

    </div>

    

  )
}

export default AddItems