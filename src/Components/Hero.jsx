import React from 'react'
import {FaTwitter,FaInstagram,FaLinkedin,FaArrowDown} from 'react-icons/fa'
import maddy from "../assets/maddy.jpg"
export const Hero = () => {
    
window.addEventListener("scroll",function(){
    const downArrow=document.querySelector(".down-arrow");
    if(this.scrollY>=100) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
})

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
        link:`https://www.linkedin.com/in/madhav-tulugu-936b641b5/
`,
        icon:<FaLinkedin/>
    },
  ]
  return (
    <section className='min-h-screen flex flex-col items-center px-5 justify-start  text-center ' >
        <h2 className='text-5xl text-rose-600 uppercase py-2 font-bold'>Madhav Tulugu</h2>
        <h3 className=' text-2xl'>Software Engineer</h3>
        <p className='max-w-xl text-gray-500 font-light pt-1'>
            Hello <span className='animate-pulse text-2xl'>👋</span>, Welcome to my site. I am a Software Development Engineer. I love to work on backend development , front end development and mobile development projects
        </p>
        <div className='flex justify-evenly py-4 lg:py-4 text-3xl w-full md:w-1/3'>
            {
                SOCIAL.map(({id,link,icon})=>(
                    <a
                        href={link}
                        target='_blank'
                        key={id}
                        rel='noopener noreferrer'
                        className='cursor-pointer duration-300 hover:text-rose-600'
                    >
                        {icon}
                    </a>
                ))
            }
        </div>
        <div>
          <img 
            src={maddy}
            alt='avatar'
            className='w-56 h-56  object-cover rounded-xl '
          /> 
            <a 
                href='/Resume_madhav.pdf'
                download={true}
                className='flex items-center justify-center mt-3 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'
            >
                Resume
            </a>        
        </div>
        <div className='mt-3 down-arrow'>
                <FaArrowDown className='text-gray-900 text-2xl animate-bounce dark:text-white'/>
        </div>
            
    </section>
  )
}
