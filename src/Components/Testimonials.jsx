import React from 'react'
import { Sections } from './Common/Sections'
import maddy from "../assets/maddy.jpg"
export const Testimonials = () => {
    const TESTIMONIALS=[
        {
            id:1,
            image:maddy,
            name:"Yuvraj Singh",
            comment:"Fantastic job on the latest project! Your attention to detail and the innovative approach you took really stood out. The feature is not only functional but also user-friendly. Your hard work is definitely paying off, and it’s inspiring to see such dedication. Keep up the great work!"
        },
        {
            id:2,
            image:maddy,
            name:"Glenn Maxwell",
            comment:"I wanted to take a moment to commend you on your exceptional performance with this project. The quality of your work exceeded our expectations, and your ability to meet deadlines while maintaining high standards is impressive. Your contribution is invaluable to the team. Great job!"
        },
        {
            id:3,
            image:maddy,
            name:"Virat Kohli",
            comment:"I am thrilled with the results of the project! Your work has been outstanding, and it’s clear you’ve put a lot of thought and effort into delivering exactly what we needed. The final product aligns perfectly with our goals, and we couldn’t be happier with the outcome. Thank you for your excellent work!"
        }
    ]
  return (
    <Sections title="Testimonials 💬" subtitle="I often find many people around me talking about my work!. You can find some of them over here">
       <div className='max-w-2xl flex flex-col gap-4'>
       {   TESTIMONIALS.map(({id,image,name,comment})=>(
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-green-300'>
                    <div className='w-1/3'>
                        <img src={image} alt={name}  className='w-35 h-30 border-r-2 rounded-xl'/>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-3 p-2 '>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
        ))}
       </div>
    </Sections>
  )
}
