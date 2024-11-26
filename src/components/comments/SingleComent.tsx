import { Comment } from "@/lib/types"

export default function SingleComent({com}:{com:Comment}){

    return(
        <div className="flex-col flex h-[fit-content] rounded-md p-2 m-auto gap-3  bg-orange-300 border border-black w-72 ">
            <span className="self-start">{com.user_id}</span>
            <p className="opacity-90 px-2">{com.content}</p>
            <span className="self-end">{com.restaurant_id}</span>
        </div>
    )
}