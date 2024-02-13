import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Get = () => {
    let endpoint = 'https://jsonplaceholder.typicode.com/users';
    const [isloading, setisloading] = useState(false)
    const [datas, setData] = useState([]);

    const getData = () =>{
        axios.get(endpoint).then((response)=>{
            setisloading(true);
                        setData(response.data)
            console.log(response.data);

        })
    }
  return (
    <div>
        <h1>Fetching</h1>
        <button onClick={getData}>Get Data</button>

        {
           !isloading? <h1>Loading...</h1>: datas.map((item, index) =>(
                <>
                    <div key={index}>
                        <h1>{item.name}</h1>
                    </div>
                </>
           ))
        }
    </div>
  )
}

export default Get