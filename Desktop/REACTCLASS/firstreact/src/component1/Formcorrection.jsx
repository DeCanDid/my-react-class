import { findAllByTestId } from '@testing-library/react';
import React, { useState } from 'react';
import axios from 'axios';

const Formcorrection = () => {
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [vals, setVals] = useState(false)

    const submitForm = () =>{
        setVals(true)
    }

    let endpoint = 'https://jsonplaceholder.typicode.com/posts';
    const [info, setinfo] = useState([]);
    const fetchData = () =>{
        axios.get(endpoint).then((result)=>{
            setinfo(result.data)
            console.log(result.data);
            console.log('fetching');

        })
    }

  return (
    <div>
        <form action="#">
            <label htmlFor="">User Name:</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)}/><br />
            <label htmlFor="">Email:</label>
            <input type="email" onChange={(e)=>setemail(e.target.value)}/><br />
            <label htmlFor="">Password:</label>
            <input type="password" onChange={(e)=>setpassword(e.target.value)}/><br />
            <button onClick={submitForm}>Submit</button>

        </form>

        <h1>Fetching</h1>
        <button onClick={fetchData}>Fetch</button>

        {
            vals &&(
                <>
                <h1>{username}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
                </>
            )
        }

        {
            info.map((item, index)=>(
                <>
                <h1>{item.title}</h1>
                </>
            ))
        }
    </div>
  )
}

export default Formcorrection