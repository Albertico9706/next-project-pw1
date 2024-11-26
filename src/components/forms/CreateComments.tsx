"use client"


export default function CreateCommentsInputs(){

    return(
            <>
            <label htmlFor="">Usuario ID</label><input name="user_id" id="user_id" type="text" />
            <label htmlFor="">Restaurante ID</label><input name="restaurant_id" id="restaurant_id" type="text" />
            <label htmlFor="">Contenido</label><input name="content" id="content" type="text" />
            </>
    )
}