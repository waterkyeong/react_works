// import boxoffice from "./BoxOffice.json"
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxofficeInfo from "./BoxofficeInfo";
import { useState, useEffect, useRef } from "react";

export default function Box() {
  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef()  // 0517 update

  //데이터 가져오기
  const getFetchData = (url)=>{
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }

  //날짜가 선택 되었을때 
  const handleSelect = (e) => {
    e.preventDefault()
    console.log(selDate.current.value) //ref변수 사용시
    console.log(e.target.value)       //ref변수 사용하지 않을때

    // https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240516
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url + `key=${process.env.REACT_APP_MV_KEY}`
    url = url + `&targetDt=${selDate.current.value.replaceAll('-', '')}`

    console.log(url)
    getFetchData(url)
  }



  // useEffect(() => {
  //   setDailyList(boxoffice.boxOfficeResult.dailyBoxOfficeList);
  // }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList]);

  // const title = dailyList.map(item => <li key={item.movieCd}> 
  //                                         {item.rank}. {item.movieNm}.{item.salesAmt}.{item.audiAcc}.{item.salesInten}
  //                                     </li>)

  return (
    <div className="w-full h-full m-5">
      <div className="w-full flex  flex-col justify-center items-center">
        <form className="w-11/12 flex justify-end items-center">
          <div className="w-11/12 mb-5 flex justify-end items-center">
            <label htmlFor="dateId">날짜선택</label>
            <input type="date" id="dateId" 
                              ref={selDate} 
                              onChange={handleSelect} 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </form>
        <table
          className="w-11/12 text-left text-sm font-light text-surface dark:text-white">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList={dailyList} setSelMv={setSelMv} />
        </table>
        {selMv && <BoxofficeInfo selMv={selMv} />}
      </div>
    </div>
  )
}
