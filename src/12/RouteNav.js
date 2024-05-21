import { useNavigate } from 'react-router-dom'
import ButtonCor from '../UI/ButtonCor'

export default function RouteNav() {
    const navigate = useNavigate()
  return (
    <div className='w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      <ButtonCor caption='Home' bcolor='emerald' handleClick={()=>{navigate('/')}}/>
      <ButtonCor caption='Page1' bcolor='emerald' handleClick={()=>{navigate('p1/1')}}/>
      <ButtonCor caption='Page2' bcolor='emerald' handleClick={()=>{navigate('p2/2')}}/>
    </div>
  )
}
