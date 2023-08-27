import Image from 'next/image'
import React from 'react'
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MediumCard({img,title,price,location}) {
  return (
    <div className='flex flex-col gap-2 mt-10 w-72 h-96 cursor-pointer'>
        <div className='relative w-full h-4/6'>
            <FontAwesomeIcon className='absolute z-10 w-6 right-3 top-3 text-gray-500 hover:text-red-700' icon={faHeart}/>
            <Image className='rounded-lg' src={img} alt='image' layout='fill' objectFit='cover'/>
        </div>
        <h2 className='text-lg font-bold'>{location}</h2>
        <p className='text-sm text-gray-500'>{title}</p>
        <p className='text-sm text-gray-500'><span className='font-bold text-black'>{price}€</span>  par nuit</p>
    </div>
  )
}

export default MediumCard