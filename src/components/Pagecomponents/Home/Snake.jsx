import React from 'react'
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
export default function Snake() {
  
const jobs = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechFlow Inc.",
        location: "San Francisco, CA",
        salary: "$140K - $180K",
        time: "2 days ago",
        skills: ["React", "TypeScript", "Node.js"],
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Google",
        location: "California, USA",
        salary: "$120K - $160K",
        time: "1 day ago",
        skills: ["React", "Next.js", "Tailwind"],
    },
    {
        id: 3,
        title: "Backend Developer",
        company: "Amazon",
        location: "Seattle, WA",
        salary: "$130K - $170K",
        time: "3 days ago",
        skills: ["Node.js", "Express", "MongoDB"],
    },
    {
        id: 4,
        title: "UI/UX Designer",
        company: "Adobe",
        location: "New York, NY",
        salary: "$90K - $120K",
        time: "Today",
        skills: ["Figma", "Adobe XD", "Photoshop"],
    },
    {
        id: 5,
        title: "Full Stack Developer",
        company: "Microsoft",
        location: "Redmond, WA",
        salary: "$150K - $190K",
        time: "5 days ago",
        skills: ["React", "Node.js", "Azure"],
    },
    {
        id: 6,
        title: "Mobile Developer",
        company: "Meta",
        location: "Menlo Park, CA",
        salary: "$140K - $180K",
        time: "1 week ago",
        skills: ["React Native", "Firebase", "Redux"],
    },
]
return (
    <div>
        <div className="bg-[#030712] h-250 mt-7 ">
            {/* features jobs parts */}
            <div className=" flex  flex-col justify-center items-center py-10  ml-5">
                <div className=" w-30 bg-[#1A1B4A] border  rounded-2xl  flex justify-center item-center mt-5 mb-4  text-[#a0a1c3]">
                    <p >our feature</p>

                </div>
                <p className='text-2xl text-white'>Latest Opportunities</p>
                <p className='text-xl text-[#9DA3AF] mt-2'>Hand-picked positions from top companies looking for exceptional talent.</p>
            </div>

            {/* colu */}

            <div className="grid grid-cols-2 gap-8 ml-7">
                {jobs.map((job) => (
                    <div key={job.id} className="w-150 bg-[#111827] border border-[#3730A3] rounded-xl p-6 ">
                        {/* Top */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-lg bg-[#5F626C] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg"   width="26"   height="26"    viewBox="0 0 24 24" fill="none" stroke="white"    strokeWidth="2"    strokeLinecap="round"   strokeLinejoin="round"
                                > <rect width="7" height="13" x="3" y="8" rx="1" /><path d="m15 2-3 3-3-3" /><rect width="7" height="13" x="14" y="8" rx="1" />
                            </svg>
                                   
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white hover:text-[#4F47E5]">
                                    {job.title}
                                </h2>

                                <p className="text-gray-400">
                                    {job.company}
                                </p>
                            </div>
                        </div>

                        {/* Middle */}
                        <div className="flex items-center gap-8 py-5 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <FaLocationDot size={14} />
                                <span>{job.location}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <AiTwotoneDollarCircle size={15} />
                                <span>{job.salary}</span>
                            </div>

                            <span>{job.time}</span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-3">
                            {job.skills.map((skill, index) => (
                                <span key={index}
                                    className="bg-[#1F2937] text-[#B1B6BE] px-4 py-1 rounded-lg hover:text-amber-300">
                               
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
      
<div className="mt-6 justify-center align-center flex gap-4">
  <button className="w-30   bg-[#4F47E5] text-white py-2 rounded-lg hover:bg-[#4338CA] ">
    Apply Now
  </button>
</div> 

</div>

  
</div>


    

    </div>

)
}


