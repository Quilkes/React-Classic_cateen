import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col bg-slate-300 overflow-hidden'>
      <div className='relative h-96'>
         <section className='relative bg-slate-400 h-800 w-800 rounded-full right-52 bottom-56'>
          <img className='absolute' src="./img/pics-1.png" alt="" />
          <img className='absolute' src="./img/pics-2.png" alt="" />
          <img className='absolute' src="./img/pics-3.jpeg" alt="" />
          <img className='absolute' src="./img/pics-4.png" alt="" />
        </section>
      </div>

    </main>
  )
}

export default Home
