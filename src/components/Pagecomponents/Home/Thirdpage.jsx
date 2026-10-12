import React from 'react'
import { SiDevbox } from "react-icons/si";
import { TbDeviceImacFilled } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";


export default function Thirdpage() {
    const features = [
        {
            icon: <SiDevbox size={30} />,
            title: "Technology",
            description: "Description of Feature 1",
        },
        {
            icon: <TbDeviceImacFilled size={30} />,
            title: "Design",
            description: "Description of Feature 2",
        },
        {
            icon: <HiSpeakerphone size={30} />,
            title: "Marketing",
            description: "Description of Feature 3",
        },
        {
            icon: <BsBarChartFill size={30} />,
            title: "finance",
            description: "Description of Feature 4",
        },
        {
            icon: <FaHeart size={30} />,
            title: "healthcare",
            description: "Description of Feature 4",
        },
        {
            icon: <GrSchedule size={30} />,
            title: "education",
            description: "Description of Feature 4",
        },
        {
            icon: <GrSchedule size={30} />,
            title: "Entertainment",
            description: "Description of Feature 4",
        },
        {
            icon: <GrSchedule size={30} />,
            title: "Sports",
            description: "Description of Feature 4",
        }

    ];
    return (
        <div className=' h-250 mt-7 bg-[#030712]'>
            <div className=" flex  flex-col justify-center items-center py-10  ml-5">
                <div className=" w-30 bg-[#1A1B4A] border  rounded-2xl  flex justify-center item-center mt-5 mb-4  text-[#a0a1c3]">
                    <p >our feature</p>

                </div>
                <p className='text-2xl text-white'>Latest Opportunities</p>
                <p className='text-xl text-[#9DA3AF] mt-2'>Hand-picked positions from top companies looking for exceptional talent.</p>
            </div>
            <div className=" grid grid-cols-4  h-150 mt-3 gap-10 ">
                {features.map((val, i) => (
                    <div key={i} className='bg-[#1F2937] mt-1 flex flex-col justify-center items-center ml-5   border rounded-xl p-5 text-[#3730A3] '>
                        <div>
                            {val.icon}

                        </div>
                        <div className="text-xl flex flex-col justify-center items-center text-center mt-2 text-[#FFFFFF]">
                            <h2 className='text-2xl font-md'>{val.title}</h2>
                            <p className='text-[#9DA2AE] font-light'>{val.description}</p></div>


                    </div>
                ))}
            </div>




        </div>

    )
}
