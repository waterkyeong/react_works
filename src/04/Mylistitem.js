import { useState,useEffect } from "react"; //state는 상태만 보는것, effect는 효과를 주는것

export default function Mylistitem({title, imgUrl, content}) {
    const [cnt, setCnt] = useState(0);
    

    const handleCount = ()=> {
        setCnt(cnt+1);
      }

    // useEffect(()=>{}); 콜백함수(()=>{})는 무조건 들어가야하고 들어가는 함수는 두개가 될 수도 있다. 이건 컴포넌트 생성 시 최초 한번만 실행
    useEffect(()=>{
      console.log(title, '생성')
    },[]); 
  
    //state 변수가 변경
    useEffect(()=>{
      console.log(title, '변경 cnt = ', cnt)
    },[cnt])

    //컴포넌트가 변경되면 항상 실행
    useEffect(()=>{
      console.log(title,'변경됨')
    })

    return (
    <div className="flex w-full justify-center items-start rounded-md bg-green-50 border-lime-800 border-2">
      <div className="flex justify-center items-center w-1/3 m-5">
      <img src={imgUrl} alt={title}/>
      </div>
      <div className="flex flex-col justify-between w-2/3 h-full m-1 p-3">
        <div>   
          <h1>{title}</h1>
         <p>{content}</p>
        </div>
        <div className=" flex justify-end items-center text-sm" >
            <span onClick={handleCount}>💚</span>
            <span className="inline-flex mx-2 font-bold">좋아요</span>
            <span>{cnt}</span>

        </div>
        </div>
    </div>
   
  )
}
