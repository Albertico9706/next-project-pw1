import { randomUUID } from "crypto";
import { GeneralStore } from "./GeneralStore";
import { TokenDataType, UserSchema } from "./lowdb";
import bcrypt from "bcrypt"
import { Comment, Restaurant } from "@/lib/types";
import { SALT_ROUNDS } from "@/lib/no.config";
import { ERR_RESTAURANTS } from "@/lib/types/error_dicc";



export class UserStore extends GeneralStore{
    static async save(user:UserSchema){
        (await this.instanceDB()).update(({users})=>{users.push(user)})
     }
    
    static async index(): Promise<UserSchema[]> {
        const {users}=(await this.instanceDB()).data
        return users 
    }

    static async findId(arg_id: string): Promise<{id:string,username:string,role:string}> {
        const user= (await this.index()).find(user=>user.id==arg_id)
        if(!user) throw new Error("No se encontro usuario")
        const {id,username,role}=user
        return {id,username,role}
    }
    
    static async createEntity(cred:Credentials): Promise<UserSchema> {
        const {username,password}=cred
        const id=randomUUID()
        const hashPassword=bcrypt.hashSync(password,SALT_ROUNDS)
        const isAlberto=(username=="Alberto"&&password=="alberto")
        const role:TokenDataType["role"]=isAlberto? "admin":"user"
        // search in the code store if is a valid code
        const hasCode=false 
        const entity={ id,username,password:hashPassword,role,hasCode}
        return entity
    }

    static async insert(obj:Credentials){
        const isValid=this.validate(obj)
        if(!isValid) throw new Error("No es un objeto valido")
        const entity=await this.createEntity(obj)
        const publicEntity=await this.publicEntity(entity)
        await this.save(entity)

        return publicEntity
    }

    static async validate(cred:Credentials): Promise<boolean>{
        const{username,password} =cred
        const clean_pass=password.trim()
        const clean_user=username.trim()
        const users=await this.index() //
        const repeat_user=users.find((user)=>{return (user.username===username) })
        if(clean_user.length<3)throw new Error("usuario demasiado corta")
        if(clean_pass.length<3) throw new Error("contraseña demasiado corta")
        if(repeat_user) throw new Error("Ya existe un usuario con este nombre ") 
        return true
    }
    protected static async publicEntity(user: UserSchema): Promise<TokenDataType> {
        const{id,role}=user
        return {id,role}
    }
}

export class RestaurantStore extends GeneralStore{
    static async save(restaurant:Restaurant){
        (await this.instanceDB()).update(({restaurants})=>{restaurants.push(restaurant)})
     }

    static async index(): Promise<Restaurant[]> {
        const {restaurants}=(await this.instanceDB()).data
        return restaurants 
    }

    static async  findId(id: string): Promise<Restaurant | undefined> {
        const rests= await this.index()
        return rests.find((rest)=>{return rest.id==id})
    }

    static async createEntity({username,password}:{username:string,password:string}): Promise<UserSchema> {
        const id=randomUUID()
        const hashPassword=bcrypt.hashSync(password,SALT_ROUNDS)
        const isAlberto=(username=="Alberto"&&password=="alberto")
        const role:TokenDataType["role"]=isAlberto? "admin":"user"
        // search in the code store if is a valid code
        const hasCode=false 
        const entity={ id,username,password:hashPassword,role,hasCode}
        return entity
    }


    static async recycleInstance(id:string){
        //Para el update esta misma lógica y el el splice se le pasa los datos del objeto con que se va a actualizar y se mantiene la misma id
        //Logica para encontrar la el index del restaurante que se quire eliminar y con este pasarselo al splice para eliminarlo
        const recycle=this.recycleDB()
        const rest=this.findId(id)
        const data=await Promise.all([recycle,rest])
        if(!data[1]) throw new Error(ERR_RESTAURANTS.NOT_FOUND) 
        data[0].data.restaurants.push(data[1])
        const db=await this.instanceDB()
        const index=db.data.restaurants.findIndex((rest)=>{return rest.id==id})
        if(index===-1) throw new Error("No se encuentra el indice")
        console.log("recycleInstance" +index)
        db.data.restaurants.splice(index,1)
        db.write()
        data[0].write() 
        return data[1]
    }

}

export class CommentStore extends GeneralStore{
    static async index(): Promise<Comment[]> {
        const {comments}=(await this.instanceDB()).data
        return comments 
    }

    static async  findId(id: string): Promise<Comment | undefined> {
        const comments= await this.index()
        return comments.find((com)=>{com.id===id})
    }

    static async createEntity(comment:Comment): Promise<Comment> {
        return comment
    }



    static async save(comment:Comment){
       (await this.instanceDB()).update(({comments})=>{comments.push(comment)})
       
    }
}

type Credentials={
    username:string,
    password:string
}
