import Image from 'next/image'
import React from 'react'
import {faSearch,faGlobe,faBars,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className='stickey top-0 z-50 grid grid-cols-3 gap-3 h-20 bg-white p-5 md:px-10'>
        {/* left  */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="https://links.papareact.com/qd3" 
            alt='image' 
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            />
        </div>
        {/* middle  */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500' type="text" placeholder='Start your search' />
            {/* <button className=' bg-red-800 text-white p-2 cursor-pointer'>Search</button> */}
            <FontAwesomeIcon icon={faSearch} className='hidden md:inline-flex h-8 w-8 p-2 rounded-full text-white bg-red-700 cursor-pointer md:mx-2'/>
        </div>
        {/* right  */}
        <div className='flex items-center space-x-4 justify-end'>
            <button className='hidden md:inline hover:bg-gray-100 p-4 rounded-full'>become a host</button>
            <FontAwesomeIcon icon={faGlobe} className=' md:inline-flex h-8 w-8 p-2 rounded-full text-white bg-red-700 cursor-pointer md:mx-2'/>
            <div className='flex items-center p-1 border-2 rounded-xl hover:shadow-lg cursor-pointer'>
                <FontAwesomeIcon icon={faBars} className=' md:inline-flex h-8 w-8 p-2 cursor-pointer md:mx-2'/>
                <FontAwesomeIcon icon={faUser} className=' md:inline-flex h-8 w-8 p-2 rounded-full text-white bg-red-700 cursor-pointer md:mx-2'/>
            </div>
        </div>
    </header>
  )
}

export default Header