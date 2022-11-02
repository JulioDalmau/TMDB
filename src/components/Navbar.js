import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex  items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-700 font-bold text-7xl cursor-pointer'>STARBURST</h1>
        <div className='text-white'>
            <button className='bg-neutral-700 font-semibold px-6 py-2 rounded cursor-pointer'>SIGN IN</button>
            <button className='bg-neutral-700 font-semibold px-6 py-2 rounded cursor-pointer mx-1'>SIGN UP</button>
        </div>
    </div>
  )
}
