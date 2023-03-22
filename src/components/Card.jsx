import React from "react"
import gambar4 from './../assets/images/gambar4.jpeg'
import gambar5 from './../assets/images/gambar5.jpeg'

export const Card = () => (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">


                <div className="p-4 md:w-1/2 ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                            className="lg:h-full md:h-36 w-full object-cover object-center"
                            src={gambar5}
                            alt="blog"
                        />


                        <div className="relative ... bg-blue-600 text-white p-5">
                            <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/6282234803465" rel="noopener noreferrer">
                                Infopendaftara
                            </a>
                        </div>
                    </div>


                </div>

                {/*  */}
                <div className="p-4 md:w-1/2 ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                            className="lg:h-full md:h-36 w-full object-cover object-center"
                            src={gambar4}
                            alt="blog"
                        />


                        <div className="relative ... bg-blue-600 text-white p-5">
                            <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/6282234803465" rel="noopener noreferrer">
                                Infopendaftara
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
)
