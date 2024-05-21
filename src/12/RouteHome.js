import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <h1 className="w-full flex justify-center items-center text=2xl font-bold">
        Home
      </h1>
      <div className="w-full grid grid-cols-2 m-10">
        <div className="w-full flex flex-col justify-center items-center m-2 p-2 text-xl">
        <h2 className="w-full flex justify-center items-center text-xl font-bold p-2 m-2 bg-teal-100">Page1</h2>
        <ul>
            <li><Link to='/p1/🍎'>사과🍎</Link></li>
            <li><Link to='/p1/🍌'>바나나🍌</Link></li>
            <li><Link to='/p1/🧇'>와플🧇</Link></li>
            <li><Link to='/p1/🍑'>복숭아🍑</Link></li>
        </ul>
        </div>
        <div className="w-full flex flex-col justify-center items-center m-2 p-2 text-xl">
        <h2 className="w-full flex justify-center items-center text-xl font-bold p-2 m-2 bg-teal-100">Page2</h2>
        <ul>
            {/* <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
            <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
            <li><Link to='/p2?item=🧇'>와플🧇</Link></li>
            <li><Link to='/p2?item=🍑'>복숭아🍑</Link></li> */}

            <li><Link to= '/p2?item1=🍎&item2=🍌&item3=🍑&item=🧇'>🍎 🍌 🍑 🧇</Link></li>
        </ul>
        </div>
      </div>
    </div>
  )
}
