import Image from "next/image";
import Lines from "./separation";

const Hero =()=>{
    return (<>
        <div className="relative overflow-hidden bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:full lg:pb-28 xl:pb-32">
                    <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="max-w-lg mx-auto mb-8 text-center lg:max-w-md lg:mx-0 lg:text-left">
                            <span className="inline-block px-2.5 py-0.5 font-semibold text-xs leading-5 text-blue-600 bg-blue-100 rounded-md">Company</span>
                            <h2 className="mt-6 text-4xl font-bold leading-10 tracking-tight text-gray-800 dark:text-gray-300 md:text-6xl">
                                Business Product of the year
                            </h2>
                            <p className="mt-6 tracking-wide text-gray-600 dark:text-gray-400 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                Success is most important part of life and it is determination of having achieved and
                                accomplished
                                aim with
                                lots of failure
                                enthusiam.
                            </p>
                            <div className="justify-center mt-6 lg:justify-start sm:flex">
                                <div className="">
                                    <a href="#" className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500 ">
                                        Get started</a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#" className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                        Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image width={'100'} height={'100'} src="https://i.postimg.cc/8PBWyRJN/All-Isometric-DEC16-15.jpg" alt="" className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" />

            </div>
        </div>
        <Lines/>
        </>
    );
}
export default Hero;