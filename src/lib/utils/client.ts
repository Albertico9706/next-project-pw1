import toast from "react-hot-toast"

export const showModal=()=>{
    const dialog=document.querySelector("dialog")
    toast("Dialog")
    dialog?.showModal()
}