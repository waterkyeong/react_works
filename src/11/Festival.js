import { useEffect, useRef, useState } from "react"
import TailSelect from "../UI/TailSelect"
import GalleryCard from "../10/GalleryCard"

export default function Festival() {
    const [data, setData] = useState()
    const [cards, setCards] = useState()
    const [ops, setOps] = useState() //축제 구 정보
    const selRef = useRef()

    const getFetchData = (url)=>{
        fetch(url)
            .then(resp => resp.json())
            .then(data => {setData(data.getFestivalKr.item)})
            .catch(err => console.log(err))
    }

    const handleGuSelect = ()=>{
        console.log(selRef.current.value)
        let tm = data.filter(item => item.GUGUN_NM == selRef.current.value)
                    .map(item=><GalleryCard key={item.UC_SEQ} 
                                        imgUrl={item.MAIN_IMG_NORMAL} 
                                        title={item.TITLE} 
                                        content={item.TRFC_INFO} 
                                        spTag={item.USAGE_DAY_WEEK_AND_TIME} />)        
        setCards(tm)
    }

    useEffect(()=>{
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
        url = url + `&pageNo=1&numOfRows=37&resultType=json`
        console.log(url)
        getFetchData(url)
    },[])

    
    useEffect(()=>{
        if(!data) return
        let tm = data.map(item => item.GUGUN_NM)
        tm = [...new Set(tm)].sort()
        setOps(tm)
    },[data])
    
    // useEffect(()=>{
    //     if (!data) return
    //     console.log(data)
    //     let tm = data.filter(item.GUGUN_NM == selRef.current.value).map(<GalleryCard key={item.UC_SEQ} imgUrl={item.MAIN_IMG_NORMAL} title={item.TITLE} content={item.TRFC_INFO} spTag={item.USAGE_DAY_WEEK_AND_TIME}/>)
    //     // let tm = data.map(item => <GalleryCard key={item.UC_SEQ} imgUrl={item.MAIN_IMG_NORMAL} title={item.TITLE} content={item.TRFC_INFO} spTag={item.USAGE_DAY_WEEK_AND_TIME}/>)
        
    //     setCards(tm)
    // },[data])

  return (
    <div>
    <div className="flex flex-col justify-center items-center m-2 p-2">
    <p className="m-5 text-5xl font-bold">부산축제정보</p>
    <form>
    {ops && <TailSelect id="op" ops={ops} selRef={selRef} iniText="----부산 지역구 선택" handleChange={handleGuSelect} />}
    </form>
    </div>
    <div className="w-11/12 m-2 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data && cards}
    </div>
    </div>
  )
}
