import React from 'react'
import { MdOutlineStarOutline } from "react-icons/md";

export default function Seventh() {
  return (
    <div>

      <div className="bg-[#1F2329] h-screen mt-5">
        <div className=" flex  flex-col justify-center items-center py-10  ml-5">
          <div className=" w-30 bg-[#1A1B4A] border  rounded-2xl  flex justify-center item-center mt-5 mb-4  text-white p-2">
            <p >our feature</p>

          </div>
          <p className='text-2xl text-white font-serif mt-3'>Your Path to Success</p>
          <p className='text-white  mt-5 font-extralight justify-center text-center'>
            Hear from job seekers and employers who found their perfect match on HireHub.
          </p>
        </div>
        <div className="flex justify-center gap-5 mt-5">
  {/* Card 1 */}
  <div className="bg-[#ebe6e2] w-100 p-5 rounded-2xl border text-white h-70">
    <div className="flex mt-3">
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
    </div>

    <p className="mt-3 ">
      "The platform made my career transition from finance to tech seamless.
      The personalized recommendations were spot-on and helped me land a role
      I love."
    </p>
    <p className='border-t mt-5 pt-3 text-gray-400'> 
      <p className='text-gray-300'>John Doe, Software Engineer</p></p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#ebe6e2] w-100 p-5 rounded-2xl border text-white">
    <div className="flex mt-3">
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
    </div>

    <p className="mt-3">
      "The platform made my career transition from finance to tech seamless.
      The personalized recommendations were spot-on and helped me land a role
      I love."
    </p>
    <p className='border-t mt-5 pt-3 text-gray-400'> 
    <p className='text-gray-300'>John Doe, Software Engineer</p></p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#6D28D9] w-100 p-5 rounded-2xl border text-white">
    <div className="flex mt-3">
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
      <MdOutlineStarOutline size={25} className="text-amber-300" />
    </div>

    <p className="mt-3">
      "The platform made my career transition from finance to tech seamless.
      The personalized recommendations were spot-on and helped me land a role
      I love."
    </p>
    <p className='border-t mt-5 pt-3 text-gray-400'> 
      <p className='text-gray-300'>John Doe, Software Engineer</p></p>
  </div>
</div>

      </div>

      
    </div>
  )
}
