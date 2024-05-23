import { Link, useNavigate } from "react-router-dom"
import TailSelect from "../UI/TailSelect"
import ButtonCor from "../UI/ButtonCor"
import { useRef, useState, useEffect } from "react"
import getxy from "./getxy.json"
import TailInput from "../UI/TailInput"

export default function Frcst() {
    const navigate = useNavigate()
    const [nx, setNx] = useState()
    const [ny, setNy] = useState()
    const [ops,setOps] = useState([])
    const [area,setArea] = useState()
    const ref = useRef()
    const inref = useRef()

    const handlePselect = ()=>{
        console.log(ref.current.value)
        let tm =  getxy.filter(item => item["1단계"] == ref.current.value)
        tm = tm[0]
        console.log(tm)
        setNx(tm["격자 X"])
        setNy(tm["격자 Y"])
        setArea(ref.current.value)
    }
    
    const handleUrl = (gubun)=>{
        if(!nx || !ny || !inref.current.value){
            alert('날짜와 지역을 선택하세요')
            return
        }
        navigate(`/pclimatelist?gubun=${gubun}&x=${nx}&y=${ny}&dt=${inref.current.value.replaceAll('-','')}&area=${area}`)
    }
    useEffect(()=>{
        console.log(getxy)
        let tm = getxy.map(item => item["1단계"])
        console.log(tm)
        setOps(tm)
    },[])

    useEffect(()=>{
        console.log('x=', nx, 'y=', ny, 'area=', area, 'dt=', inref.current.value)
    },[])

  return (
    <div className="w-11/12 h-full flex flex-col justify-start items-center m-5">
      <h1>단기예보</h1>
      <div className="w-1/2 flex justify-between items-center m-2">
        <TailInput inRef={inref} type="date" id="dt"/>
        <TailSelect id="pc" ops={ops} selRef={ref} iniText="지역선택" handleChange={handlePselect}/>
     </div>
     <div className="w-1/2 flex justify-between items-center m-2">
        <ButtonCor caption="초단기예보" bcolor='emerald' handleClick={()=>handleUrl('초단기')}/>
        <ButtonCor caption="단기예보" bcolor='emerald' handleClick={()=>handleUrl('단기')}/>
     </div>
    </div>
  )
}
