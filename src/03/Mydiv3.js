

export default function Mydiv3(probs) {
  return (
    <div className="h-5/6 w-10/12 flex flex-col justify-center items-center m-50 p-3 bg-emerald-700 text-3xl text-green-100">
     {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
    </div>
  )
}
