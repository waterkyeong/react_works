import Myclock from "./Myclock";
import Myclocktime from "./Myclocktime";

function Clock(){
    return(
        <>
        <header className="App-header">
            <Myclock/>
            <Myclocktime/>
        </header>
        </>
    )
}

export default Clock;