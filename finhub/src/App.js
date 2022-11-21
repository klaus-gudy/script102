import React from 'react';
import Sidebar from './components/Sidebar';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import { CourseLayout } from './CourseLayout';
import Forum from './pages/Forum';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Lecture from './pages/Lecture';
import Pastpapers from './pages/Pastpapers';
import Book from './pages/Book';
import Header from './components/Header';

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-slate-300 flex-1'>
        <div className='p-7 bg-slate-400 ml-1'>
        <Header/>
        </div>
        <div className='px-7 py-3 bg-slate-200 ml-1 '>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/courses/*' element={ <CourseLayout/>} >
            <Route path='lectures' element={ <Lecture/> }/>
            <Route path='books' element={ <Book/> }/>
            <Route path='pastpapers' element={ <Pastpapers/> }/>
          </Route>
          <Route path='/forum' element={ <Forum/> }/>
          <Route path='/settings' element={ <Settings/> }/>
          <Route path='/logout' element={ <Logout/> }/>
        </Routes>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
// {/* <div className='flex flex-col w-full px-5'>
//         <label
//           className='text-xl'
//           htmlFor="fname">{label}</label>
//         <input className='border-2 rounded border-gray-600 h-11 text-xl px-2' type={type} name="fname" id="fname" placeholder={placeholder} required />
//     </div> */}

