import React, {useState} from "react";

const Counter = () => {
const [num, setNum] = useState(0);

const increment = () =>{
    setNum(num + 1);

}

const decrement = () =>{
    // if (setNum  > 0) {
    //         setNum(num - 1);
            
    //     } else {
    //         alert('Counter can not be less than 0')
    //         setNum(num - 1);
            
    //     }
    setNum(num - 1);

}

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
        </>
     );
}
 
export default Counter;