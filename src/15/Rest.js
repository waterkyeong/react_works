import { useEffect,useState } from "react"

export default function Rest() {
    const [tdata,setTdata] = useState()
    const [tags, setTags] = useState()

    const getFetch = async (url)=>{
        const resp = await fetch(url)
        const data = await resp.json()
        setTdata(data)
        // console.log(data)
    }

    useEffect(()=>{
        let url = 'http://localhost:3005/posts'
        // console.log(url)
        getFetch(url)
    },[])

    useEffect(()=>{
        console.log(tdata)
        if(!tdata) return
        let tm = tdata.map(item=> item.title)
        tm = tm[0]
        console.log(tm)
        tm = [...tm]
        // tm = tm.map()
        setTags(tm)

    }, [tdata]);
  return (
    <div>
      {tags}
    </div>
  )
}
