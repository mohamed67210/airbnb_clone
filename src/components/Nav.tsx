import React from 'react'
import {faFire,faWaterLadder,faFontAwesome,faWater,faMugHot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 
function Nav() {
  return (
    <div className='flex items-center justify-center gap-8 p-8 sticky shadow-md'>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faFire} className='h-8 w-8' />
            <p>Tendance</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faWaterLadder} className='h-8 w-8' />
            <p>Piscine</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faFontAwesome} className='h-8 w-8' />
            <p>Chateau</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faWater} className='h-8 w-8' />
            <p>au bord de la mer</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-3 text-gray-500 cursor-pointer'>
            <FontAwesomeIcon icon={faMugHot} className='h-8 w-8' />
            <p>Chambre d'hote</p>
        </article>
    </div>
  )
}

export default Nav