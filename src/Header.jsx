import React from 'react'

const Header = () => {
    return (
        <header className='h-16 bg-gradient-to-r from-gray-300 to-gray-400 z-50 sticky top-0 opacity-95'>
            <section className='flex justify-between align-middle flex-row-reverse p-4 '>
                <div></div>
                <h1 className='text-white font-bold font-sans text-lg tracking-widest'> <span className='text-purple-700'>Brytr</span> <span className='font-mono'>Kitchen</span></h1>

                <button className='relative outline-none h-8 w-11 flex justify-center items-center'>
                    <div className='absolute h-1 w-8 bg-slate-950 rounded '></div>
                </button>

            </section>

            {/* <nav className=''>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our Menu</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header

<div className=" h-20"></div>
