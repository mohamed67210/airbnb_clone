import Image from 'next/image'
import React from 'react'

interface LargeCardProps {
    img: string;
    title: string;
    description: string;
    button: string;
  }

function LargeCard({img,title,description,button}:LargeCardProps) {
  return (
    <section className='relative py-10 w-5/6 mx-auto cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image className='rounded-2xl' src={img} alt='image' layout='fill' objectFit='cover'/>
        </div>
        <div className='absolute top-32 left-12 '>
            <h2 className='text-4xl mb-3 w-64 font-bold'>{title}</h2>
            <p className='font-bold'>{description}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{button}</button>
        </div>
    </section>
  )
}

export default LargeCard