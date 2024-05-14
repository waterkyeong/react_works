import React, { useEffect, useState } from 'react'
import ButtonCor from '../UI/ButtonCor'

export default function TrafficMain() {
  const [tdata, setTdata] = useState([])  // 전체 fetch데이터
  const [c1,setC1] = useState()           //대분류
  const [c1Tag, setC1Tag] = useState()   //대분류 버튼
  const [c1Sel, setC1Sel] = useState()   // 선택된 대분류
  
  const [c2,setC2] = useState()           //중분류
  const [c2Tag, setC2Tag] = useState()    //중분류 버튼
  const [c2Sel, setC2Sel] = useState()    //선택된 중분류
  
  const [info, setInfo] = useState()    //선택된 상세자료
  
  //대분류를 선택할 때 실행
  const handleC1Select = (itme) =>{
    setC1Sel(itme)
  }
 
  //중분류를 선택할 때 실행
  const handleC2Select = (itme) =>{
    setC1Sel(itme)
  }

  // fetch 함수로 데이터 가져오기
  const getFetchData = (url) =>{
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
  }
  
  // 컴포넌트 생성시 한번 실행
  useEffect(()=>{
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url=`${url}page=1&perPage=17&`
    url=`${url}serviceKey=${process.env.REACT_APP_API_KEY}`
    
    console.log(url)
    getFetchData(url)
    },[])

    // tdata가 변경이 되면 실행
    useEffect(()=>{
      if (tdata.length == 0) return;
      
      console.log('tdata=',tdata)
      let tm = tdata.map(item => item['사고유형_대분류'])
      tm = [...new Set(tm)]

      setC1(tm)
    },[tdata])

    //대분류 생성 후 
    useEffect(()=>{
      if(!c1) return;
      console.log("c1 = ",c1)
      let tm = c1.map((item) => <ButtonCor key={item} caption={item} bcolor={'emerald'} handleClick={()=>handleC1Select(item)}/>)
      setC1Tag(tm)
    },[c1])
    
    //대분류 선택 => 중분류
    useEffect(()=>{
      console.log('대분류 선택 = ', c1Sel)
      let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel).map(item => item['사고유형_중분류'])
      
      console.log(tm)
      setC2(tm)
    },[c1Sel])
    
    //중분류 만들어졌을 때
    useEffect(()=>{
      if(!c2) return;
      console.log('c2 =',c2)

      let tm = c2.map((item) => <ButtonCor key={item} caption={item} bcolor={'emerald'} handleClick={()=>handleC2Select(item)} className="p-10"/>)

      setC2Tag(tm)
    },[c2])

    //중분류 선택 => 상세정보
    useEffect(()=>{
      console.log('대분류 선택 = ', c1Sel)
      console.log('중분류 선택 = ', c2Sel)

      let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel && item['사고유형_중분류'] === c2Sel)
      
      tm = tm[0]
      console.log("상세",tm)
      setInfo(tm['사고건수'])

    },[c2Sel])
    

    
  return (
    <div className='w-10/12 h-full flex flex-col justify-start items-start '>
      <div className='w-full flex justify-between items-center my-10'>
        <div className='w-1/4'>교통사고 대분류</div>
        <div className='w-3/4 flex justify-between'>
          {c1Tag}
        </div>

      </div>
      <div className='w-full flex justify-between items-center my-10'>
        <div className='w-1/4'>교통사고 중분류</div>
        <div className='w-3/4 flex justify-between items-center text-sm'>
          {c2Tag}
        </div>

      </div>
      <div className='w-full flex justify-between items-center my-10'>
          {parseInt(info).toLocaleString()}
      </div>
    </div>
  )
}
