import CloseModal from "./CloseModal"
import ShowModalD from "./ShowModalD"



export default function ModalUsers(){
    return( 
    <div>
        <ShowModalD className="btn btn-primary">Open Modal</ShowModalD>
        <dialog className="modal" role="dialog" id="create">
            <div className="modal-box">
                    <CloseModal/>
                <form method="Post" className="flex flex-col [&_input]:input [&label]:label"> 
                <h3 className="text-lg font-bold">Registro de Usuario</h3>
                <legend>Create User</legend>
                    <label htmlFor="name" className="" >Usuario</label>
                    <input type="text" name="name" id="name"  />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password" id="password"/>
                    <input type="submit" value="" className="btn btn-md btn-primary" />
                </form>
            </div>
        </dialog>
    </div>)
}




