import {  useState} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './component1/Navbar';
import Counter from './counter/Counter';
import Form from './counter/Form';
import Get from './component1/Get';
import Formcorrection from './component1/Formcorrection';
import Axios from './component1/Axios';
import Props from './component1/Props';
import Property from './Property';

const App = (() =>{
  const greet = ()=>{
    alert('Good morning sir')
  }
  const [firstName, setfirstName] = useState('Shalom')
 return(
  <div className="App">

    <Property fName={firstName} click={greet} name='Qoyyum' myColor='red' />
    <Property name='Feranmi' myColor='blue'  />
    <Property name='Sammy' myColor='Purple' />
 
  {/* <Navbar />
  <Counter />
  <Form /> */}
  {/* <Get /> */}
  {/* <Formcorrection /> */}
  {/* <Axios /> */}
  <Props padding='5%' width='40%' alinText='center'
   text='join the community' colour='pink' 
   name='Find the best answer to your 
  technical question, help others answer theirs'
  margin='20px' borderRadius='15px'
  icon='search Icon'/>

  <Props padding='5%' width='40%' 
  alinText='center' text='Discover teams' 
  colour='lightblue' name='Want a secure, 
  private space for your technical knowledge?'
  margin='20px' borderRadius='15px'
  icon='key Icon'/>

  {/* <Props colour='brown' name='Rusticate'/> */}
</div>
 )
}) ;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
