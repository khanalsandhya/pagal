import React from 'react'

export default function Herosection() {
  return (
    <div className=" relative top-0 h-screen w-full">
      <img
        src="https://images.unsplash.com/photo-1778084708647-9ee26217bb9e?q=80&w=2832&auto=format&fit=crop"
        alt="Barber"
        className="w-full h-full object-cover"
      />
      <div className='absolute flex top-0 h-full w-full'>
        <div className=" flex absolute z-50 h-full w-full  flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            All about BarberKraft
          </h1>

          <p className="text-xl max-w-2xl">
            Brooklyn's trusted barbershop since 2011. Classic craftsmanship,
            modern style.
          </p>
        </div>
        <div className='absolute bg-black/50 h-full w-full z-0 top-0'></div>
      </div>
    </div>
  )
}