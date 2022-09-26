import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <h1 className='p-7 text-lg font-extrabold bg-slate-300 flex-1 h-screen'>home page</h1>
    </div>
  );
}

export default App;
