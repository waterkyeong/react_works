import ButtonCor from "../UI/ButtonCor"
import Balls from "./Balls"
import { useState } from "react"


export default function Lotto() {   
    const [tags, setTags] = useState();

    const handleOk = () =>{
        let arr = [];

        while(arr.length<7){
            let n = Math.floor(Math.random()*45)+1;

            if(!arr.includes(n))arr.push(n)
        }
        let tag = arr.map(item => <Balls n={item} key={item}/>)

        tag.splice(6,0,<span className="text-2xl mx-2" key="sp">+</span>).sort((p, c) => p - c)
        // console.log(tags)

        setTags(tag);
    }
  return (
    <div className="flex flex-col w-5/6 h-5/6 justify-center items-center border-2 rounded-md border-green-700">
        <div className=" flex justify-between items-center w-2/3 h-2/3">
            {tags}
        </div>
        <div>
            <ButtonCor caption={'START'} bcolor={'emerald'} handleClick={handleOk}/>
        </div>        
    </div>
    
  )
}
