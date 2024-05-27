import ButtonCor from "../UI/ButtonCor"
import { AtomN } from "./AtomN"
import { useRecoilState } from "recoil"

export default function RecoilDiv3() {
    const [n,setN] = useRecoilState(AtomN)
    const handleUp = ()=>{
      setN(n + 1)
    }
    const handleDown = ()=>{
        setN(n - 1)
    }
    const handleSave = ()=>{
        localStorage.setItem("n",n)
    }
    const handleDel = ()=>{
        localStorage.removeItem("n")
        setN(0)
    }
    
    return (
      <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
       <div>
       RecoilDiv3 : n = {n}
       </div>
        <div className="w-full flex justify-center items-center">
            <ButtonCor caption="increase" bcolor="emerald" handleClick={handleUp}/>
            <ButtonCor caption="decrease" bcolor="emerald" handleClick={handleDown}/>
            <ButtonCor caption="local 저장" bcolor="emerald" handleClick={handleSave}/>
            <ButtonCor caption="local 삭제" bcolor="emerald" handleClick={handleDel}/>
        </div>
      </div>
    )
  }
