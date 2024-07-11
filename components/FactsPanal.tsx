import React from 'react'

const FactsDescription = {

  
  company: { companyNumber: '06',
      companyDescription:'Offices are available on different countries'
    },
  
  seats:{
    seatsNumber: '238',
    seatsDescription: 'Seats are available right now with dedicated support'
  },
  
  space:{
    spaceNumber: '1395',
    spaceDescription: 'People are using our co-work spaces right now'
  }
  
}

const FactsPanal = () => {

  return (
    <div className='w-full mt-[6.5rem] mb-[4.5rem]'>
        <div className='h-auto w-fit flex max-md:flex-col justify-center items-center lg:gap-32 gap-12 mx-auto'>
          <div className='w-[16rem] flex flex-col justify-center items-center'>
            <p className="text-5xl font-bold mb-5">
              {FactsDescription.company.companyNumber}
            </p>
            <p className="text-center text-pretty">
              {FactsDescription.company.companyDescription}
            </p>
          </div>
          <div className='w-[16rem] flex flex-col justify-center items-center'>
            <p className="text-5xl font-bold mb-5">
              {FactsDescription.seats.seatsNumber}
            </p>
            <p className="text-center text-pretty">
              {FactsDescription.seats.seatsDescription}
            </p>
          </div>
          <div className='w-[16rem] flex flex-col justify-center items-center'>
            <p className="text-5xl font-bold mb-5">
              {FactsDescription.space.spaceNumber}
            </p>
            <p className="text-center text-pretty">
              {FactsDescription.space.spaceDescription}
            </p>
          </div>
        </div>
    </div>
  )
}

export default FactsPanal