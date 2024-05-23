import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";

export default function BoxOfficeTbody({dailyList, setSelMv}) {
    console.log(dailyList)
    const handleMvSelect = (mv) =>{
        // console.log("handleMvSelect",mv)
        setSelMv(mv)
    }
    const tags = dailyList.map(item => 
    <tr
        key={item.movieCd}
        onClick={()=>{handleMvSelect(item)}}
          className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-teal-50 dark:border-white/10 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-4">{item.movieNm}</td>
            <td className="whitespace-nowrap px-6 py-4">{parseInt(item.salesAcc).toLocaleString()}</td>
            <td className="whitespace-nowrap px-6 py-4">{parseInt(item.audiAcc).toLocaleString()}</td>
            <td className="whitespace-nowrap px-6 py-4 text-xl flex justify-center items-center font-bold">
                                                                                                                <span>{item.rankInten > 0 ? <TiArrowUpThick className=" text-lime-500"/> : item.rankInten< 0 ? <TiArrowDownThick className=" text-emerald-500" /> : '-'}</span> 
                                                                                                                <span>{item.rankInten !=0 && Math.abs(item.rankInten)}</span> </td>
    </tr>
    )
  return (
    <tbody>
         {tags}
    </tbody>
  )
}
