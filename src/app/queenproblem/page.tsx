export default function Page(){
    return(<div className="w-full h-full flex">
        <Tablero/>

    </div>)
}

function Tablero(){
    return(
        <div className=" flex mx-auto border border-black items-center mt-8 focus:*:*:bg-blue-300  active:*:*:bg-blue-300 *:*:w-12 *:*:h-12 *:*:block even:*:odd:*:bg-black odd:*:even:*:bg-black">
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            <div><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" /></div>
            </div>
    )
}