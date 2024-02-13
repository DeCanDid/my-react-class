import React from 'react';
import gif from '../gif-spinner.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    let endpoint = 'https://fakestoreapi.com/products';
    const [users, setusers] = useState([]);
    const [isloading, setisloading] = useState(false);

 useEffect(()=>{
  getData()
 
}, [isloading])

 
 
    
    const getData = () =>{
        setisloading(true)
      axios.get(endpoint).then((response)=>{
        console.log(response.data);
        setusers(response.data)
      })
    }
  return (
    <div>
        <h1>Fetching</h1>
        <button onClick={getData}>Fetch</button>
        {
         !isloading ? <img src={gif} className="App-logo" alt="logo" /> : users.map((user)=>(
                <>
               <div style={{backgroundColor:'red', margin:'20px'}}>
               <img src={user.image} style={{width:'200px'}} alt="" />
                <h1>{user.category}</h1>
                <h1>{user.price}</h1>
               </div>
                </>
            ))
        }
    </div>
  )
}

export default Axios;