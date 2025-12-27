import React, { use, useState } from 'react'
// import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showDisease, setShowDisease] = useState(false);
    const [showSymptoms, setShowSymptoms] = useState(false);
    const [showDiet, setShowDiet] = useState(false);
    const [showLifestyle, setShowLifestyle] = useState(false);
    const [showEmergency, setShowEmergency] = useState(false);
    const [showVaccination, setShowVaccination] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false)
  return (
    <div className='font-black px-5 py-4 md:px-2'>
        <div className='flex justify-between items-center px-5'>
            <div className=' px-4 py-4 text-3xl font-bold border-[#E6DCCB]'>
                Rabbitpedia
            </div>
            <div className='justify-around items-center text-md font-semibold gap-4 hidden md:flex md:gap-1 '>
                <div className='relative'
                onMouseEnter={() => setShowAbout(true)}
                 onMouseLeave={() => setShowAbout(false)}
                onClick={() => setShowAbout(true)}
                >
                <h3
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'
                 
                 >
                    About
                </h3>
                {showAbout && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            What is Rabbit?
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Different rabbit Breeds
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Average lifespan
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Male vs Female rabbits
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Indoor & outdoor rabbits
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Myths vs Facts
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowDisease(true)}
                onMouseLeave={() => setShowDisease(false)}
                onClick={() => setShowDisease(true)}
                >
                    <h3 
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'
                >
                    Diseases    
                </h3>
                {showDisease && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Digestive diseases
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Skin diseases
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Dental Problems
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Eye & ear diseases
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Viral diseases
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Parasites
                        </li>
                    </ul>
                </div>}

                </div>
                <div className='relative' 
                onMouseEnter={() => setShowSymptoms(true)}
                onMouseLeave={() => setShowSymptoms(false)}
                onClick={() => setShowSymptoms(false)}
                >
                    <h3 
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    Symptoms
                </h3>
                {showSymptoms && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           Not eating
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Loose 
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Head tilt
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Fur loss
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Sneezing
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowDiet(true)}
                onMouseLeave={() => setShowDiet(false)}
                onClick={() => setShowDiet(true)}
                >
                    <h3 
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    Diet

                </h3>
                {showDiet && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           What rabbits eat daily?
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Safe foods list
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Dangerous foods
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Hay importance
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Water intake
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Baby rabbit diet
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Sick rabbit diet
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowLifestyle(true)}
                 onMouseLeave={() => setShowLifestyle(false)}
                onClick={() => setShowLifestyle(true)}
                >
                    <h3
                  className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    Lifestyle
                </h3>
                {showLifestyle && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           Housing - cage size, flooring
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Cleanign routine
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Exercise time
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Sleep Cycle
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Bonding & handling
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Seasonal care
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowEmergency(true)}
                onClick={() => setShowEmergency(true)}
                onMouseLeave={() => setShowEmergency(false)}
                >
                    <h3
                  className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    Emergency
                </h3>
                {showEmergency && <div className='absolute top-full left-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           Housing - cage size, flooring
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Cleaning routine
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Exercise time
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Sleep Cycle
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Bonding & handling
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Seasonal care
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowVaccination(true)}
                onClick={() => setShowVaccination(true)}
                onMouseLeave={() => setShowVaccination(false)}
                >
                    <h3 
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    Vaccination

                </h3>
                {showVaccination && <div className='absolute top-full right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           Vaccination schedule
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Deworminhg
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            Regular health checkups
                        </li>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                            How to choose a rabbit vet?
                        </li>
                    </ul>
                </div>}
                </div>
                <div className='relative'
                onMouseEnter={() => setShowFAQ(true)}
                onClick={() => setShowFAQ(true)}
                onMouseLeave={() => setShowFAQ(false)}
                >
                    <h3 
                 className='px-4 py-2 cursor-pointer text-black bg-white hover:bg-black hover:text-white rounded-md transition-all duration-500 shadow-lg'>
                    FAQ
                </h3>
                {showFAQ && <div className='absolute top-full right-0 mt-2 w-65 bg-white shadow-lg rounded-md p-3 z-50'>
                    <ul className='cursor-pointer'>
                        <li className='hover:bg-[#000000] hover:text-white px-2 py-1 rounded-md transition'>
                           Contact us
                        </li>
                    </ul>
                </div>}
                </div>
            </div>
            <div className='w-3 md:hidden'>
                <i className="ri-menu-3-line text-3xl"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar