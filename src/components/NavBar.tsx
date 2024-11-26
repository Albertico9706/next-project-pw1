import { ButtonTheme } from '@/components/buttons/ButtonTheme'
import { checkUser } from '@/lib/serverActions/sessionActions'
import CallAuth from './CallAuth'
import Link from 'next/link'



export default async function NavBar(){
    
    return(
        <nav className="flex justify-between p-4 bg-slate-200 top-0 left-0 right-0 z-40  border-b-2 border-orange-600 sticky ">
            <ContentNavbar/>
        </nav>
    )
}

function  AdminPanel(){

    return(
        <Link href="/admin" prefetch={false}><div className="link-button bg-orange-300 ">Admin Panel</div></Link>
    )
}

async function ContentNavbar(){
    const user=await checkUser()
    console.log(user)
        const admin=user?.role==="admin"
    return(
        <>
        
        <div className=' flex items-center justify-center gap-2 md:gap-8'>
                <Link href="/" className='text-3xl text-orange-500  font-weight-700'>Restaurancy</Link>
                {(admin)&& <AdminPanel/>}
            </div>
            <ul className="flex place-items-center gap-4">
                {/*Insertar un icono para ver solo los restaurantes favoritos */}
                {(user)?<> <p>{`Welcome ${user.username}`}</p> <LogOut/></>:<CallAuth/>}
                <ButtonTheme/>
            </ul>
            </>
    )
}


function LogOut(){
    return(
        <Link href="/logout" className='link-button'>Logout</Link>
    )
}