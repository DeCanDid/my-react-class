import React from 'react';
import { useState } from "react";

 const Form = () => {
 const [Name, setName] = useState('Wura');
 const [username, setUsername] = useState('');

 const changeName = ()=>{
    setName(username)
 }


//  const [formValues, setFormValues] = useState(
//   {
//     firstname: '',
//     password: '',
//     email: ''
//   }
//  )

//  const handleChange = (event)=>{
//   const {name, value} = event.target;
//   setFormValues({...formValues, [name]:value})
//  }


const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showValues, setShowValues] = useState(false)

const setValues = () =>{
  setShowValues(true)
  setFirstName(firstName);
  setEmail(email);
  setPassword(password)
  console.log(firstName,email,password);
 
}

const myStyle = {
  border:{
      border: '1px solid black'
 
  }
}

  return (

    <>
    <h2>{Name}</h2>
    <input type="text" onChange={(e)=>setUsername(e.target.value)} />
    <button onClick={changeName}>Change this name</button>

      <form action="#">
        <label htmlFor="firstname">First Name:</label>
        <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <button onClick={setValues}>submit</button>
      </form>

      {
        showValues &&(
          
      <div className="display">
      
           <h1>{firstName}</h1>
           <h1>{email}</h1>
         
           <h1>{password}</h1>
          
     </div>
        )
      }

    </>
  )
}
export default Form;