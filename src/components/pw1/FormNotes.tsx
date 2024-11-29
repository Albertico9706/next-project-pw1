export default function FormNotes(){
    

    return(<div className="">
        <form   className=" dark:bg-slate-700 p-8 py-4  max-w-md mx-auto disabled has:invalid:bg-red-500 shadow shadow-neutral-500">

        <legend className="text-3xl py-4"><h1>Iniciar Sesión</h1></legend>
        <div className="flex flex-col">
                <label className="">User:</label> 
                <input required className=" input-primary peer" minLength={3}  name="username" id="username" type="text" />
                <small  className="text-xs peer-invalid:text-red-600 ">Al menos 3 caracteres</small>
                <label className=""  >Password:</label>
                <input  minLength={4} className="peer" name="password" id="password" type="password"/>
                <small  className="text-xs peer-invalid:text-red-600 ">Al menos 4 caracteres</small>
                <button data-tooltip={"hello"} className="btn-primary tooltip peer-invalid:btn-disabled peer-invalid:btn-error btn p-1.5 mt-8 ">Iniciar</button>
                <div className="flex flex-col place-items-center p-1  ">
                    <a className="anchor" href="/sign_in">Inicia sesion aqui</a>
                    <a className="anchor" href="/forget_password">Recupera tu contraseña</a>
                </div>
        </div>
    </form>
    </div>)
}