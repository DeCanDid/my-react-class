import React, {useState} from "react";

const Counter = () => {
const [name, setName] = useState('Olawale');


const changeName = () =>{
    setName('Remi')
    console.log(name);
}

const [num, setNum] = useState(0);

const increment = () =>{
    setNum(num + 1);

}

const decrement = () =>{
    setNum(num - 1);

    // if (setNum(num)  >= 0) {
    //         setNum(num = 0);
            
    //     } else {
    //         alert('Counter can not be less than 0')
    //         setNum(num - 1);
            
    //     }

}

// const [myarray, setArray] = useState([]);
const [myName, setmyName] = useState('Sammy');
const [inpV, setVal] = useState('');

const changeMyname = () =>{
    setmyName(inpV)
    console.log(inpV);
}

// const addValue = () =>{
//     setArray(getValue)
// }
    //styling Counter
    const myStyle = {
        holder: {
            width: '200px',
            height: '200px',
            backgroundColor: 'black',
            alignItems: 'center',
            borderRadius: '50%',
            margin: '50px auto',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px'
        },
        butHolder: {
            width: '10%',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '50%',
            border: '5px solid lightgreen'

        },
        butt: {
            outline: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: '5px',
            fontSize:'25px'
        }
    }
    return ( 
        <>
            <div style={myStyle.holder}>

                <aside style={myStyle.butHolder}>
                    <button style={myStyle.butt} onClick={increment}>+</button>
                </aside>
                <aside>
                    <h1 style={{color: 'white'}}>{num}</h1>
                </aside>
                <aside style={myStyle.butHolder}>
                    <button style={myStyle.butt} onClick={decrement}>-</button>
                </aside>

            </div>
                <h4>{name}</h4>
                <button onClick={changeName}>Change Name</button>
                <div>
                   <h2>{myName}</h2>
                   <input type="text" onChange={(e)=>setVal(e.target.value)} />
                   <button onClick={changeMyname}>ADD NAME</button>
                    
                </div>
        </>
     );
}
 
export default Counter;