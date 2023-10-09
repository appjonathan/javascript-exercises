import React from 'react'
import spinner from '../public/spinner.gif'
import Image from 'next/image';

const Spinner = () => {
  return (
    <><Image className='w-[200px] m-auto block' src={spinner} alt='loading..' /></>
  )
}

export default Spinner