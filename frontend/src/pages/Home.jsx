import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center ">
      <div className='w-full h-full'>
        <img src="/Screenshot_2025-01-05-20-47-14-434_com.ubercab.jpg" className='' alt="" />
      </div>
      <div className='px-2 flex justify-center flex-col items-center'>
        <h1 className='mt-5 text-3xl self-start ms-4 font-bold'>Get started with Uber</h1>
        <Link to='/login' className='flex mt-3 font-bold bg-black text-white w-11/12 justify-center py-3 rounded'>Continue</Link>
      </div>
    </div>
  );
}

export default Home