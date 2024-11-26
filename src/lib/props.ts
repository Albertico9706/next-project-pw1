

export interface InputsProps{

    title:string
    name:string
    type?:"text"|"number"|"password"
}

export interface RestaurantInterfaceInput{
    id?:number
    name:string,
    address:string,
    description:string,
    score:number,
    ratings:number,
    image:string
}

const user_props_inputs :InputsProps[]=[
    {title:"Nombre de usuario",name:"username"},
    {title:"Contraseña",name:"password", type:"password" }]

const rest_comments_props_inputs :InputsProps[]=[
    {title:"ID del usuario",name:"user_id",type:"number"},
    {title:"ID del restaurant",name:"res_id",type:"number"},
    {title:"Contenido",name:"content"}]

const restaurants_props_inputs:InputsProps[]=[
    {title:"Nombre del restaurant ",name:"name"},
    {title:"Direccion",name:"address" },
    {title:"Descripccion",name:"description" },
    {title:"Votos",name:"score", type:"number" },
    {title:"Valoracion",name:"ratings", type:"number" },
    {title:"Image Url",name:"image" }]

    export {user_props_inputs,rest_comments_props_inputs,restaurants_props_inputs}