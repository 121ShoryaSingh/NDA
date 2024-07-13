'use client'
import { features } from 'process';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

type PlanFeature = {
  number: number;
  Avaliable: boolean;
  Feature: string;
};
   

interface PlanCardProps {
    PlanName: string,
    MonthlyPlanAmount: string,
    YearlyPlanAmount: string,
    enable: boolean,
    PlanFeatures: PlanFeature[],
    className?: string,
    ButtonText?: string,
}

const PlanCardImages = {
  tick: '/small_right.svg',
  cross: '/small_remove.svg'
}

const PlanCard: React.FC<PlanCardProps> = ({PlanName, MonthlyPlanAmount, YearlyPlanAmount, enable, PlanFeatures, className, ButtonText}) => {
  
  const [selectedPlanAmount, setSelectedPlanAmount] = useState<string>('');

  // Update selectedPlanAmount whenever `enable` prop changes
  useEffect(() => {
    setSelectedPlanAmount(enable ? YearlyPlanAmount : MonthlyPlanAmount);
  }, [enable, MonthlyPlanAmount, YearlyPlanAmount]);
  
  return (
    <div className="flex flex-col p-12 mx-auto max-w-[28rem] min-w-fit max-lg:min-w-[22rem] justify-center items-start bg-white rounded-lg border">
              <span className="mb-4 text-md font-semibold text-[#68D585] uppercase">{PlanName}</span>
              <div className="flex items-baseline mt-8 mb-[0.7rem]">
                  <span className="mr-2 text-5xl font-extrabold">$
                    {selectedPlanAmount}
                  </span>
                  <span className="text-black font-semibold">/ {enable ? 'year' : 'month'}</span>
              </div>
                  <p className="text-gray-400 mb-10">billed monthly</p>
              {/* List */}
              
              <ul className="mb-8 space-y-4 text-left">
                {PlanFeatures.map((feature) => (
                  <li key={feature.number} className="flex items-center space-x-3">
                    {feature.Avaliable ? (
                      <img src={PlanCardImages.tick} alt='Tick' />
                    ) : (
                      <img src={PlanCardImages.cross} alt='Cross' />
                    )}
                    <span>{feature.Feature}</span>
                  </li>
                ))}
              </ul>
          
              <button className={className} >
                {ButtonText}
                <FaArrowRight/>
            </button>
              <span className='mt-4 text-sm text-gray-500'>No credit card required</span>
    </div>
  )
}

export default PlanCard