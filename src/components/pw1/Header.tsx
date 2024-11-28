import Link from "next/link";
import NavSupermenu from "./NavSupermenu";

export default function Header(){
    return(
    <header className="notes max-w-full flex  justify-between sticky p-2 px-8  place-content-center shadow-lg transition min-w-dvw ">
        <Link className="font-bold text-2xl font-serif hover:text-primary first-letter:text-blue-500 max-sm:w-7 overflow-hidden" href="/">WorkRem</Link> 
        <div className="flex gap-8">
        <NavSupermenu/>
        <AuthAnchor/>
        </div>
    </header>)
}

function AuthAnchor(){
    return(
    <div className="hidden sm:flex gap-4 items-center [&_>a]:font-bold [&_>a]:text-white [&_>a]:rounded-s-full [&_>a]:rounded-e-full [&_>a]:p-1 [&_>a]:bg-sky-500 [&_>a:hover]:underline [&_>a]:shadow [&_>a]:transition [&_>a:hover]:-translate-y-0.5">
        <Link href="/login">Login</Link>
        <Link href="/signin">Signin</Link>
    </div>
    )
    
}

