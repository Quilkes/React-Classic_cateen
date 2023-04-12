import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col bg-color-radient overflow-hidden'>
      <div className='relative h-96 opacity-95'>
         <section className= 'bg-color relative  h-[350px] w-[350px] rounded-full left-[-170px] top-[-145px]'>
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
