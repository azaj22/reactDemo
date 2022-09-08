import { useState } from "react";


export default function App() {
  const [add, setAdd] = useState(null);
  const [minus, setMinus] = useState(null)
  const [name, setName] = useState("");

  

  return (
    <div className="App">
      <input type="nuber"value={add}  has={name}
            onChange={(e) => setName(e.target.value)}  />
      <input type="text"value={minus}   />
      
      <button onClick={() => setAdd(add + 1)} > increment</button>
      <button onClick={() => setMinus(minus - 1)}> minus</button>
    </div>
  );

  }