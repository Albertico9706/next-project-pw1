import Link from "next/link";


export default function NavLinks({children, link}:{children:string, link:NavLink}){
    
return (
    
    <Link  href={link.href}>
       {link.ico && <img src="link.ico"></img>} {children}
    </Link>
    )

}

export type NavLink ={
    ico?: string
    href: string
}

/* export function createNavLink(href:string, ico:string=undefined):NavLink{
    return {href,ico}
} */
