import React, { useState } from "react";
const  Sum=()=>{
    const [add ,setAdd] =useState(0)


    return(
        <>
        <h1>   add to number{setAdd}</h1>
        <button onClick={()=>setAdd(add+1)}>add</button>
        </>

    )
}

export default Sum