import Mydiv3 from "./Mydiv3"

export default function Mydiv2(probs) {
  return (
    <div className="h-5/6 w-10/12 flex flex-col justify-center items-center m-50 p-3 bg-green-600 text-3xl text-green-200">
        
      {`${probs.dn1} > ${probs.dn2}`}
    <Mydiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3}/>
    </div>
  )
}
