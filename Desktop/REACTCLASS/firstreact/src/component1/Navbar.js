import React, {useState} from 'react';

const Navbar = () => {
    let myName = 'Candid';
    let area = 33.6;

    let allStudent = [
      {firstname: 'Lola', lastname: 'Tope', class: 'React'},
      {firstname: 'Sola', lastname: 'Sammie', class: 'CSS'},
      {firstname: 'Bola', lastname: 'Sanya', class: 'Java'},
      {firstname: 'Tolu', lastname: 'Remi', class: 'JavaScript'},
      {firstname: 'Bolu', lastname: 'Tayo', class: 'HTML'}
    ]
    // let num = 0;
  const [num, setNumber] = useState(0);

  const incr = () =>{
    setNumber(num + 1);
  }

  const dec = () =>{
    setNumber(num -1);
  }

    // function inc() {
    // const pi = document.querySelector('.pi');

    //   pi.innerHTML = num;
    //   num++;
    //   console.log(num);
    // }

    // const dec = ()  =>{
    // const pi = document.querySelector('.pi');

    // pi.innerHTML  = num;
    //   num--;

    //   console.log(num);
    // }

    const myStyle = {
        butt:{
          backgroundColor: 'blue'
        }
    }
    
  return (
    <>
    <div style={{backgroundColor: 'brown'}}>
        <h1 style={myStyle} >My name is {myName}</h1>
        <h1>{Math.random() * area}</h1>
        <h2>{Math.round(5.6)}</h2>
        <h3>{Math.ceil(area)}</h3>
        <p className='pi'>{num}</p>
        <button style={myStyle.butt} onClick={()=>setNumber+1}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>

    <table>
      <tr>
        <th>S/N</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Class</th>
      </tr>

    {allStudent.map((student, i) =>(
      <>
    <tr>
        <td>{i+1}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>
        <td>{student.class}</td>
    </tr>
      </>
    ))}
    
    </table>
    </>
  )
}


export default Navbar;