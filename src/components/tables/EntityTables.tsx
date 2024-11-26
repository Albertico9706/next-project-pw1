import RestaurantTable from "./RestaurantTable"
import UserTable from "./UserTable"
import CommentTable from "./CommentTable"

export default function EntityTables({currentUrl}:{currentUrl:string}){
    const user=currentUrl==="users"
    const restaurant=currentUrl==="restaurants"
    const commnent=currentUrl==="rest_comments"

    return(
        <div className="dark:text-white">
        {restaurant&& <RestaurantTable/>}
        {user&&<UserTable/>}
        {commnent&&<CommentTable/>}
        </div>
    )
}