import React from 'react'

export default function Second() {
  return (
    <div>
  <div className="bg-[#030712] py-25 px-8">
  <div className="  flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Barber Team" className="w-full rounded-xl " />
    
     
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2">
   
      <h2 className="text-4xl font-bold text-white">
      Connecting Talent with Opportunity
      </h2>

      <p className="mt-6 text-xl font-serif text-blue-200 leading-relaxed">
      “To make the job search process transparent, efficient, and empowering for both candidates and employers.”
      </p>

      <div className="mt-8 space-y-6 text-[#9DA3AF] leading-8">
        <p>
        HireHub was founded in 2022 by a team of recruiters and engineers who saw firsthand how broken the traditional hiring process was.
         Job seekers spent hours on outdated platforms, employers sifted through unqualified applications, and both sides felt the process
          was working against them.
        </p>

        <p>
          We believe the barbershop is more than a place to get a cut. It's a
          community hub, a place to decompress, and a space where every man can
          look and feel his best. Our barbers are craftsmen who take pride in
          every fade, every shave, and every conversation.
        </p>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}
