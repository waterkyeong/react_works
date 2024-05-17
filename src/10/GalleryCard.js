

export default function GalleryCard({imgUrl, title, content, spTag}) {
    const spTags = (spTag.includes(',') ? spTag.split(',') : [spTag])
                    .map(item => 
                        <span key={item} 
                              className="inline-flex items-center rounded-2xl border border-transparent m-1 bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                                {item}
                        </span>
                    )
    console.log('sptags',spTags)
  return (
    <>
    <div className="p-8 max-w-sm border border-teal-300 rounded-2xl hover:shadow-xl hover:shadow-teal-50 flex flex-col items-center">
    {/* <img className="shadow rounded-lg overflow-hidden border" src={imgUrl.replace('http://','https://')} /> */ /*//이게 안되면 밑에거 사용*/}
    <img className="shadow rounded-lg overflow-hidden border" src={imgUrl.includes('http:')? imgUrl.replace('http://','https://'): imgUrl} />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="mt-2 text-gray-600">{content}</p>
        <div className="mt-5">
           {spTags} 
        </div>
    </div>
    </div>
  </>
  )
}
