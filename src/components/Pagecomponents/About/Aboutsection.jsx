import React from 'react'

export default function Aboutsection() {
 
  return (
   <div >
  <div className='relative  h-100 w-full bg-[#312E81] mt-20'>
   <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
        About HireHub
        </h1>

        <p className="text-xl max-w-2xl text-[#9DA3AF]">
        Founded in 2022, HireHub is the modern job board connecting exceptional talent with industry-leading companies worldwide.
        </p>
        <div className="flex gap-4 mt-6">
      <button className="bg-[#45738c] text-white px-6 py-2 rounded-lg hover:bg-[#365d71] transition">
        Learn More
      </button>

      <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
        Contact Us
      </button>
    </div>
      </div>
   
       
      </div>
   
   </div>

 
  )
}
