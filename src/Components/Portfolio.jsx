import React from 'react'
import { Sections } from './Common/Sections'
import {FaGithub,FaExternalLinkSquareAlt} from "react-icons/fa"

import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
export const Portfolio = () => {

    const projects=[
        {
            id:1,
            image:p1,
            title:"Best App",
            github:"",
            demo:""
        },
        {
            id:2,
            image:p2,
            title:"Best App",
            github:"",
            demo:""
        },
        {
            id:3,
            image:p3,
            title:"Best App",
            github:"",
            demo:""
        },
        {
            id:4,
            image:p4,
            title:"Best App",
            github:"",
            demo:""
        },
        {
            id:5,
            image:p5,
            title:"Best App",
            github:"",
            demo:""
        },
        {
            id:6,
            image:p6,
            title:"Best App",
            github:"",
            demo:""
        }

    ]
  return (
    <Sections
        title="Portfolio 📋"
        subtitle="These are all the projects that I have worked on. Some
        of them are very beginner friendly. So gentle on them "
    >
    <div className='grid gap-6 lg:gap-8 lg:grid-cols-3'>
        { projects.map(({id,image,title,github,demo})=>(
            <div
                key={id}
                className='max-w-sm flex shadow-lg shadow-gray-300 rounded-2xl  overflow-hidden'
            >   <img src={image} alt={title} className='w-2/3'/>
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a href={github}
                        className='text-2xl cursor-pointer duration-150 hover:scale-110'
                        target='_blank'
                        rel='noopener noreferrer'
                    ><FaGithub/></a>
                    <a href={demo}
                        className='text-2xl cursor-pointer duration-150 hover:scale-110'
                        target='_blank'
                        rel='noopener noreferrer'
                    ><FaExternalLinkSquareAlt/></a>
                </div>
            </div>
        ))
        }
    </div>
    </Sections>
  )
}
