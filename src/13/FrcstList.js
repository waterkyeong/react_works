import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import getcode from "./getcode.json"
import { useSearchParams } from "react-router-dom"
import TailSelect from "../UI/TailSelect"

export default function FrcstList() {
    // url 전달값
    const [sparams] = useSearchParams()
    const gubun = sparams.get('gubun')
    const x = sparams.get('x')
    const y = sparams.get('y')
    const dt = sparams.get('dt')
    const area = sparams.get('area')

    console.log("list", gubun, x, y, dt, area)

    const [ops, setOps] = useState([])
    const [tdata, setTdata] = useState() // 예보정보
    const [selItem, setSelItem] = useState() // 선택한 항목 코드 정보
    const [tags, setTags] = useState()       // 화면 tr 생성

    const ref = useRef()

    const sky = { "1": '맑음', "3": "구름많음", "4": "흐림" }
    const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" }

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => { setTdata(data.response.body.items.item) })
            .catch(err => console.log(err))
    }
    const handleSelect = () => {
        console.log(ref.current.value)
        let tm = getcode.filter(item => (gubun == '단기' ? item["예보구분"] == "단기예보" : item["예보구분"] == "초단기예보")
            && item.항목명 == ref.current.value)
        // console.log(tm)
        setSelItem(tm[0])
    }


    useEffect(() => {
        //항목 select
        let tm = getcode.filter(item => gubun == '단기' ? item.예보구분 == "단기예보" : item.예보구분 == "초단기예보").map(item => item.항목명)
        console.log(tm)
        setOps(tm)

        let url
        if (gubun == '초단기') {
            url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
            url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=json`
            url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
        }
        else {
            url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
            url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=json`
            url = url + `&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
        }
        getFetchData(url)

    }, [])
    useEffect(() => {
        console.log(tdata)
    }, [tdata])

    useEffect(() => {
        if (!selItem || !tdata) return;

        console.log(selItem)

        let tm = tdata.filter(item => item["category"] == selItem["항목값"])
            .map(item =>
                <tr key={`${item["fcstDate"]}${item["fcstTime"]}`}>
                    <th scope="col" className="px-6 py-3">{selItem["항목명"]}({item.category})</th>
                    <th scope="col" className="px-6 py-3">{`${item["fcstDate"].substring(0, 4)}-${item["fcstDate"].substring(4, 6)}-${item["fcstDate"].substring(6, 8)}`}</th>
                    <th scope="col" className="px-6 py-3">{`${item["fcstTime"].substring(0, 2)}:${item["fcstTime"].substring(2, 4)}`}</th>
                    <th scope="col" className="px-6 py-3">{item["category"] == 'SKY' ? sky[item["fcstValue"]] : item["category"] == 'PTY' ? pty[item["fcstValue"]] :
                        `${item["fcstValue"]} ${selItem.단위}`}</th>
                </tr>)

        console.log(tm)
        setTags(tm)
    }, [selItem])

    return (
        <div className="w-11/12 flex flex-col justify-start items-center ">
            <div className="w-full flex m-5">
                <div className="w-2/4 flex justify-center items-center text-xl font-bold">
                    <Link to='/pclimate'>  {dt} {area} {gubun}예보</Link>
                </div>
                <div className="w-2/4 flex justify-center items-center">
                    <TailSelect id="pc" ops={ops} selRef={ref} iniText="항목선택" handleChange={handleSelect} />
                </div>
            </div>
            <table className="w-11/12 text-sm font-light">

                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr className="bg-teal-900 text-green-300">
                        <th scope="col" className="px-6 py-3 text-center">항목명</th>
                        <th scope="col" className="px-6 py-3 text-center">예측일자</th>
                        <th scope="col" className="px-6 py-3 text-center">예측시간</th>
                        <th scope="col" className="px-6 py-3 text-center">항목값</th>
                    </tr>
                </thead>
                <tbody>
                    {tags}
                </tbody>
            </table>
        </div>
    )
}
