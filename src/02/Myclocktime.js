import './Myclocktime.css';
import style from './My.module.css';

function Myclocktime (){
    const now = new Date();
    const nowStr = now.toLocaleTimeString();
    const gubun = nowStr.substring(0,2);
    const st = {color: "skyblue", fontWeight: "bold"}
    // let divStyle;
    // if(gubun == '오전')divStyle = "div1";
    // else divStyle = "div2"
    return(
        <>
        {/* <div className={divStyle}> {nowStr} </div> */}
        {<p className='p1'>♾</p>} 
        {/* {
            gubun == '오전' ? <div className="div1"> {nowStr} </div>
                            : <div className="div2"> {nowStr} </div>
        } */}
        {/* <div className={gubun === '오전' ? "div1" : "div2"}>{nowStr}</div>         */}
        {/* <div style={{color: "skyblue", fontWeight: "bold"}}>{nowStr}</div> */}
        {/* <div style={st}>{nowStr}</div> */}
        <div className={style.c1}>{nowStr}</div>
        </>
    );
}

export default Myclocktime;