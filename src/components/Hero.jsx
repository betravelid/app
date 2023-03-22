import React from "react"
import reactLogo from './../assets/images/gambar1.jpeg'


export const Hero = () => (
    <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    TRAVEL UMROH & HAJI SURABAYA
                    <br className="hidden lg:inline-block" />
                </h1>
                <h3 className="text-lg font-semibold inline-block">BeTravel - PT. Borneo Exotic Tour
                    No SK KEMENAG PPIU U. 27/2021</h3>
                <p className="mb-8 leading-relaxed">
                    - Biaya Keberangkatan Terjangkau
                    <br />
                    - Banyak Pilihan Paket Promonya
                    <br />
                    - Kemudahan Cara Bayar Pembiayaannya
                </p>
                <div className="flex justify-center">
                    {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                        Button
                    </button> */}

                    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/6282234803465">
                        Infopendaftara
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    // src="https://dummyimage.com/720x600"
                    src={reactLogo}
                />
            </div>
        </div>
    </section>
)
