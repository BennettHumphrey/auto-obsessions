import React from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa';


const Footer = () => {



  return (
    <div className='bg-footer px-4 md:px-[20vw]' >
      <h2 className='text-2xl py-6 m-auto text-center' >Auto Obsessions Customs</h2>
      <div className='flex justify-center gap-6 md:gap-12 m-auto pb-6' >
        <a href="https://www.instagram.com/auto_obsessions/" target='_blank' aria-label='Follow us on Instagram!'>
          <FaInstagram className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
        </a>
        <a href="https://www.facebook.com/p/Auto-Obsessions-Customs-Inc-100063914803711/" target='_blank' aria-label='Follow us on Instagram!'>
          <FaFacebookF className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
        </a>
      </div>
      <h6 className='text-center pb-2 pt-8' >Website built by <a className='underline inline-block hover:translate-x-2 hover:scale-110 hover:text-orange-400 duration-300' href="https://bennetthumphrey.com/">Bennett Humphrey</a></h6>
    </div>
  )
}

export default Footer