import NavSupermenu from "./NavSupermenu";

export default function Header(){
    return(<header className="notes w-svw flex  justify-between sticky p-2 px-8  place-content-center shadow-lg">
        <a className="font-bold text-2xl font-serif hover:text-primary transition-colors  " href="/">WorkRem</a> 
        <NavSupermenu/>
        <AuthAnchor/>
        
        
    </header>)
}

function AuthAnchor(){
    return(
    <div className="flex gap-4 items-center [&_>a]:font-bold [&_>a]:text-white [&_>a]:rounded-s-full [&_>a]:rounded-e-full [&_>a]:p-1 [&_>a]:bg-sky-500 [&_>a:hover]:underline">
        <a href="/login">Login</a>
        <a href="/signin">Signin</a>
    </div>
    )
    
}

