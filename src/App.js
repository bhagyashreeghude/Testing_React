import { useState } from 'react';

function App() {
  const [data,setData] = useState("")
  const handlebtn = () =>{
      setData("hello")
  }
  return(
      <div>
          <h1> funfile component</h1>
          <button data-testid="btn1" onClick={handlebtn}>button</button>
          <h4>{data}</h4>
      </div>
  )
}
export default App;
