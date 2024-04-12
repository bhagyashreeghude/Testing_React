// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [ data,setData] =useState("")
  return (
    <div className="App">
      <h1>123456 First React Test case </h1>

      <input type='text' placeholder='user name' name='user-name' id='user-id'/>
      <img  title='nature-img' src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg' alt='img'></img>
   
      <h1> Testing onChange Event with Input Text</h1>
      {/* <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/> */}
      
      <button onClick={()=>setData("update Data")}>Update data</button>
      <h1>jest testing</h1>
      <h2>hello testing</h2>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
