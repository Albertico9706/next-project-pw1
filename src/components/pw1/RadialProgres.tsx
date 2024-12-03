"use client"

/* import { useState } from "react"
import toast from "react-hot-toast" */

export default function Progress({percentage=50}:{percentage?:number}){
   /*  const handleClick=()=>{
        const newValue=value==90? 50:90
      setValue(newValue)
       
       toast(newValue.toString())
    }
    const [value,setValue]=useState(percentage) */
    /* console.log(percentage) */
    //the editor mark as an error in teh atribbute style but this work fine
    /*eslint-disable*/
    return(
    <div className="flex justify-center">
        {/* <button onClick={handleClick} className="radial-progress llenar text-primary" style={{"--value":value}} role="progressbar">
            {value}%
        </button> */}
    </div>)
    /*eslint-enable*/
}



