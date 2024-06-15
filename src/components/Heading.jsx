import React from 'react';

const Heading = ({heading}) => {
  return (
    <h2 className='text-white text-lg sm:text-xl lg:text-2xl my-4 underline'>{heading}</h2>
  )
}

export default Heading;