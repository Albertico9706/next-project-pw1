"use client"
import Input from "../ui/Input"
import { Label } from "./WrapperForm"


export default function CreateRestaurantInputs(){


   
    
    return(
            <>
            <Label>Nombre</Label><Input name="name" id="name" type="text"/>
            <Label>Direccion</Label><Input name="address" id="address" type="text" />
            <Label>Image</Label><Input name="image" id="image" type="text" />
            <Label>Ratings</Label><Input name="ratings" id="ratings" type="text" />
            <Label>Score</Label><Input name="score" id="score" type="text" />
            <Label>Description</Label><Input name="description" id="description" type="text" />
            </>
    )
}