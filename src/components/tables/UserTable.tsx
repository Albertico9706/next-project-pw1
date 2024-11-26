import { serveUsers } from "@/lib/serverActions/serverData"
import { UserSchema } from "@/store/lowdb";
import {Row} from "./Table";

const users=serveUsers()


export default async function UserTable(){
    return(
        <table>
            <UserTableHeader/>
            {(await users).map((user,index)=>{return( <UserRow index={index} key={user.id} user={user} />)})}
        </table>
    )
}

function UserRow({user,index}:{user:UserSchema,index:number}){
const skey=String(user.id)

    return(
        <Row id={user.id} key={user.id}>
        <td>{index}</td>
        <td key={skey+"1"}>{user.id}</td>
        <td key={skey+"2"}>{user.username}</td>
        <td key={skey+"3"}>{user.password}</td>
        <td key={skey+"4"}>{user.role}</td>
        <td key={skey+"5"}>{user.hasCode}</td>
        </Row>)
        
}

function UserTableHeader(){
    return <tr className="text-center">
    <td>#</td>
    <td>Id</td>
    <td>Usuario</td>
    <td>Contarseña</td>
    <td>Rol</td>
    <td>Tiene codigo</td>
</tr>
}