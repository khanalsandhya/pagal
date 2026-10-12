import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {



    const mapps = [

        {
            name: "Home",
            path: "/"
        },

        {
            name: "About",
            path: "/about"
        },

        {
            name: "contact",
            path: "/contact"
        },

        {
            name: "Service",
            path: "/service"
        },

    ]




    return (
        <div className='fixed top-0 flex  justify-center item-centre   w-full z-50 '>
            <div className='flex  px-19 mt-3 bg-white  shadow-2xl rounded-4xl  gap-50 py-4 items-center justify-center w-fit'>
                <div>
                    logo
                </div>
                <div className='flex gap-12'>

                    {
                        mapps.map((val, i) => {
                            return (
                                <Link to={val.path} key={i}>
                                    <div className='cursor-pointer '>
                                        {val.name}
                                    </div>
                                </Link>
                            )
                        })
                    }


                    {/* <div className='cursor-pointer' onClick={() => navigate('/')}>
                        Home
                    </div>
                    <div className='cursor-pointer' onClick={() => navigate('/about')}>
                        About Us
                    </div>
                    <div className='cursor-pointer' onClick={() => navigate('service')}>
                        Services
                    </div>
                    <div className='cursor-pointer' onClick={() => navigate('Blog')}>
                        Blog
                    </div>
                    <div className='cursor-pointer' onClick={() => navigate('contact')}>
                        Contact Us
                    </div> */}
                </div>
            </div>
        </div>
    )
}
