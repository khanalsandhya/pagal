import React from 'react'
import { BsScissors } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
export default function Footer() {
  return (

   
<div >
<div className='flex bg-[#111827] py-13  w-full text-[#9DA3AF]'>
<div className='flex  px-15 gap-50   w-fit '>
<div className=' font-bold text-white '>
 <div className='flex gap-3 '>
 <h1 className='text-[#F59E0B] text-xl  hover:text-orange-600'>Barber Kraft.</h1>
 <BsScissors  size={25}/>
 </div>
  <p className=' font-light py-4 text-[#9DA3AF]'>hello this is my written note if you<br></br> need this your are welcome dont forget to<br></br> give the feedback after reading this book</p>
 <div className='flex gap-4'>
 <FaFacebook  size={25} />
  <FaTwitter size={25} />
  <FaInstagram size={25}/> 
 </div>
</div>
</div>
<div className='flex  gap-20   font-light '>
<div className='  text-md gap-12 '>
  <h1 className='text-amber-50  hover:text-orange-300'>SERVICE</h1>
<div className="py-3 flex flex-col gap-3">
<p>Classic Haircut</p>
<p>Skin Fade</p>
<p>Beard Trim</p>
<p>Hot Towel Shave</p>
</div>
</div>
<div className='   gap-12'>

  <h1 className='text-amber-50  hover:text-orange-300'>  INFO</h1>
<div className="py-3 flex flex-col gap-3 ">
<p>About Us</p>
<p>our barbers</p>
<p>Gallery</p>
<p>Blog</p>
</div>
</div>
<div className='   gap-12'>
  <h1 className='text-amber-50  hover:text-orange-300'>SHOP</h1>
<div className="py-3 flex flex-col gap-3">
<p>Pricing</p>
<p>Book Now</p>
<p>FAQ</p>
<p>Content</p>
</div>
</div>
<div className='   gap-12'>
  <h1 className='text-amber-50  hover:text-orange-300'>CONTACT US</h1>
<div className="py-3 flex flex-col gap-3">
<div className="flex gap-3  hover:text-orange-300"><CiLocationOn size={20} />

<p>P123 Main Street<br></br>brooking,NY 11201</p></div>
<div className="flex gap-3  hover:text-orange-300"><IoCall size={20} />
<p>(555)7653738</p></div>
<div className="flex gap-3  hover:text-orange-300"><IoMdMail size={20} />
<p>hello@barberkraft.com</p>
</div>
</div>
</div>
  </div>
</div>
</div>

 
  )
}
