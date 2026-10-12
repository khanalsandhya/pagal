import React from 'react'
import Map from './Map'

export default function First() {
    const features = [
        {
            name: "Full Name",
            type: "text",
            placeholder: "Jane Doe",
        },
        {
            name: "Email",
            type: "email",
            placeholder: "jane123@gmail.com",
        },
        {
            name: "Subject",
            type: "text",
            placeholder: "Job posting partnership, general inquiry",
        },
        {
            name: "Message",
            type: "textarea",
            placeholder: "Tell us how we can help.",
        },
    ]

    const field = [
        {

        }
    ]
    return (
        <div className="h-180 bg-gray-900 flex  p-6  ">
            <form className=" p-18 rounded-xl flex-1  ">

                <h1 className="text-3xl font-bold text-white mb-4 text-center j">
                    Send Us a Message
                </h1>
                <p className='text-gray-400'>Fill out the form below and we will get back to you within 24 hours.</p>
                {features.map((item) => (
                    <div className="mt-5 " key={item.name}>
                        <label className=" text-white  p-2 mt-2 block font-bold">
                            {item.name}
                        </label>

                        {item.type === "textarea" ? (
                            <textarea placeholder={item.placeholder} className="w-full p-3 rounded-lg bg-gray-700 text-white " />
                        ) : (
                            <input
                                type={item.type}
                                placeholder={item.placeholder}
                                className="w-full p-3 rounded-lg bg-gray-700 text-white "
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700" >
                    Send Message
                </button>

            </form>
            <div className='text-white flex-1 h-full '>
                <Map />

            </div>

        </div>
    )
}