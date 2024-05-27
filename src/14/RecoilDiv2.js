import RecoilDiv3 from "./RecoilDiv3";
import { AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {
    const n2 = useRecoilValue(AtomN2)
  return (
    <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
     RecoilDiv2 : n2= {n2}
     <RecoilDiv3/>
    </div>
  )
}
