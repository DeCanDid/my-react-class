import React from 'react'
import { useState } from "react";

const Property = ({name, myColor, click, fName}) => {
    
  return (
    <>
        <div>
            <h2>{fName}</h2>
            <h1 style={{color:myColor}}>{name}</h1>
            <button onClick={click}>Greet Sammy</button>

            {/* <button>{props.lastName}</button> */}
        </div>
    </>
  )
}

export default Property;