import { useState } from "react"
import ButtonCor from "../UI/ButtonCor"


export default function TrafficNav({title, c, sel, setSel}) {
    // const title = '대분류'
    // const c = ['차대사람','차대차','차랑단독','철길건널목']
    // const [sel, setSel] = useState()
    const cTag = c.map((item) => <ButtonCor key={item} caption={item} bcolor={sel == item ? 'dark_emerald':'emerald'} handleClick={()=>handleClick(item)}/>)
    const handleClick = (item)=>{
      // console.log(item)
      setSel(item)
    }



  return (
    <div className="w-full flex justify-start items-center my-5">
      <div className="w-2/12 flex justify-center items-center">
        교통사고 {title}
      </div>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cTag}
      </div>
    </div>
  )
}
