import NavSupermenu from "./NavSupermenu";

export default function Header(){
    return(<header className="animate-fadeIn notes w-svw flex  justify-between sticky p-2 px-8  place-content-center shadow-lg">
        <a className="font-bold text-2xl font-serif hover:text-primary transition-colors  " href="/">WorkRem</a> 
        <NavSupermenu/>
        <div className="flex gap-4"><a href="/login" className="auth-links">Login</a><a href="/signin" className="auth-links">Signin</a></div>
    </header>)
}