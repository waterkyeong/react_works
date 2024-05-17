import { useState, useEffect, useRef } from "react"
import ButtonCor from "../UI/ButtonCor"

export default function MyRdf() {
    let cVal = 0
    const [sVal, setSVal] = useState(0)
    const rVal = useRef(0)

    const x1 = useRef()
    const x2 = useRef()
    const x3 = useRef()

    //컴포넌트 변수 증가
    const handleClickComp=()=>{
        cVal ++
        console.log("cVal = ", cVal)
    }
    const handleClickState=()=>{
        setSVal(sVal+1)
    }
    const handleClickRef=()=>{
        rVal.current = rVal.current+1
        console.log('rval = ', rVal)
    }   
    const handleClick=()=>{
        if(!x1.current.value){
            alert('값을 입력하시오')
            x1.current.focus()
            return
        }
        if(!x2.current.value){
            alert('값을 입력하시오')
            x2.current.focus()
            return
        }
        console.log(x1.current.value)
        console.log(x2.current.value)

        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value)
    }
 
    //변수 변경시
    useEffect(()=>{
        console.log("sVal =", sVal)
    },[sVal])
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-20 p-5 m-5 font-bold text-lg'>
        <span className='text-indigo-500'>컴포넌트 변수 : {cVal} </span>
        <span className='mx-5'>state 변수 : {sVal}</span>
        <span className="">ref 변수 : {rVal.current}</span>
      </div>
      <div>
        <span><ButtonCor caption={'컴포넌트 변수'} bcolor={'emerald'} handleClick={handleClickComp}/> </span>
        <span><ButtonCor caption={'state 변수'} bcolor={'emerald'} handleClick={handleClickState}/> </span>
        <span><ButtonCor caption={'ref 변수'} bcolor={'emerald'} handleClick={handleClickRef}/> </span>
      </div>
      <div className="w-4/5 grid grid-cols-5 gap-2 m-10 p-10 bg-teal-100">
        <input type="number" id="txt1" ref={x1} className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        <span className="inline-flex justify-center items-center">+</span>
        <input type="number" id="txt2" ref={x2} className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <ButtonCor caption="=" bcolor='emerald' handleClick={handleClick}/>
        <input type="number" id="txt3" ref={x3} className="text-center" readOnly/>
      </div>
    </div>
  )
}
