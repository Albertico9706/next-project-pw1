import { defaultData } from "./lowdb"
import { JSONFilePreset } from "lowdb/node"

export const SRC_DATABASES="src/store/databases/"
interface EntityWithId{
    id:string
}

export abstract class GeneralStore{
    static async instanceDB(){
        const db= (await JSONFilePreset(`${SRC_DATABASES}userlow.json`,defaultData))
    return db}

    protected static async search(id:string){
        const table=await this.index() as EntityWithId[]
        return table.find((ent=>ent.id=id))
    }

    static async save(obj:Object){
        console.log(obj)
        throw new Error("Method not implemented.");
    }
    
    static async insert(obj:Object){
        const isValid=this.validate(obj)
        if(!isValid) throw new Error("No es un objeto valido")
        const entity=await this.createEntity(obj)
        const publicEntity=await this.publicEntity(entity)
        await this.save(entity)

        return publicEntity
    }

    static async findId(id:string){
        return await this.search(id)
    }
    
    static async index():Promise<Object[]>{
        throw new Error("Method not implemented.");
    }

    protected static async createEntity(obj:Object):Promise<Object>{
        console.log(obj)
      throw new Error("Method not implemented.");
    }

    protected static async publicEntity(obj:Object){
        return obj
    }

    protected static async validate(obj:Object){
        console.log(obj)
        return true
    }

    static async  recycleDB(){
        "use server"
        const db= (await JSONFilePreset(`${SRC_DATABASES}recycle.json`,defaultData))
        await db.read()
        await db.write()
    return db}



}


export async function recycleDB(){
    "use server"
    const db= (await JSONFilePreset(`${SRC_DATABASES}recycle.json`,defaultData))
    await db.read()
    db.data.restaurants
    await db.write()
return db}