import Link from "next/link"



export default function AsideAdmin(){
    return(
    <aside className="sticky  p-8 ps-4 border row-span-6  border-orange-400 rounded-lg">
        <ul className="flex flex-col   gap-2">
            <li key={"users"}><Link className="links-aside" href="users">Users</Link></li>
            <li key={"restaurants"}><Link className="links-aside" href="restaurants">Restaurants</Link></li>
            <li key={"comments"}><Link className="links-aside" href="rest_comments">Comments</Link></li>
        </ul>
    </aside>
    )
}

