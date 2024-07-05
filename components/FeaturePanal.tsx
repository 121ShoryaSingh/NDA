"use client"

import { Description } from '@headlessui/react';
import React from 'react'

interface FeaturePanalItem {
    title: string;
    description: string;
    tick: string;
    imageurl: string;
}

const ArrayFeature = [
    { number: '1', feature: 'Feature 1'},
    { number: '2', feature: 'Feature 2'},
    { number: '3', feature: 'Feature 3'},
    { number: '4', feature: 'Feature 4'}
]

const FeatureDescription: FeaturePanalItem = {
    title: 'Be Yourself Whenever, Wherever,At Anytime',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry standard dummy text',
    tick: '/check-small.svg',
    imageurl: '/man_standing.png',
}

const FeaturePanal = () => {
  return (
    <>
        <div className='w-[80%] h-full mx-auto flex flex-col px-5 gap-[7rem] xl:flex-row pt-[6.5rem]'>
            <div className='basis-1/2 flex justify-center'>
                <img src={FeatureDescription.imageurl} alt="" className='w-auto h-auto max-md:object-cover object-contain object-bottom'/>
            </div>
            <article className='basis-1/2 flex-grow-0 text-balance'>
                <h1 className='text-[36px] font-bold my-9'>{FeatureDescription.title}</h1>
                <p className='text-[19px] mb-10'>{FeatureDescription.description}</p>
                <div className='grid grid-rows-2 grid-cols-2'>
                    {ArrayFeature.map((item) => (
                        <div key={item.number} className='flex w-full gap-3 mb-4'>
                            <img src={FeatureDescription.tick} alt="" />
                            <p>{item.feature}</p>
                        </div>
                    ))}
                </div>
            </article>

        </div>
    </>
  )
}

export default FeaturePanal