import ButtonCor from "../UI/ButtonCor"


export default function RecoilDiv3({n,setN,n2}) {
    const handleUp = ()=>{
       setN(n+1)
    }
    const handleDown = ()=>{
       setN(n-1)
    }
    
    return (
      <div className="w-full flex flex-col justify-center items-center text-2xl font-bold">
       <div>
       RecoilDiv3 : n = {n}, n2 = {n2}
       </div>
        <div className="w-full flex justify-evenly items-center m-1">
            <ButtonCor caption="increase" bcolor="emerald" handleClick={handleUp}/>
            <ButtonCor caption="decrease" bcolor="emerald" handleClick={handleDown}/>
        </div>
      </div>
    )
  }
