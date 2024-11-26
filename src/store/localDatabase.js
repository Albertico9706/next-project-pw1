/* import { randomUUID } from "crypto"
import dbLocal from "db-local"
import bcrypt from "bcrypt"
import { SALT_ROUNDS } from "@/lib/no.config"

const {Schema}=new dbLocal({path: "./db"})



const UserSchema= Schema("User",
    { _id:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:"user"||"super"||"admin",required:true},
    hasCode:{type:Boolean,required:true}
}
)

export class UserStore{

    static create({username,password}){
        const user=UserSchema.findOne(username)
        if(user) return new Error("Ya existe un usuario con este nombre ") 
        const id=randomUUID()
        const hashPassword=bcrypt.hashSync(password,SALT_ROUNDS)
        const isAlberto=(username=="Alberto"&&password=="alberto")
        const role=isAlberto? "admin":"user"
        // search in the code store if is a valid code
        const hasCode=false 

         
        UserSchema.create({
            _id:id,
            username,
            password:hashPassword,
            role,
            hasCode
        }).save()

        return id
    }

    static async login({username,password}){
        const user=UserSchema.findOne({username})
        if(!user) throw new Error("Error al iniciar sesion")
        try {
            const isValid=await bcrypt.compare(password,user.password)
            if(!isValid) throw new Error() 
            const {id,role}=user
        return {id,role}
        //with the data of the return can doit the sesion token for the user
        } catch (error) {
            throw new Error("Error iniciando sesion")
        }
        
    }
    static async getRole(id){
        const user=UserSchema.findOne(id)
        if(!user) throw new Error("El usuario no se encuentra en la base de datos")
        return user.role 
    }

} */