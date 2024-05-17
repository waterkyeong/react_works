import boxoffice from "./BoxOffice.json"
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxofficeInfo from "./BoxofficeInfo";
import { useState, useEffect } from "react";

export default function Box() {
  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  
  useEffect(()=>{
    setDailyList(boxoffice.boxOfficeResult.dailyBoxOfficeList);
    },[]);

    useEffect(()=>{
      setSelMv(dailyList[0]);
      },[dailyList]);

    // const title = dailyList.map(item => <li key={item.movieCd}> 
    //                                         {item.rank}. {item.movieNm}.{item.salesAmt}.{item.audiAcc}.{item.salesInten}
    //                                     </li>)

      return (
    <div className="w-full h-full m-5">
      <div className="w-full flex  flex-col justify-center items-center">
         <table
          className="w-11/12 text-left text-sm font-light text-surface dark:text-white">
            <BoxOfficeThead/>
            <BoxOfficeTbody dailyList={dailyList} setSelMv={setSelMv}/>
         </table>
            {selMv  && <BoxofficeInfo selMv={selMv}/>}
        </div>
    </div>
  )
}
