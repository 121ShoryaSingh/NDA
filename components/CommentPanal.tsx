"use client"

import React from 'react'
import Rating from './Rating'
import { Description } from '@headlessui/react'
import FactsPanal from './FactsPanal'


const commentDescription = {
  commentImage: '/girl_glasses.svg',
  stars: 5,
  description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text"'
}

const commentImage = {
  commentIcon: '/Shape.svg',
  staricon: '/star.svg',
}

const CommentPanal = () => {
  return (
    <div className='w-full '>
        <div className='flex justify-center items-center mx-auto w-[98%] bg-darkblue rounded-md'>
          <div className='h-[80%] w-[80%] flex max-lg:flex-col gap-10 my-20'>
            <div className='basis-1/2 flex flex-col justify-center lg:pl-20 max-lg:px-20 max-md:px-16 max-lg:mt-20 max-sm:p-0'>
              <div className='mb-32'>
                <img src={commentImage.commentIcon} alt="" />
              </div>
              <div className='mb-[3.13rem]'>
                <Rating stars={commentDescription.stars} staricon={commentImage.staricon}/>
              </div>
              <p className='text-balance text-white w-full text-lg'>
                {commentDescription.description}
              </p>
            </div>
            <div className='basis-1/2 flex justify-center w-auto h-auto max-lg:mb-20'>
              <img src={commentDescription.commentImage} alt="" className='w-auto h-auto max-md:object-cover sm:shadow-3xl shadow-2xl rounded-md' />
            </div>
          </div>
        </div>
        <div className=''>
          <FactsPanal/>
        </div>
    </div>
  )
}

export default CommentPanal