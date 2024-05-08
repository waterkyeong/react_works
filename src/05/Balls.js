

export default function Balls({n}) {

    const colorN ={
      'b0' : 'bg-teal-200',
      'b1' : 'bg-teal-300',
      'b2' : 'bg-teal-400',
      'b3' : 'bg-teal-500',
      'b4' : 'bg-teal-600'
    }

  return (
    <div className={`inline-flex w-16 h-16 rounded-full justify-center items-center text-lg font-bold ${colorN["b"+ Math.floor(n/10)]} text-white`}>
      {n}
    </div>
  )
}
