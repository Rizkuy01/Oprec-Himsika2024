import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto pb-6'>
        <div className="max-h-[500px] relative">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods </span>Recomendation</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1495130656884-992a9f30d178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=803D%3D&auto=format&fit=crop&w=2070&q=80" alt="geprek" />
        </div>
    </div>
  )
}

export default Hero