import Link from "next/link";
import DropdownDaisy from "./DropdownDaisy";
import ThemeControler from "./ThemeControler";
import AuthAnchor from "./AuthAnchor";

export default function Header(){
    return(
    <header className="z-20 top-0 notes max-w-full flex backdrop-blur-sm justify-between sticky items-center p-2 px-8  place-content-center shadow-lg  min-w-dvw ">
        <Logo/>
        <div className="flex gap-8 items-center">
        <DropdownDaisy></DropdownDaisy>
        <AuthAnchor/>
        <ThemeControler/> 
        </div>
    </header>)
}



function Logo(){
    return(<Link className="font-bold transition duration-1000 text-2xl font-serif hover:text-primary first-letter:text-blue-500 max-sm:w-[26px] overflow-hidden" href="/">WorkRem</Link>)
} 
 {/* this hidden checkbox controls the state */}






