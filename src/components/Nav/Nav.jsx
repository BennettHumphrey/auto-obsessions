import React from 'react';
import { useWindowWidth } from '../useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = ({scrolled, setScrolled}) => {

    const width = useWindowWidth();

  return (
    <div  className={`
    ${scrolled ? `bg-black` : `bg-transparent`}
    fixed top-0 left-0 text-white duration-700 ease-in-out flex flex-col md:flex-row w-full md:justify-between md:pr-3 z-[100]`} >
        <a href='#home' className='text-inherit flex items-center md:w-3/5' >
            <h1 className='text-2xl px-2 pt-2 md:pt-0 bg-accent text-text-light w-screen text-center' >Auto Obsessions Customs</h1>
        </a>
        {width > 768 ? <DesktopNav setScrolled={setScrolled} /> : <MobileNav setScrolled={setScrolled} />}
    </div>
  )
}





export default Nav