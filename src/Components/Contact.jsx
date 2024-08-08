import React from 'react'
import { Sections } from './Common/Sections'
import contact from '../assets/mobile.png'
import {FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'
export const Contact = () => {
    const SOCIAL=[
        {
            id:1,
            link:"https://x.com/MTulugu21313",
            icon:<FaTwitter/>
        },
        {
            id:2,
            link:"https://www.instagram.com/maadhav.12/",
            icon:<FaInstagram/>
        },
        {
            id:3,
            link:`https://www.linkedin.com/in/madhav-tulugu-936b641b5/`,
            icon:<FaLinkedin/>
        },
      ]
  return (
    <Sections title="Contact 📞" subtitle="These are the ways you can get in touch with me.Hope to here from you soon"> 
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <div>
            <img src={contact} alt='cotact' className='w-32 h-32'/>
        </div>    
        <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>I am open to talk regarding projects and management. Feel free to contact me using your preferred media</p>
        </div>
        <div className='w-full flex items-center justify-evenly text-3xl'>
        {
            SOCIAL.map(({id,link,icon})=>(
                <a href={link} target='_blank' rel="noopener noreferrer" className='duration:200 ease-in-out hover:text-rose-600'>{icon}</a>
            ))
        }
        </div>

        <div className='p-4 text-left w-full'>
            <form action='https://getform.io/f/ayvpwmob' method='POST'>
                <div className='gap-4 w-full'>
                    <div className='flex flex-col my-2 '>
                        <label className='capitalize text-sm py-1 font-extralight'>Name</label>
                        <input type='text' name="name"
                        className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                        ></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-1 font-extralight'>Phone</label>
                        <input type='text' name="phone"
                        className='border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                        ></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-1 font-extralight'>Email</label>
                        <input type='text' name="email"
                        className='border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                        ></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-1 font-extralight'>Message</label>
                        <textarea
                            name="message"
                            rows="10"
                             className='border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'
                        >
                        </textarea>
                      
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='my-4 bg-gradient-to-r from-red-600 to-teal-600
                    text-white px-6 py-2 rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200' >Send Message</button>
                </div>
            </form>
        </div>
    </div>
    </Sections>
  )
}
