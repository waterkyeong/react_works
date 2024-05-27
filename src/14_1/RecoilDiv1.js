import { useEffect, useState, } from "react"
import RecoilDiv2 from "./RecoilDiv2"

export default function RecoilDiv1() {
    const [n,setN] = useState(0)
    const [n2,setN2] = useState()
    
    useEffect(()=>{
        setN2(n*2)
    },[n])
  return (
    <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
     RecoilDiv1 : n = {n}
     <RecoilDiv2 num = {n} setN={setN} num2 = {n2}/>
    </div>
  )
}
