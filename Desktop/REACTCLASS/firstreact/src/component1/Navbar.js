import React from 'react';

const Navbar = () => {
    let myName = 'Candid';
    let area = 33.6
    const myStyle = {
        backgroundColor: 'blue'
    }
    
  return (
    <div style={{backgroundColor: 'brown'}}>
        <h1 style={myStyle}>My name is {myName}</h1>
        <h1>{Math.random()}</h1>
        <h2>{Math.round(5.6)}</h2>
        <h3>{Math.ceil(area)}</h3>
    </div>
  )
}

export default Navbar;