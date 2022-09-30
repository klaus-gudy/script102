import React from 'react'

function Home() {
  return (
    <div className='p-7 flex-1 h-screen '>
      <h1 className="text-lg text-center font-extrabold mb-7">HOME PAGE FORM</h1>
      <div className='mt-5 md:col-span-2 md:mt-0'>
      <form className="mt-4  h-[80%] ">
        <div className='sm:rounded-md overflow-hidden'>
          <div className='bg-white px-4 py-5 sm:p-6'>
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Date</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Branch</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Account number</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Acount Holder</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Deposit/Withdraw</label>
                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>----choose an option----</option>
                    <option>Withdraw</option>
                    <option>Deposit</option>
                  </select>
                </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Currency</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Transaction No</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Teller ID</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Customer Name</label>
                <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'></input>
              </div>
              <div className='col-span-6 sm:col-span-3'>
              <label className='block text-sm font-medium text-gray-700'>Signature</label>
              <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                <div className='space-y-1 text-center'>
                <p class="text-xs text-gray-500">sahihi ya mteja</p>
                </div>
              </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>
          </div>
        </div>
      </form>
      </div>

    </div>
  );
}

export default Home