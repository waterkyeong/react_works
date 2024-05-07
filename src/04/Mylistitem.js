import { useState } from "react";

export default function Mylistitem({title, imgUrl, content}) {
    const [n, setN] = useState(0);
    let cnt = 0;

    const handleCount = ()=> {
        cnt = cnt +1;
        setN(n+1);
        console.log("handleCount = ", cnt);
      }
  
    return (
    <div className="flex w-full justify-center items-start rounded-md border-lime-800 border-2">
      <div className="flex justify-center items-center w-1/3 m-5">
      <img src={imgUrl} alt={title}/>
      </div>
      <div className="flex flex-col justify-between w-2/3 h-full m-1 p-7">
        <div>   
          <h1>{title}</h1>
         <p>{content}</p>
        </div>
        <div className=" flex justify-end items-center" >
            <span onClick={handleCount}>💚</span>
            <span className="inline-flex mx-2 font-bold">좋아요</span>
            <span>{n}</span>

        </div>
        </div>
    </div>
   
  )
}
