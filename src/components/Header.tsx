'use client' // pour dire a node js que c un composent client pour l'utilisation de usestate
import Image from 'next/image'
import {faSearch,faGlobe,faBars,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { log } from 'console';
import { useRouter } from 'next/navigation';


function Header() {
    const [searchInput,setSearchInput] = useState('');
    const [GuestNumber,setGuestNumber] = useState('1');
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const router = useRouter()
    const search =()=>{
        setSearchInput("");
        if (searchInput === "string") {
            router.push(`/search?location=${searchInput}&startDate=${startDate}&endDate=${endDate}&nbPersonne=${GuestNumber}`)
        }
        
    }
    const handleSelect = (ranges: { selection: { startDate: Date, endDate: Date } }) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const dateRangeHandler = (ranges: RangeKeyDict) => {
        const startDate = ranges.selection.startDate || new Date();
        const endDate = ranges.selection.endDate || new Date();
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const selectionRanger ={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }
    function resetSearInput(){
        setSearchInput('');
    }
    
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 gap-3 p-5 md:px-10 bg-white '>
        {/* left  */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="https://links.papareact.com/qd3" 
            alt='image' 
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            onClick={()=>{router.push('/')}}
            />
        </div>
        {/* middle  */}
        <div className='relative flex items-center md:border-2 rounded-full py-2 md:shadow-sm   my-auto'>
            <input
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500' 
            type="text" 
            placeholder='Start your search' />
            {/* <button className=' bg-red-800 text-white p-2 cursor-pointer'>Search</button> */}
            <FontAwesomeIcon icon={faSearch} className='absolute bg-red-700 rounded-full p-1 text-white right-2 cursor-pointer'/>
        </div>
        {/* right  */}
        <div className='flex items-center space-x-4 h-16 justify-end'>
            <button className='hidden md:inline hover:bg-gray-100 p-2 rounded-full text-sm sm:text-xs'>Mettre mon logement sur Airbnb</button>
            <FontAwesomeIcon icon={faGlobe} className=' md:inline-flex p-2 rounded-full text-white bg-red-700 cursor-pointer md:mx-2'/>
            <div className='flex items-center p-1 border-2 rounded-xl hover:shadow-lg cursor-pointer'>
                <FontAwesomeIcon icon={faBars} className=' md:inline-flex  p-2 cursor-pointer md:mx-2'/>
                <FontAwesomeIcon icon={faUser} className=' md:inline-flex  p-2 rounded-full text-white bg-red-700 cursor-pointer md:mx-2'/>
            </div>
        </div>
        {searchInput && 
        <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker 
            ranges={[selectionRanger]}
            // date minimum qu'on peut choisir
            minDate={new Date()}
            // couleur de la date selectionnée
            rangeColors={["#FF5A5F"]}
            onChange={dateRangeHandler}
            />
            <div className='flex flex-row justify-between items-center border-b-2 px-2'>
                <h1 className='text-2xl font-semibold '>Nombre des voyageurs</h1>
                <FontAwesomeIcon icon={faUser}/>
                <input className='w-12 pl-2 outline-none text-red-500' type="number" min={1}
                 value={GuestNumber}
                 onChange={(e) => setGuestNumber(e.target.value)} />
            </div>
            <div className='flex justify-around p-2'>
                <button onClick={resetSearInput}>Annuler</button>
                <button 
                className=' text-red-500'
                onClick={search}>Chercher</button>

            </div>
        </div>
        
        
        }
        
    </header>
  )
}

export default Header