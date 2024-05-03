import logo from './logo.svg';
import './App.css';
// import Clock from './02/Clock';
import Mydiv from './03/Mydiv';
import { HiMiniHome } from "react-icons/hi2";

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-green-200 text-emerald-800'>
        <p className='text-xl'>React training</p>
        <p className='text-5xl'>K-digital</p>
        <p className='text-3xl'><HiMiniHome /></p>
      </header>
       <main className='grow'>
        main
       </main>
       <footer className='flex justify-between items-center text-white bg-emerald-900 h-20'>
        footer
       </footer>
    </div>
  );
}

export default App;
