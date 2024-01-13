import React from 'react'

function App() {
  return (
    <>
      <div className='h-1 bg-blue-600' />
      <div className='body'>
        <nav className='bg-rose-400 flex '>
          <div className='text-2xl text-white px-5 py-7 font-bold'>Kalvium</div>
          <div className='flex justify-between w-full items-center'>
            <div className='px-5 py-7 text-green-200 text-lg'>
              <a>About Us</a>
              <a className=' ml-10'>Contacts</a>
              <a className=' ml-10'>Courses</a>
            </div>
            <button className='h-10 px-5 mr-5 font-semibold border text-white rounded'>Login</button>
          </div>
        </nav>
        <button className='bg-blue-500 font-semibold rounded text-white px-4 py-2 text-lg ml-40 mt-5'>Button One</button>
        <div className='ml-40 mt-5 border w-4/5 py-4 px-5 rounded bg-rose-200 text-rose-700 text-lg font-semibold border-red-400'><span className='font-bold'>Alert! </span>This is awesome!</div>
        <div>
          <div className=' px-10 w-96 py-5 flex items-center items-center mx-auto mt-32 shadow-lg'>
            <div><img className='w-14 h-16 mr-5' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" /></div>
            <div className='block '>
              <div className='font-semibold text-2xl rounded'>Kalvium Store</div>
              <div className='font-semibold text-gray-600'>You have a new course!</div></div>
          </div>
        </div>

        <div className='bg-gray-200 py-5 text-gray-700 py-4 mt-48 content-center text-lg text-center font-semibold '>
        &copy; 2021 Copyright:Kalvium
        </div>
      </div>
    </>
  )
}

export default App