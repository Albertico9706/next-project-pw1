import { serveComments } from "@/lib/serverActions/serverData"
import {Comment} from "@/lib/types"
import {Row} from "./Table";
const comments=serveComments()


export default async function CommentTable(){
    return(
        <table>
            <CommentHeader/>
            {(await comments).map((comment,index)=>{return( <CommentRow index={index} key={comment.id} comment={comment} />)})}
        </table>
    )
}

function CommentRow({comment,index}:{comment:Comment,index:number}){
const skey=String(comment.id)

    return(
        <Row id={comment.id} key={comment.id}>
        <td>{index}</td>
        <td key={skey+"1"}>{comment.id}</td>
        <td key={skey+"2"}>{comment.restaurant_id}</td>
        <td key={skey+"3"}>{comment.user_id}</td>
        <td key={skey+"4"}>{comment.content}</td>
        </Row>)
        
}

function CommentHeader(){
    return <tr className="text-center">
    <td>#</td>
    <td>Id</td>
    <td>RestauranteID</td>
    <td>UsuarioID</td>
    <td>Comentario</td>
</tr>
}