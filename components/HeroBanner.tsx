"use client"

import Image from 'next/image'
import React from 'react'
import Section from '@/components/section';

interface descriprtiomItem {
  title: string;
  description: string;
  imageurl: string;
}

const descriptionItem: descriprtiomItem = {
    title: 'Where Work Meets Fashion',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.',
    imageurl: '/office_1.png'
}


const HeroBanner = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row px-5 max-md:px-0 md:w-[90%] xl:pt-52 md:pt-9  mx-auto gap-[3rem] max-lg:gap-[5rem] '>
        <div className='basis-1/2 max-xl:pb-5 h-full flex flex-col justify-center px-3'>
          <h1 className='text-[50px] max-xl:text-[40px] text-balance max-sm:text-[30px] font-bold h-auto leading-tight mb-4 mt-[3.3rem]'>
            {descriptionItem.title}
          </h1>
          <p className='h-auto max-sm:text-[18px] text-balance text-[#606461] text-xl mb-8 font-normal'>
            {descriptionItem.description}
          </p>
          <div className='flex gap-3 max-lg:flex-col w-full items-center'>
            <button className='bg-green-500 px-5 w-[13rem] max-lg:w-full font-bold py-3 h-12 rounded-lg text-white '>Browse our catelog</button>
            <button className='bg-black px-5 py-3 w-[13rem] max-lg:w-full font-bold h-12 rounded-lg text-white'>Contact Us</button>
          </div>
        </div>
        <div className='basis-1/2 flex justify-center '>
            <img className='w-auto h-auto max-md:object-cover object-contain object-bottom' src={descriptionItem.imageurl} alt='' />
        </div>
      </div>
    </>
    
  )
}

export default HeroBanner