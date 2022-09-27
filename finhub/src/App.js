import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='p-7   bg-slate-300 flex-1 h-screen '>
        <h1 className='text-lg font-extrabold mb-7'>CREATE A NEW CUSTOMER</h1>
        <form className='mt-4 bg-stone-600 flex flex-row  justify-around p-16 h-[80%] '>
          <div className='flex flex-col bg-stone-400 justify-around p-7'>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
          </div>
          <div className='flex flex-col bg-stone-400 justify-around p-7'>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
            <div className='flex flex-row'>
            <label>password</label>
            <input type='text'></input>
            </div>
          </div>
        </form>
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