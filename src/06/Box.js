import boxoffice from "./BoxOffice.json"

export default function Box() {
    const dailyList = boxoffice.boxOfficeResult.dailyBoxOfficeList;
    const title = dailyList.map(item => <li key={item.movieCd}> 
                                            {item.rank}. {item.movieNm}
                                        </li>)
      return (
    <div>
        <ul>
            {title}
        </ul>
    </div>
  )
}
