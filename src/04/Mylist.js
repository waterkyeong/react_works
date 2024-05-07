import MylistData from "./MyListData.json";
import Mylistitem from "./Mylistitem";


export default function Mylist() {
    console.log(MylistData)

    const tags = MylistData.map(item => <Mylistitem key = {item.title} title = {item.title} imgUrl = {item.imgUrl} content = {item.content}/>)
    return (
    <div className="w-full grid grid-cols-2 gap-4">
        {tags}
    </div>
  )
}
