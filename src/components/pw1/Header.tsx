import Link from "next/link";
/* import NavSupermenu from "./NavSupermenu"; */
import DropdownDaisy from "./DropdownDaisy";

export default function Header(){
    return(
    <header className="top-0 notes max-w-full flex backdrop-blur-sm justify-between sticky p-2 px-8  place-content-center shadow-lg transition min-w-dvw ">
        <Logo/>
        <div className="flex gap-8">
        {/* <NavSupermenu/> */}
        <DropdownDaisy></DropdownDaisy>
        <AuthAnchor/>
        {/* <ThemeControler/> */}
        </div>
    </header>)
}

function AuthAnchor(){
    return(
    <div className="hidden sm:flex gap-4 items-center [&_>a]:btn [&_>a]:btn-sm btn-accent">
        <Link href="/login">Login</Link>
        <Link href="/signin">Signin</Link>
    </div>
    )
    
}

function Logo(){
    return(<Link className="font-bold transition duration-1000 text-2xl font-serif hover:text-primary first-letter:text-blue-500 max-sm:w-[26px] overflow-hidden" href="/">WorkRem</Link>)
} 
 {/* this hidden checkbox controls the state */}
/* function ThemeControler(){
    return(<label className="swap swap-rotate w-2">
       
        <input type="checkbox" className="theme-controller" value="synthwave" />
        <Sun/>
        <Moon/>
      </label>)
} */





