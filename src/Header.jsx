import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <section className='header-section'>
                <div></div>
                <h1 className='text-white font-bold font-sans text-xl tracking-widest'> <span className='text-purple-700'>Brytr</span> <span className='font-mono'>Kitchen</span></h1>

                <button className='menuBtn'>
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
