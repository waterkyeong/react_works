import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


export default function Gallery() {
    // const imgUrl = ''
    // const title = '태종대유원지'
    // const content = '부산광역시 영도구 동삼동'
    // const spTags = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교'
    // // const spTag = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교'
    const [gdata,setGdata] = useState()
    const [cards, setCards] = useState()


    // data fetch
    const getFetchData = (url)=>{
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setGdata(data.response.body.items.item)
            })
        
    }
    //컴포넌트 생성시
    useEffect(()=>{
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`
        console.log(url)
        getFetchData(url)
    },[])
    
    //gdata 만들어질때
    useEffect(()=>{
        if(!gdata) return
        console.log(gdata)

        let tm = gdata.map(item=> <GalleryCard key={item.galContentId} imgUrl={item.galWebImageUrl} title={item.galTitle} content={item.galPhotographyLocation} spTag={item.galSearchKeyword}/> )

        setCards(tm)
    },[gdata])
       
    // 내가 시도
    // const getFetchImg = (img)=>{
    //     fetch(img)
    //         .then(resp => resp.json)
    //         .then(data => setIdata(data))
    //         .catch(err => console.log(err))
    // }
    // useEffect(()=>{
    //     let img = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`

    //     console.log(img)
    //     getFetchImg(img)
    // },[])
 
  return (
    <div className="w-11/12 h-full flex flex-col justify-start items-center">
      <div className="w-full h=full flex justify-center items-center">
        <input type="d"/>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gdata && cards}
      </div>
    </div>
  )
}
