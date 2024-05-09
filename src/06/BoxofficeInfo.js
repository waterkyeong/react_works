import React from 'react'

export default function BoxofficeInfo({selMv}) {
    console.log("BoxofficeInfo",selMv)
  return (
    <div className='w-11/12 flex justify-center items-center h-14 bg-teal-950 text-green-500 text-xl'>
      [{selMv.movieCd}-{selMv.movieNm}] 개봉일 : {selMv.openDt}<span className= {selMv.rankOldAndNew == 'OLD' ? 'text-emerald-200' : 'text-lime-200'}> {selMv.rankOldAndNew} </span>
    </div>
  )
}