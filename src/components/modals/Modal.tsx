'use client';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faUser} from "@fortawesome/free-solid-svg-icons";


interface modalProps{
    isOpen: boolean,
    onClose:() => void,
    onSubmit:()=>void,
    onRequestClose: () => void,
    style:() => void
}


function Modal({isOpen,onClose}:modalProps) {

const [showModal, setShowModal] = useState(isOpen);

useEffect(()=>{
    setShowModal(isOpen)
},[isOpen])

function handleClose(){
    setShowModal(false)
    setTimeout(() => {
        onClose();
    }, 300);
}
  return (
    <div>
        <div className='flex justify-center items-center fixed w-full h-full bg-neutral-800/70 z-50 overflow-x-hidden '>
        {/* content wrapper */}
        <div className=' flex flex-col gap-3 bg-white md:w-1/3 md:h-5/6 rounded-lg'>
            <header className=' grid grid-cols-3 gap-1 p-5 border-b '>
                <FontAwesomeIcon className=' cursor-pointer' icon={faXmark} onClick={handleClose}/>
                <h3 className=' font-semibold w-60'>Connexion ou inscription</h3>
            </header>
            {/* form */}
            <div className='flex flex-col gap-2 p-5'>
                <h2 className='font-semibold text-xl'>Bienvenue sur Airbnb</h2>
                <div className='flex flex-col border border-gray-400 rounded-lg overflow-hidden'>
                    <input className='hover:border-2 border-gray-900 rounded-lg h-14 p-5' type="email" name="" id="" placeholder='Email' />
                    <input className='hover:border-2 border-gray-900 rounded-lg h-14 p-5' type="text" name="" id="" placeholder='nom' />
                    <input className='hover:border-2 border-gray-900 rounded-lg h-14 p-5' type="text" name="" id="" placeholder='Prénom' />
                    <input className='hover:border-2 border-gray-900 rounded-lg h-14 p-5' type="password" name="" id="" placeholder='Password' />
                </div>
                <small className='text-xs text-gray-700'>Nous vous appellerons ou vous enverrons un SMS pour confirmer votre numéro. Les frais standards d'envoi de messages et d'échange de données s'appliquent</small>
                <button className=' w-full hover:bg-rose-500 text-white p-3 rounded-lg transition duration-500 ease-out'>Continuer</button>
            </div>
        </div>
        </div>
    </div>
    
    
  )
}

export default Modal