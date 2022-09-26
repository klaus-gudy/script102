import React from 'react'

import { AiFillHome } from "react-icons/ai";

const Menus = [
  {title:'Home', src:'home'},
  {title:'Add Customer', src:'home'},
  {title:'View Customer', src:'home'},
  {title:'Settings', src:'home'},
  {title:'Logout', src:'home'},
]

function Sidebar() {
  return (
    <div className='w-72 bg-slate-400 h-screen p-5 pt-8'>
      <h1 className='font-extrabold '>sidebar</h1>
      <ul className='pt-6'>
        {Menus.map(
          (menu,index)=>(
            <li key={index} className='text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2 flex rounded-md'>
              <span className='float-left text-xl block'><AiFillHome/></span>
              <span>{menu.title}</span>
            </li>
          )
          )}
      </ul>
    </div>
  )
}

export default Sidebar