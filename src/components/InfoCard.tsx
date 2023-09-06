import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart,faStar} from "@fortawesome/free-solid-svg-icons";


interface Props{
    img:string,
    location:string,
    price:number;
    description:string
    title:string
    star:number
}

function InfoCard({img,location,price,description,title,star}:Props) {
  return (
    <article className='flex flex-row'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} alt='image' layout='fill' objectFit='cover'/>
        </div>
        <div className='flex flex-col flex-grow pl-6'>
            <div className='flex flex-row justify-between'>
                <p className='text-sm text-gray-500'>{location}</p>
                <FontAwesomeIcon icon={faHeart} className=' text-gray-500 hover:text-red-400 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className=' font-semibold '>{title}</h2>
                <p className=' text-gray-600'>{description}</p>
            </div>
            <div className='flex flex-row justify-between'>
            <p className='flex items-center'><FontAwesomeIcon icon={faStar} className=' text-red-400'/>{star}</p>
            <p>{price}</p>
            </div>
        </div>
    </article>
  )
}

export default InfoCard