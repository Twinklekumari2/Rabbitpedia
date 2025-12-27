import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center mt-8'>
      <div className='mt-6 flex-col justify-center items-center gap-2 p-4'>
         <div className='text-7xl text-center font-bold'>
          <h1>Because</h1>
          <h1>Every Rabbit</h1>
          <h1>Deserves the best care</h1>
         </div>
         <div className='text-center mt-5'>
           <p className='text-2xl'>From Beginning guides to expert care tips, <span>RabbitPedia</span> helps you raise a happy, healthy rabbit with care.</p>
         </div>
         <div className='flex justify-around items-center mt-10'>
            <button className='bg-black px-4 py-2 text-white font-bold cursor-pointer'>Explore Rabbit care</button>
            <button className='bg-black px-4 py-2 text-white font-bold cursor-pointer'>Learn before you Adopt</button>
         </div>
      </div>
    </div>
  )
}

export default HeroSection