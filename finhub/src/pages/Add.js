import React from 'react'

function Add() {
  return (
    <div className='p-7 flex-1 h-screen '>
      <h1 className="text-lg font-extrabold mb-7">CREATE A NEW CUSTOMER</h1>
      <form className="mt-4 bg-stone-600 flex flex-row  justify-around p-16 h-[80%] ">
        <div className="flex flex-col bg-stone-400 justify-around p-7">
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="flex flex-col bg-stone-400 justify-around p-7">
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
          <div className="flex flex-row">
            <label>password</label>
            <input type="text"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add