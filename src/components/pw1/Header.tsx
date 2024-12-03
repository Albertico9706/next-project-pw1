import Link from "next/link";
import DropdownDaisy from "./DropdownDaisy";
import ThemeControler from "./ThemeControler";

export default function Header(){
    return(
    <header className="z-20 top-0 notes max-w-full flex backdrop-blur-sm justify-between sticky items-center p-2 px-8  place-content-center shadow-lg transition min-w-dvw ">
        <Logo/>
        <div className="flex gap-8 items-center">
        <DropdownDaisy></DropdownDaisy>
        <AuthAnchor/>
        <ThemeControler/> 
        </div>
    </header>)
}

function AuthAnchor(){
    return(
    <div className="hidden sm:flex gap-4 items-center [&_a]:btn-sm ">
        <Link href="/login" className="btn btn-outline outline-white">Login</Link>
        <Link href="/signin" className="btn btn-primary ">Signin</Link>
    </div>
    )
    
}

function Logo(){
    return(<Link className="font-bold transition duration-1000 text-2xl font-serif hover:text-primary first-letter:text-blue-500 max-sm:w-[26px] overflow-hidden" href="/">WorkRem</Link>)
} 
 {/* this hidden checkbox controls the state */}






