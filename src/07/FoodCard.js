import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import fooddata from './fooddata.json'
import ButtonCor from '../UI/ButtonCor'
import { useState } from 'react'

export default function FoodCard({data}) {
    // const card = fooddata.map(item => <div key={item.팩스번호} >
    //                                     <h1>{item.사업장명}</h1> 
    //                                     <h2>{item.운영주체명}</h2> 
    //                                     <h3>{item['사업장 소재지']}</h3>
    //                                         </div>)
    const [isShow, setIsShow] = useState(false)
    const handleShow = ()=>{
        console.log(isShow)
        setIsShow(!isShow)
    }
    // const data = {
    //                 "구분": "광역지원센터",
    //                 "시군구": "부산시",
    //                 "사업장명": "부산광역푸드뱅크",
    //                 "신고기준": "당연",
    //                 "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //                 "연락처(대표번호)": "051-791-1377",
    //                 "팩스번호": "051-714-3096",
    //                 "운영주체 분류": "1. 사회복지법인",
    //                 "운영주체명": "부산광역시사회복지협의회"
    //              }



 return (
    <div className='w-10/12 h-100 flex border-2 border-green-900 rounded-md'>
        <div className='w-1/3 h-full flex justify-center items-center'>
            <img src={data.구분 === '광역지원센터' ? busan : data.구분 === '기초푸드뱅크' ? bank : market}/>
        </div>
        <div className='w=2/3 h-full m-3 flex flex-col justify-center items-center text-slate-950'>
          <div>
            <h1 className='text-xl'>{data["사업장명"]}</h1>
            <h2 className='text-base'>{data["운영주체명"]}</h2>
            <p className='text-xs'>{data["사업장 소재지"]}</p>
          </div>
          <div className='w-full h-7 m-3 bg-green-950 rounded-md'
                onClick={handleShow}>
            {isShow &&<p className='text-sm my-1 text-teal-100'>Tel. {data['연락처(대표번호)']}</p>}
          </div>
        </div>
    </div>
  )
}
