import React from 'react'

interface SectionProps {
    children: React.ReactNode
}

const section: React.FC<SectionProps> = ({children}) => {
  return (
    <div className='max-w-screen-lg mx-auto px-5'>
        {children}
    </div>
  )
}

export default section