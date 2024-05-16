import TrafficNav from './TrafficNav'
import { useState, useEffect } from 'react'

export default function TrafficM() {
    const [tdata, setTdata] = useState()  // fetch 데이터

    const [c1,setC1]= useState()       // 대분류 데이터
    const [selC1, setSelC1]=useState() // 선택된 데이터

    const [c2, setC2] = useState()
    const [selC2, setSelC2] = useState()

    const [info, setInfo] = useState()


    // 사용자 정의함수
        const getFetchData =(url)=>{
            fetch(url)
                .then(resp => resp.json())
                .then(data => setTdata(data.data))
                .catch(err => console.log(err))

        }
    // 컴포넌트 생성시
    useEffect(()=>{
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url=`${url}page=1&perPage=17&`
        url=`${url}serviceKey=${process.env.REACT_APP_API_KEY}`

        console.log(url)
        getFetchData(url)
    },[])

    // tdata 변경될때
    useEffect(()=>{
        if(!tdata) return
        let tm = tdata.map((item)=> item['사고유형_대분류'])
        tm = [...new Set(tm)]
        setC1(tm)

        console.log(tdata)
    },[tdata])

    //대분류가 생성이 되면
    useEffect(()=>{
        if (!tdata || ! c1) return
        console.log(c1)
    },[c1])

    // 대분류를 선택하면 => c2 생성
    useEffect(()=>{
        if (!tdata || !c1 || !selC1) return
        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1).map(item => item['사고유형_중분류'])
        setC2(tm)
        setInfo(" ")
        console.log(selC1)
    },[selC1])
    
    // 중분류가 선택되면
    useEffect(()=>{
        if (!tdata || !c1 || !selC1 || !selC2) return
        console.log('대분류',selC1,'중분류',selC2)
        let tm = tdata.filter(item => item['사고유형_대분류'] ===selC1 && item['사고유형_중분류'] === selC2 )

        tm = tm[0] // object
        console.log('상세',tm)
        const infoKey = ['사고건수', '사망자수', '중상자수','경상자수', '부상신고자수']
        tm = infoKey.map(item => <div key= {item} className='flex flex-col'> 
                                    <div className=' flex justify-center items-center bg-teal-800 text-lime-400'>{item}</div>
                                    <div className='flex justify-center items-center bg-lime-200 text-teal-900'>{tm[item]}</div>
                                </div>)

        setInfo(tm)
    },[selC2])

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='w-full flex justify-center items-center'>
        {c1 && <TrafficNav title='대분류' c={c1} sel={selC1} setSel={setSelC1}/>}
      </div>
      <div className='w-full flex justify-center items-center'>
        {c2 && <TrafficNav title='중분류' c={c2} sel={selC2} setSel={setSelC2}/>}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
        {info}
      </div>
    </div>
  )
}
