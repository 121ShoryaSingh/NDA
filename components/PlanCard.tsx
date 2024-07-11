import React from 'react'

interface PlanCardProps {
    PlanName: string
}

const PlanCard = () => {
  return (
    <div className="flex flex-col p-12 mx-auto max-w-md bg-white rounded-lg border">
              <span className="mb-4 text-md font-semibold">Company</span>
              <div className="flex items-baseline mt-8 mb-[0.7rem]">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-black font-semibold">/ month</span>
              </div>
                  <p className="text-gray-400 mb-10">billed monthly</p>
              {/* List */}
              
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
  )
}

export default PlanCard