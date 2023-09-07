import React from 'react'
import {faFire,faWaterLadder,faFontAwesome,faWater,faMugHot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 
function Nav() {
  return (
    <div className='sticky top-20 flex items-center justify-center gap-8 p-8 shadow-md bg-white z-40 h-7'>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faFire} className='h-5 w-5 md:h-8 md:w-8' />
            <small>Tendance</small>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faWaterLadder} className='h-5 w-5 md:h-8 md:w-8' />
            <small>Piscine</small>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faFontAwesome} className='h-5 w-5 md:h-8 md:w-8' />
            <small>Chateau</small>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faWater} className='h-5 w-5 md:h-8 md:w-8' />
            <small>au bord de la mer</small>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faMugHot} className='h-5 w-5 md:h-8 md:w-8' />
            <small>Chambre d'hote</small>
        </article>
    </div>
  )
}

export default Nav