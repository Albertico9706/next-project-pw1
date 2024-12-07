import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import ModalUsers from "@/components/pw1/ModalUsers"

export default function Users(){
    return(
        <div>
            <UsersList/>
        </div>)
    }
    
    
    async function UsersList(){
        const users=await prisma.user.findMany()
        return(
            <section>
                {users.map((user)=>{ return <SingleUser key={user.id} user={user}/>})}
                <ModalUsers/>
                {/* <CreateUser/> */}
            </section>
        )
    }
    
    function SingleUser({user}:{user:User}){
        return(
            <div>
                <h6><b>User</b>: {user.id}</h6>
                <p><b>Name</b>: {user.name}</p>
                <p><b>Email</b>: {user.email}</p>
            </div>
        )
    }

    /* function CreateUser(){
        return(
            <div className="w-[40%] h-[60%] modal peer-checked:modal-open  mx-auto top-[20%]   ">
                <input type="checkbox" className="top-0 right-0 checkbox-primary modal-toggle" />
                <form  className="w-[40%] h-[60%] flex flex-col [&_input]:input-primary input-info bg-black/20 p-8">
                    <legend>Create User</legend>
                    <label htmlFor="name" className="" >Usuario</label>
                    <input type="text" name="name" id="name"  />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password" id="password"/>
                </form>
            </div>
        )
    } */



