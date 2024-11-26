import Link from "next/link"

export default function CallAuth(){
    return(<div className="flex md:gap-8 gap-2 "><Link className="link-button " href="login">Login</Link><Link className="link-button bg-stone-800 text-white" href="signup">Sign In</Link></div>)
}