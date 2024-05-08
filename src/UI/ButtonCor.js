

export default function ButtonCor({caption, bcolor, handleClick}) {
    const colorB ={
        'emerald' : 'bg-emerald-200',
        'orange' : 'bg-orange-200'
    }

    const colorBHover ={
        'emerald' : 'hover:bg-emerald-600',
        'orange' : 'hover:bg-orange-600'
    }

  return (
    <button className= {`inline-flex px-10 py-3 justify-center items-center 
                        rounded-md text-black
                        font-bold ${colorB[bcolor]} ${colorBHover[bcolor]}`} 
            onClick={handleClick}>
      
      {caption}
    </button>
  )
}
