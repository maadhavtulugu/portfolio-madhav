import React from 'react'
import { MdNightsStay,MdWbSunny } from 'react-icons/md'
export const Header = ({darkMode,setDarkMode}) => {
  return (
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-4'>
        <nav className='flex justify-between items-center px-8 pt-1'>
            <h1 className='text-lg'>Madhav</h1>
            <div onClick={()=>setDarkMode(!darkMode)}>
            {
                darkMode?
                <MdWbSunny  className='text-2xl cursor-pointer'/>
                :
                <MdNightsStay className='text-2xl cursor-pointer' />
            }        
            </div>
        </nav>
    </header>
  )
}

