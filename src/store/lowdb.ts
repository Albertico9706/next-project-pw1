import { Comment, Restaurant } from "@/lib/types";
import {UUID } from "crypto";

 export const defaultData:Data={
    users:[],
    restaurants:[],
    comments:[],
    reservations:[]
}

interface Reservation {
    id:string,
    restaurant_id:string,
    user_id:string,
    date:Date
    tables:number

}

export type DataSchema=UserSchema|Restaurant|Comment|Reservation
type Data={
    users:UserSchema[]
    restaurants:Restaurant[],
    comments:Comment[],
    reservations:Reservation[]
}
//type DataTable=Data[ keyof Data]
 export interface EntityBD{}


export interface UserSchema extends EntityBD{
    id:UUID
    username:string,
    password:string,
    role:"admin"|"super"|"user",
    hasCode:boolean
}
export type TokenDataType={id: UserSchema["id"],role:UserSchema["role"]}





 


