import React from 'react'

import { AiFillSetting ,AiFillHome} from "react-icons/ai";
import { BsFillPersonPlusFill , BsFillPersonLinesFill} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

const Menus = [
  {title:'Home', icon:<AiFillHome/>},
  {title:'Add Customer', icon: <BsFillPersonPlusFill/> },
  {title:'View Customer', icon:<BsFillPersonLinesFill/>},
  {title:'Settings', icon:<AiFillSetting/>},
  {title:'Logout', icon:<BiLogIn/>},
]

function Sidebar() {
  return (
    <div className='w-72 bg-slate-400 h-screen p-5 pt-8'>
      <h1 className='font-extrabold '>sidebar</h1>
      <ul className='pt-6 mt-10 space-y-4'>
        {Menus.map(
          (menu,index)=>(
            <li key={index} className='text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2 flex rounded-md'>
              <span className='float-left text-xl'>{menu.icon}</span>
              <span>{menu.title}</span>
            </li>
          )
          )}
      </ul>
    </div>
  )
}

export default Sidebar