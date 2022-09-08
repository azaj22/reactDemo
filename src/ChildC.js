import React, { useContext } from "react";
import {data,data1} from './App'
function ChildC (){
    const first= useContext(data)
    const last= useContext(data1)
    return(
        <>
        <h1> hi am fffff{first} <br></br>hhoho{last}</h1>
        </>
    )
}
export default ChildC




function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }