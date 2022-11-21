import { Link, Outlet } from "react-router-dom";

export function CourseLayout(){
    return(
        <>
        <Link className="text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2  rounded-md" to='lectures'>lecture</Link>
        <Link className="text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2  rounded-md" to='books'>book</Link>
        <Link className="text-sm cursor-pointer hover:bg-slate-300 items-center gap-x-4 p-2  rounded-md" to='pastpapers'>pastpapers</Link>
        <Outlet/>
        </>
    )
}