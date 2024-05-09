import Myclock from "./Myclock";
import Myclocktime from "./Myclocktime";

function Clock(){
    return(
        <>
        <header className="w-full h-full flex flex-col justify-center items-center p-10 bg-sky-950 text-3xl">
            <Myclock/>
            <Myclocktime/>
        </header>
        </>
    )
}

export default Clock;