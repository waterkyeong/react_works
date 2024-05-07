import Mydiv2 from "./Mydiv2"
//1.useState import
import { useState } from "react";


export default function Mydiv() {
  //2.state변수 선언
  const [n, setN] = useState(0);
  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  let cnt = 0;

  const handleCount = ()=> {
    cnt = cnt +1;
    setN(n+1);
    console.log("handleCount = ", cnt);
  }

  return (
    <div className="h-5/6 w-10/12 flex flex-col justify-center items-center m-50 p-3 bg-emerald-100 text-3xl text-green-700">
      <div className="w-full h-20 border-4 border-white flex justify-end items-end">
        <span className="inline-flex p-3" onClick={handleCount}>🌼</span>
        <span className="inline-flex p-3">{n}</span>
      </div>
      <div className="w-full">
        {dname1}
      </div>
    <Mydiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>
    </div>
  )
}
