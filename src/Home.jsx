import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col bg-slate-300'>
      <div className='relative h-96 border'>
        <section className='relative bg-slate-400 h-full w-full rounded-full right-52 bottom-56'>
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