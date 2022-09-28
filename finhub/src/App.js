import React from 'react';
import Sidebar from './components/Sidebar';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import Customers from './pages/Customers';
import Settings from './pages/Settings';

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='p-7   bg-slate-300 flex-1'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/add' element={ <Add/> }/>
          <Route path='/customers' element={ <Customers/> }/>
          <Route path='/settings' element={ <Settings/> }/>
        </Routes>
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

