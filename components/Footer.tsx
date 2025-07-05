import React from 'react'
import Hr from './Hr'

import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <Hr/>
        <div className='w-full flex items-center justify-center py-10'>
            <p className='text-center text-lg sm:text-xl flex gap-2'>
                Made with <FaHeart className='mt-1 text-red-500'/> By <span className='italic font-bold text-primary/50'>Tushar More</span>.
            </p>
        </div>
    </>
  )
}

export default Footer