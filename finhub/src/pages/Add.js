import React from 'react'

function Add() {
  return (
    <div className="p-7 flex-1 h-screen ">
      <h1 className="text-lg text-center font-bold mb-7">ADD CUSTOMER</h1>
      <div className='flex  items-center justify-center  px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8  bg-white rounded-lg px-12 block'>
        <form className='mt-8 space-y-6'>
          <div>
          <input type="text" placeholder="First name" className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
          </div>
          <div>
          <input type="text" placeholder="last name" className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
          </div>
          <div>
          <input type="email" placeholder="email" className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
          </div>
          <div>
          <input type="password" placeholder="password" className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
          </div>
          <div class=" py-3 ">
              <button type="submit" class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Customer</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Add