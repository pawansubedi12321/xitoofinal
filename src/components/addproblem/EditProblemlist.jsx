
import React, { useEffect, useRef, useState } from "react";
import "./Addproblem.css";
import BackButton from "../addcategory/assets/BackButton.png";
import Cross from "../addcategory/assets/Close.svg";
import ImageFrame from "../addcategory/assets/ImageFrame.svg";
import AddImage from "../addcategory/assets/AddImage.svg";
import Save from "./assets/Save.svg";
import ImgFrame from "./assets/img.png";
import ProblemLIst from "./ProblemList";
import { useNavigate, useLocation } from "react-router-dom";
import Loginpage from "../LoginPage";
import { addproblem, token } from "../api/API.jsx";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation } from "react-query";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Editproblemlist = () => {
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [describe, setdescribe] = useState("");
  const [interval, setinterval] = useState("");
  const [amount, setamount] = useState("");
  const [problem, setproblem] = useState([]);
  const [number, setnumber] = useState(false);
  const [length, setlength] = useState("");
  const [backgroundimage, setbackgroundimage] = useState(false);
  const [img, setimg] = useState(null);
  const navigate = useNavigate();
  const state  = useLocation();
  console.log("this is edited data",state)
  // useEffect(()=>{
  //   if(state)
  //   {
  //     setbackgroundimage(true)
  //   }
  // },[state]);
  const writeenvalue = useRef(0);
  const imagefile = (e) => {
    const x = e.target.files[0];
    setimg(x);
    if (x) {
      const y = URL.createObjectURL(x);

      console.log(y);

      setimage(y);
      setbackgroundimage(!backgroundimage);
    }
  };
  const namevalue = (e) => {
    const x = e.target.value;
    setname(x);
  };
  const description = (e) => {
    let x = e.target.value;
    setdescribe(x);
    const length = x.length;

    setlength(length);
  };
  const Timeinterval = (e) => {
    const x = e.target.value;
    setinterval(x);
  };

  const Estamount = (e) => {
    const x = e.target.value;
    setamount(x);
  };

  const save = async (e) => {
    // e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("category", state);
      formData.append("name", name);
      formData.append("price", amount);
      formData.append("estTime", interval);
      formData.append("shortDescription", describe);
      formData.append("image", img);

      const response = await fetch(addproblem(), {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("There was an error:", error);
    }
    navigate("/problemlist", { state: state });
  };
  const { mutate, isLoading, isError } = useMutation(save, {
    onSuccess: (successData) => {
      console.log(successData);
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  const backbtn = () => {
    console.log("this is state id",state.state.id);
    navigate("/problemlist",{state:state.state.id});
  };

  const crossbtn = () => {
    navigate("/problemlist",{state:state.state.id});
  };
  console.log("this is add problem list id");
  console.log(state);
  console.log("end");
  localStorage.setItem("problem", JSON.stringify(problem));
  return (
    <div>
      <Loginpage />
      <div className="container-fluid container-xss">
        <div className="row mainpage addproblem-pg">
          <div className="col-md-8">
            <div className="addproblempage">
              <div className="row">
                <div className="col-md-12 addprob-head">
                <img className="backbutton"onClick={backbtn}src={BackButton} alt="backbutton"/>
                  
                  {/* <div className="addproblem-backbutton">
                  <ArrowBackIcon className="arrowbackicon"/>
                  <span onClick={backbtn} className="addproblem-save-btn">Back</span>
                  </div> */}
                  <h9 className="add-question">EDIT PROBLEM</h9>
                  <div
                    onClick={crossbtn}
                    src={Cross}
                    alt="closebutton"
                    className="closebutton"
                  >
                    <ClearIcon className="clearicon" />
                  </div>
                </div>
              </div>
              <div className="add-question-body">
                <p className="info">Provide more informations</p>
                <form>
                <div className="row">
               
              
                <div className="col-md-7 text-33">
                  <div class="mb-3">
                    <input
                      class="name"
                      style={{ color: "white" }}
                      id="exampleFormControlTextarea1"
                      onChange={namevalue}
                      placeholder="Typehere..."
                      rows="3"
                      defaultValue={state.state.editeddata[0].name}
                    />
                    <label className={`name-333`}>Name</label>
                  </div>

                  <div className="desc-443">
                    <label className={`desc-32 `}>Short Description</label>

                    <div class="mb-3">
                      <textarea
                        style={{ color: "white" }}
                        onChange={description}
                        placeholder="Typehere..."
                        class="shortdescription"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        defaultValue={state.state.editeddata[0].shortDescription}
                      ></textarea>
                      <div className="written">{length ? length : 0}/200</div>
                    </div>
                  </div>

                  <div className="time-interval-333">
                    <div className="timeinterval">
                      <span className="interval">Estm. Time Interval</span>
                      <div className="text-432">
                        <input
                          type="text"
                          placeholder="0"
                          onChange={Timeinterval}
                          className=" text-32"
                          defaultValue={state.state.editeddata[0].estTime}
                        />
                        <span className="hrs">hrs</span>
                      </div>
                    </div>
                  </div>

                  <div className="estmamount">
                    <span className="est-amnt">Estm.Amount</span>
                    <div className="text-432">
                      <input
                        type="text"
                        placeholder="000.00"
                        onChange={Estamount}
                        className="text-44"
                        defaultValue={state.state.editeddata[0].price}
                      />
                      <span className="Rs">Rs.</span>
                    </div>
                  </div>
                </div>
              
                <div className="col-md-5 image-savebtn">
                <div className='add-image-xxd'>
             <input type="file" required onChange={imagefile}className={`problem ${backgroundimage ?"none":""}`} accept="image/*"/>
            <img src={ImgFrame}className={`addimg ${backgroundimage ?"none":""}`}alt="bacground-col"/>
              {
              backgroundimage?<img src={state.state.editeddata[0].imagePath} className='img-334'/>:""
            }
            </div>
            {/* <div className="save-33">
            <img src={Save} className="savebtn"alt="savebtn"/>
            </div> */}
            <div className='save-btn'>
      <button className='save'onClick={()=>mutate({name:name,interval:interval,describe:describe,amount:amount})}>Update</button>
    </div>
        </div>
     
        
       
        </div>
        </form>
       
        

                
              </div>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Editproblemlist;
