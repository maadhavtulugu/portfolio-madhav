import React from 'react'
import { Sections } from './Common/Sections'
import commerce from "../assets/commerce.png"
import research from "../assets/research.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"
export const Services = () => {
    const services=[
        {
            id:1,
            image:commerce,
            title:"ECommerce Website"
        },
        {
            id:2,
            image:web,
            title:"Web Development"
        },
        {
            id:3,
            image:mobile,
            title:"Mobile Development"
        },
        {
            id:4,
            image:research,
            title:"Research and Development"
        }
    ]
  return (
    <Sections title="Services 🛠️" 
        subtitle="Here are all the services that I can provide to my clients. I
        hope I offter the service that you are looking for. If you don't find something that you are looking for then send me an email"
    >

    <div className='grid gap-10 lg:grid-cols-2'>
        {services.map(({id,image,title})=>(
            <div 
                key={id}
                className='flex flex-col items-center justify-center p-5 shadow-lg
                dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110   '
            >
                <img src={image} alt={title}
                    className='w-36 h-36 md:w-28 md:h-28 object-contain'
                />
                <h3 className='mt-5 text-base'>{title}</h3>
            </div>
        ))}
    </div>
    </Sections>

  )
}
