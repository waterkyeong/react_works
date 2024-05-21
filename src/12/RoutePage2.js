import { useSearchParams, useLocation } from "react-router-dom"
export default function RoutePage2() {
    const fruits = ['🍎','🍑','🍌']

    // const loc = useLocation()                    url 경로와 주소를 뽑아낼수있는 또다른 방법
    // console.log(loc.pathname, loc.search)

    const [sParams] = useSearchParams()
    const item = sParams.get('item')

    // 키값 목록
    const queryList = [...sParams]
    console.log(queryList)
    const k = queryList.map(item => item[0])
    console.log(k)

    let tm = []
    sParams.forEach(item => fruits.includes(item) ? 
                            tm.push(`${item} : 과일`) : tm.push(`${item} : 과일아님`))


    return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <h1 className="w-full flex justify-center items-center text=2xl font-bold">
        Page2
      </h1>
      <div >
        {/* {fruits.includes(item) ? `${item} : 과일입니다.` : `${item} : 과일이 아닙니다.`} */}
        {tm.join(',')}
      </div>
    </div>
  )
}
