import Link from "next/link"

export default function LinksIndexs(){
    const current="http://localhost:3000/admin"
    return(  
    <div className="grid  md:max-w-lg gap-8 max-w-40 text-center md:grid-cols-2" >
        <Link href={current+"/restaurants"} className="links_admin">Restaurants</Link>
        <Link href={current+"/users"} className="links_admin">Users</Link>
        <Link href={current+"/rest_comments"} className="links_admin">Comments Restaurants</Link>
    </div>)
}