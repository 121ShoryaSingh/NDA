'use client'

import ToggleSwitch from './ToggleSwitch'
import PlanCard from './PlanCard'
import React, { useState } from 'react'

  const PlanDetails = {
    starter: {
      PlanName: 'Starter',
      MonthlyPlanPrice: '19',
      YearlyPlanPrice: '239',
      PlanFeature: [     {number: 1, Avaliable: true , Feature: 'Feature 1'},
                         {number: 2, Avaliable: true , Feature: 'Feature 2'},
                         {number: 3, Avaliable: true , Feature: 'Feature 3'},
                         {number: 4, Avaliable: false , Feature: 'Feature 4'},
                         {number: 5, Avaliable: false , Feature: 'Feature 5'},
                      ] ,
    },
    standrad: {
      PlanName: 'Standard',
      MonthlyPlanPrice: '49',
      YearlyPlanPrice: '599',
      PlanFeature: [ {number: 1, Avaliable: true , Feature: 'Feature 1'},
                         {number: 2, Avaliable: true , Feature: 'Feature 2'},
                         {number: 3, Avaliable: true , Feature: 'Feature 3'},
                         {number: 4, Avaliable: true , Feature: 'Feature 4'},
                         {number: 5, Avaliable: false , Feature: 'Feature 5'},
                      ] ,
    },
    premium: {
      PlanName: 'Premium',
      MonthlyPlanPrice: '99',
      YearlyPlanPrice: '1199',
      PlanFeature: [ {number: 1, Avaliable: true , Feature: 'Feature 1'},
                         {number: 2, Avaliable: true , Feature: 'Feature 2'},
                         {number: 3, Avaliable: true , Feature: 'Feature 3'},
                         {number: 4, Avaliable: true , Feature: 'Feature 4'},
                         {number: 5, Avaliable: true , Feature: 'Feature 5'},
                      ] ,
    },
  }

const PricePanal = () => {

  const [enabled, setEnabled] = useState<boolean>(false)
  
  const ToggleEnable = () => {
    setEnabled(!enabled)
    console.log(enabled);
  }

  return (
    <div className=''>
        <div className='flex flex-col text-center text-pretty w-2/3 mx-auto max-md:w-full '>
          <h1 className='text-4xl font-bold mt-[7.7rem]'>Pricing & Plans</h1>
          <p className='w-2/3 mx-auto mt-4 max-lg:w-full px-3'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div className='flex justify-center items-center gap-3 mt-[3.2rem] w-1/2 max-md:w-full mx-auto'>
          <span className='font-semibold'>Monthly</span>
          <ToggleSwitch Enabled={enabled} ToggleEnabled={ToggleEnable} />
          <span className='font-semibold'>Yearly</span>
          <span className='text-sm uppercase bg-[#E2F7E8] px-3 py-2 text-greentext font-bold rounded-full'>save 25%</span>
        </div>
        <div className='flex w-fit max-lg:flex-col max-lg:items-center h-auto mx-auto gap-8 mt-[3.3rem] pb-[10.3rem] max-lg:pb-[7rem]'>
          <div className=''>
            <PlanCard PlanName={PlanDetails.starter.PlanName} 
                      MonthlyPlanAmount={PlanDetails.starter.MonthlyPlanPrice}
                      YearlyPlanAmount={PlanDetails.starter.YearlyPlanPrice}
                      PlanFeatures={PlanDetails.starter.PlanFeature}
                      enable={enabled}
                      ButtonText='Sign up' 
                      className='text-greentext font-bold min-w-fit bg-offwhite py-4 rounded-md px-5 flex justify-between items-center w-2/3'/>
          </div>
          <div className=''>
          <PlanCard PlanName={PlanDetails.standrad.PlanName} 
                      MonthlyPlanAmount={PlanDetails.standrad.MonthlyPlanPrice}
                      YearlyPlanAmount={PlanDetails.standrad.YearlyPlanPrice}
                      PlanFeatures={PlanDetails.standrad.PlanFeature} 
                      enable={enabled}
                      ButtonText='Start Free Trial' 
                      className='text-offwhite font-bold min-w-[12rem] bg-greentext py-4 rounded-md px-4 flex justify-between items-center w-full'/>
          </div>
          <div className=''>
            <PlanCard PlanName={PlanDetails.premium.PlanName} 
                      MonthlyPlanAmount={PlanDetails.premium.MonthlyPlanPrice}
                      YearlyPlanAmount={PlanDetails.premium.YearlyPlanPrice}
                      PlanFeatures={PlanDetails.premium.PlanFeature}
                      enable={enabled} 
                      ButtonText='Sign up' 
                      className='text-greentext font-bold min-w-fit bg-offwhite py-4 rounded-md px-5 flex justify-between items-center w-2/3'/>
          </div>
        </div>
        <div className='bg-greentext w-full py-[3.8rem] '>
          <div className='flex max-sm:flex-col mx-auto w-fit gap-9'>
            <span className='text-3xl font-bold text-white'>Ready to get started?</span>
            <button className='text-lg bg-white w-[14rem] rounded-md font-bold'>Sign Up For Free</button>
          </div>
        </div>
    </div>
  )
}

export default PricePanal