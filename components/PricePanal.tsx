'use client'

import ToggleSwitch from './ToggleSwitch'
import PlanCard from './PlanCard'
import React from 'react'

const PricePanal = () => {
  return (
    <div className=''>
        <div>
          <h1>Pricing & Plans</h1>
          <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div>
          <p>Monthly</p>
          <ToggleSwitch/>
          <p>Yearly</p>
          <span>SAVE 25%</span>
        </div>
        <div>
          <div><PlanCard/></div>
          <div><PlanCard/></div>
          <div><PlanCard/></div>
        </div>
    </div>
  )
}

export default PricePanal