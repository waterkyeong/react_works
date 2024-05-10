import fooddata from './fooddata.json'
import ButtonCor from '../UI/ButtonCor'
import FoodCard from './FoodCard';
import { useEffect, useState } from 'react';

export default function FoodMain() {
    const [card, setCard] = useState([])
    let c1 = fooddata.map(item => item['운영주체 분류'])
    c1 = new Set(c1);
    c1 = [...c1];
    console.log("c1", c1)

    const handleC1 = (c)=>{
        console.log(c)
        let tm = fooddata.filter(item => item['운영주체 분류'] == c).map(item=> <FoodCard data = {item} key={item.사업장명}/>)
        
        setCard(tm)
        console.log(tm)

    }
 
    const c1bts = c1.map(item => <ButtonCor key={item} caption={item} bcolor={'emerald'} handleClick={()=>{handleC1(item)}}/>);
    // const card = fooddata.map(item => <FoodCard key={item.사업장명} data={item}/>)

    return (
    <div className='w-11/12 h-full flex flex-col justify-start items-center'>
        <div className='w-full my-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 justify-items-stretch'>
            {c1bts}
        </div>
        <div className='w-11/12 mb-3 grid md:grid-cols-2 gap-4 justify-items-center'>
            {card}
        </div>
    </div>
  )
}
