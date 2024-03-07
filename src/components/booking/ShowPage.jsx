import React ,{useState,useEffect} from 'react'
import axios from 'axios'
// import { getbooking,token} from '../api/API';
import {getbooking,token} from '../api/API.jsx';
const ShowPage = () => {
    const[Data,setData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
      
            const response = await axios.get(getbooking(),{
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
            setData(response.data.data);
          } catch (error) {
      
            console.error('Error fetching data:', error);
          }
        };
      
      
        fetchData();
      }, []);
      console.log(Data);
  return (
    <div className='container-fluid'>

    </div>
  )
}

export default ShowPage