import RecoilDiv2 from "./RecoilDiv2"
import { AtomN,AtomN2 } from "./AtomN"
import { useRecoilValue, useRecoilState } from "recoil"
import { useEffect } from "react"

export default function RecoilDiv1() {
    const [n,setN] = useRecoilState(AtomN) 
    // const n = useRecoilValue(AtomN) > 이걸 그대로 살리고 아톰에서 localStorage.getItem("n")을 사용할수도 잇ㅁ음
    const n2 = useRecoilValue(AtomN2)

    useEffect(()=>{      // local에 저장한 내용을 새로고침했을 때 가져오는것.
        if(!localStorage.getItem("n")) return
        setN(parseInt(localStorage.getItem("n"))) 
    },[])
  return (
    <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
     RecoilDiv1 : n = {n}, n2 = {n2}
     <RecoilDiv2 />
    </div>
  )
}
