import React from 'react'
import {Link} from "react-router-dom";

import { AiFillSetting ,AiFillHome} from "react-icons/ai";
import { BsFillPersonPlusFill , BsFillPersonLinesFill} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

const Menus = [
  {title:'Home', icon:<AiFillHome/>, link:'/'},
  {title:'Add Customer', icon: <BsFillPersonPlusFill/> , link:'/add'},
  {title:'View Customer', icon:<BsFillPersonLinesFill/>, link:'/customers'},
  {title:'Settings', icon:<AiFillSetting/>, link:'/settings'},
  {title:'Logout', icon:<BiLogIn/>, link:'/logout'},
]

function Sidebar() {
  return (
    <div className='w-72 bg-slate-400 p-5 min-h-screen pt-8'>
      <h1 className='font-extrabold '>sidebar</h1>
      <ul className='pt-6 mt-10 space-y-4'>
      {Menus.map(
        (menu,index)=>(
          <Link key={index} to={menu.link}  className='text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2 flex rounded-md'>
            <span className='float-left text-xl'>{menu.icon}</span>
            <span>{menu.title}</span>
          </Link>
        )
      )}
      </ul>
    </div>
  )
}

export default Sidebar