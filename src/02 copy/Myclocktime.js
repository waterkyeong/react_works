import './Myclocktime.css';
import style from './My.module.css';
import { useState, useEffect } from 'react';

function Myclocktime (){
    const [ctime, setCTime] = useState(new Date);

    useEffect(()=>{
        const tm = setInterval(()=>{
            setCTime(new Date())
        },1000);

        return()=>{
            clearInterval(tm);
        }
        },[]);

        return(
            <>   
              {<p className='p1'>♾</p>} 
         
              <div className={style.c1}>{ctime.toLocaleTimeString()}</div>
            </>
            );
        }

export default Myclocktime;