
import React, { useState } from 'react'
import { useRef,} from 'react';

function Home (){
    const refElement =useRef("")
    const [data ,setData] =useState("azal")
    console.log(refElement)
    function Reset(){
        setData("")
       
        refElement.current.focus()
    }
    function That()
    {
        refElement.current.style.color="blue" 
        refElement.current.value="hi"
    }
    
    return(
    <div className='App'>
    <h1> hi</h1>
    <input ref={refElement}type="text" value={data}onChange={(e)=>setData(e.target.value)} ></input>
    <button onClick={Reset}>reset</button>
    <button  onClick={That}>that</button>
    </div>
    )
    }

export default Home

