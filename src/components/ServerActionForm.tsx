import { redirect } from "next/navigation"

export default function ServerActionForm({sParams}:{sParams:string}){

    async function searchAction(formData: FormData) {
        'use server'
        /*server action para ejecutar codigo del lado del servidor */
        redirect(`/?q=${formData.get('query')}`);
        }
    return(
        <form action={searchAction} className="inline-flex gap-2 mb-4 m-auto  ">
                <input defaultValue={sParams || ''} className="px-2 dark:bg-slate-600 border-[0.5px] border-slate-300" name="query" />
                <button type="submit" className="p-2 bg-white/20 border border-slate-400  ">Search</button>
            </form>
    )
}