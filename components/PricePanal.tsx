'use client'

import ToggleSwitch from './ToggleSwitch'
import PlanCard from './PlanCard'
import React from 'react'

const PricePanal = () => {
  return (
    <div className=''>
        <div className='flex flex-col text-center text-pretty w-2/3 mx-auto'>
          <h1>Pricing & Plans</h1>
          <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <span className='font-semibold'>Monthly</span>
          <ToggleSwitch/>
          <span className='font-semibold'>Yearly</span>
          <span className='text-sm uppercase bg-[#E2F7E8] px-3 py-2 text-greentext font-bold rounded-full'>save 25%</span>
        </div>
        <div>
          <div><PlanCard PlanName='Starter' PlanAmount='19' ButtonText='Sign-up' className='text-greentext font-bold bg-offwhite py-4 rounded-md px-5 flex justify-between items-center w-2/3'/></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default PricePanal