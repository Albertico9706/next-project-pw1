import { TokenDataType } from "@/store/lowdb"
import jwt, { JwtPayload } from "jsonwebtoken"
import { SECRET_JWT_KEY } from "../no.config"

export class SessionUtils{

    static async  decryptToken(token:string){
    const data=jwt.verify(token,SECRET_JWT_KEY)
    if(typeof data==="string") throw new Error()
    return data as TokenDataType & JwtPayload
    
    }

    static async isValidLogin(){
        
    }
}