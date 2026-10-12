import React from 'react'
import { GiCheckedShield } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { PiSpotifyLogoBold } from "react-icons/pi";
export default function Fourth() {
  const company=[
    {

      icon:<GiCheckedShield size={40} />,
      title: "Senior React Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
   
  },
  {
     icon:<GiLaptop  size={40}/>,
      title: "Frontend Developer",
      company: "Google",
      location: "California, USA",
      
  },
  {
    icon:<PiAppleLogoDuotone size={40}/>,
      title: "Backend Developer",
      company: "Amazon",
      location: "Seattle, WA",
     
  },
  {
     icon:<PiSpotifyLogoBold size={40}/>,
      title: "UI/UX Designer",
      company: "Adobe",
      location: "New York, NY",
      
  },
  {
    icon:<GiLaptop  size={40}/>,
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "Redmond, WA",
      
  },
  {
    icon:<GiLaptop  size={40}/>,
      title: "Mobile Developer",
      company: "Meta",
      location: "Menlo Park, CA",
      

    }
  ]
  return (
    <div>
     <div className="bg-gray-500 h-200 mt-10">
     <div className=" flex  flex-col justify-center items-center py-10  ml-5">
                <div className=" w-30 bg-[#1A1B4A] border  rounded-2xl  flex justify-center item-center  mb-4  text-[#a0a1c3]">
                    <p >our feature</p>

                </div>
                <p className='text-2xl text-white'>Latest Opportunities</p>
                <p className='text-xl text-[#9DA3AF] mt-2 font-serif'>Hand-picked positions from top companies looking for exceptional talent.</p>
            </div>
            <div className=" grid-cols-3 h-120  w-10/12 mt-3 gap-10 grid justify-center items-center ml-15">
              {company.map((val,item) =>(
                  <div key={item} className='bg-[#1F2937] ml-5 border rounded-xl p-5 text-[#3730A3] flex flex-col justify-center items-center'>
                  <div>
                      {val.icon}

                  </div>
                  <div className="text-xl flex flex-col justify-center items-center text-center mt-2 text-[#FFFFFF]">
                      <h2 className='text-2xl font-md'>{val.title}</h2>
                      <p className='text-[#9DA2AE] font-light'>{val.company}</p>
                      <p className='text-[#9DA2AE] font-light'>{val.location}</p>
                      </div>


              </div>
              ))}
            </div>
            <div className="flex justify-center mt-10 ">
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
      View All Companies
    </button>
  </div>
     </div>
    </div>
  )
}
