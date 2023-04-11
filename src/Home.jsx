import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col bg-slate-300 overflow-hidden'>
      <div className='relative h-[27.3rem] opacity-95'>
         <section className= 'bg-slate-400 relative  h-[800px] w-[800px] rounded-full left-[-530px] top-[-57vh]'>
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
