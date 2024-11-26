"use client"
import toast from "react-hot-toast"



export default function MakeToast(){
    const makeToast=()=>toast("Hello World")
    return(<button onClick={makeToast} className="border-black border bg-slate-300">Add Toast</button>)
}