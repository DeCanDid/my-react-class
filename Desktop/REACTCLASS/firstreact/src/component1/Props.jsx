import React from 'react'

const Props = (props) => {
    console.log(props.name);
  return (
    <>
        {/* <div>
            <button onClick={props.click} style={{backgroundColor: props.colour}}>{props.name}</button>
        </div> */}

        <div className="card" style={{textAlign: props.alinText,
            width: props.width, padding:props.padding, 
            backgroundColor:props.colour, margin:props.margin,
            borderRadius:props.borderRadius}}>
            <h3>{props.icon}</h3>
            <p>{props.name}</p>
            <button>{props.text}</button>
        </div>
    </>
  )
}

export default Props;