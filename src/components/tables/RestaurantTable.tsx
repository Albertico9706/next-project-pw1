import { serveRestaurants } from "@/lib/serverActions/serverData"
import { Restaurant } from "@/lib/types";
import {Row} from "./Table";
const restaurants=serveRestaurants()


export default async function RestaurantTable(){
    return(
        <table className="" >
            <tbody>
            <RestaurantTableHeader/>
            {(await restaurants).map((rest,index)=>{return( <RestaurantRow index={index}  key={rest.id} rest={rest} />)})}
            </tbody>
              </table>
    )
}

function RestaurantRow({rest,index}:{rest:Restaurant,index:number}){
const skey=String(rest.id)

    return(
        <Row id={rest.id} key={rest.id} >
        <td>{index}</td>
        <td key={skey+"1"}>{rest.id}</td>
        <td key={skey+"2"}>{rest.name}</td>
        <td key={skey+"3"}>{rest.description}</td>
        <td key={skey+"4"}>{rest.address}</td>
        <td key={skey+"5"}>{rest.image}</td>
        </Row>)
        
}

function RestaurantTableHeader(){
    return(
        <tr key="restaurants">
            <th key="1" >#</th>
            <th key="2">Id</th>
            <th key="3">Name</th>
            <th key="4">Description</th>
            <th key="5">Address</th>
            <th key="6">ImageUrl</th>
        </tr>
    )
}