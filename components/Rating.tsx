import React from 'react'

interface RatingProps {
    stars: number
    staricon: string
}

const Rating: React.FC<RatingProps> = ({stars, staricon }) => {
  return (
    <span className='flex gap-1'>
        {new Array(stars).fill(0).map(() => {
            return <img src={staricon} alt="" />
        })}
    </span>
  )
}

export default Rating