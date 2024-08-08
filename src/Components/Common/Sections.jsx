import React from 'react'

export const Sections = ({title,subtitle,children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-12 pb-4 px-5 text-center'>
        <h3 className='py-3 text-3xl lg:text-5xl '>{title}</h3>
        <p className='max-w-fit font-light text-gray-500 mb-5 text-sm md:text-base md:px-60'>{subtitle}</p>
        {children}
    </section>
  )
}
