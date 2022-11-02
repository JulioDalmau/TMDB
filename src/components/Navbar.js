import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-700 font-bold text-4xl md:text-6xl cursor-pointer'>STARBURST</h1>
        <div>
            <button className='text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer mx-2'>Sign in</button>
            <button className='text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer'>SIGN UP</button>
        </div>
    </div>
  )
}
