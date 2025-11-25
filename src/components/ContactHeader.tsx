import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const ContactHeader = () => {

  const { ref } = useParallax({ translateY: [-25, 18] });

  return (
    <div id='contact' className='h-[30vh]' >
      <div ref={ref as React.LegacyRef<HTMLDivElement>} className='bg-[url(/imgs/contact-bg.jpeg)] blur-sm z-[-10] bg-cover 
      bg-center absolute left-0 right-0 w-full h-[55vh] sm:h-[60vh]' />
      <div className='bg-[#0D0D0D80] flex flex-col h-full w-full items-center justify-center'>
        <h2 className='text-white text-center text-6xl mb-4 mx-2' >CONTACT</h2>
      </div>
    </div>
  )
}

export default ContactHeader