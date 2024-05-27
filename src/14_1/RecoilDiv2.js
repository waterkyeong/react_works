import RecoilDiv3 from "./RecoilDiv3";


export default function RecoilDiv2({num,setN,num2}) {
    
  return (
    <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
     RecoilDiv2 : n2={num2}
     <RecoilDiv3 n= {num} setN={setN} n2={num2}/>
    </div>
  )
}
