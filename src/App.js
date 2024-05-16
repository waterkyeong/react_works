import logo from './logo.svg';
import './App.css';
import { HiMiniHome } from "react-icons/hi2";
// import Clock from './02/Clock';
// import Clock from './02 copy/Clock';
// import Mydiv from './03/Mydiv';
// import Mylist from './04/Mylist';
// import Lotto from './05/Lotto';
// import Box from './06/Box';
// import FoodMain from './07/FoodMain';
// import TrafficMain from './08/TrafficMain';
// import TrafficM from './08 _1/TrafficM';
import MyRdf from './09/MyRdf';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-green-200 text-emerald-800'>
        <p className='text-xl'>React</p>
        <p className='text-5xl'>K-digital</p>
        <p className='text-3xl'><HiMiniHome /></p>
      </header>
       <main className='grow flex flex-col justify-center items-center font-bold'>
          {/* <Clock/>  */}
          {/* <Mydiv/> */}
          {/* <Mylist/> */}
          {/* <Lotto/>  */}
          {/* <Box/> */}
          {/* <FoodMain/>  */}
          {/* <TrafficMain/> */}
          {/* <TrafficM/> */}
          <MyRdf/>
       </main>
       <footer className='flex justify-between items-center text-white bg-emerald-900 h-20'>
        footer
       </footer>
    </div>
  );
}

export default App;
