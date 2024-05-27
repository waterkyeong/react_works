import logo from './logo.svg';
import './App.css';
import { HiMiniHome } from "react-icons/hi2";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Clock from './02/Clock';
import Clock from './02 copy/Clock';
import Mydiv from './03/Mydiv';
import Mylist from './04/Mylist';
import Lotto from './05/Lotto';
import Box from './06/Box';
import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import TrafficM from './08 _1/TrafficM';
import MyRdf from './09/MyRdf';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
// import RouteMain from './12/RouteMain';
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';
import Hi from './extra/Hi';
import RecoilMain from './14/RecoilMain';
import Rest from './15/Rest';

function App() {
  return (
    <BrowserRouter>
    
      <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-green-200 text-emerald-800'>
          <p className='text-xl'>React</p>
          <div>

          <ul className='flex text-sm font-bold'>
            <li className='m-2 p-2'>      
              <Link to='/clock'>시계</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/lang'>언어</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/lotto'>로또</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/boxoffice'>박스오피스</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/fbank'>푸드뱅크</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/accident'>교통사고사건</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/tour'>관광</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/plus'>함수</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/festival'>부산축제</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/climate'>단기예보</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/recoil'>recoil</Link>
            </li>
            <li className='m-2 p-2'>      
              <Link to='/rest'>rest</Link>
            </li>
          </ul>
          </div>
          <p className='text-3xl'><Link to='/'><HiMiniHome /></Link></p>
        </header>
        <main className='grow flex flex-col justify-center items-center font-bold'>
            {/* <RouteMain/> */}
        <Routes>
            <Route path='/' element={<Hi/>}/>
            <Route path="/clock" element={<Clock/>}/>{/* <Clock/>  */}
            <Route path="/1" element={<Mydiv/>}/>{/*<Mydiv/>*/}
            <Route path="/lang" element={<Mylist/>}/>{/*<Mylist/> */}
            <Route path="/lotto" element={<Lotto/>}/>{/* <Lotto/>  */}
            <Route path="/boxoffice" element={<Box/>}/>{/* <Box/> */}
            <Route path="/fbank" element={<FoodMain/>}/>{/* <FoodMain/>  */}
            <Route path="/accident" element={<TrafficM/>}/>{/* <TrafficM/> */}
            <Route path="/plus" element={<MyRdf/>}/>{/* <MyRdf/> */}
            <Route path="/tour" element={<Gallery/>}/>{/* <Gallery/> */}
            <Route path="/festival" element={<Festival/>}/>{/* <Festival/> */}
            <Route path="/climate" element={<Frcst/>}/>
            <Route path="/climatelist" element={<FrcstList/>}/>
            <Route path="/recoil" element={<RecoilMain/>}/>
            <Route path="/rest" element={<Rest/>}/>
            
        </Routes> 
        </main>
          <footer className='flex justify-between items-center text-white bg-emerald-900 h-20'>
          footer
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
